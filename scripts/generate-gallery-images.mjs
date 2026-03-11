import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import * as path from "node:path";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is required.");
  console.error("Usage: GEMINI_API_KEY=your-key node scripts/generate-gallery-images.mjs");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const OUTPUT_DIR = path.join(import.meta.dirname, "..", "public", "gallery");

const galleryPrompts = [
  {
    filename: "1-balayage.png",
    aspect: "3:4",
    prompt:
      "A professional salon photograph showing the back of a woman's head with beautiful balayage hair coloring. Warm honey and caramel tones blend seamlessly from dark roots to lighter ends. Shot in a modern upscale hair salon with soft diffused lighting. Editorial quality, shallow depth of field.",
  },
  {
    filename: "2-highlights.png",
    aspect: "1:1",
    prompt:
      "A close-up professional salon photo of a woman with fresh dimensional highlights in her hair, showing subtle golden and platinum streaks through brunette hair. Soft studio lighting, clean modern salon background with warm tones. High-end beauty editorial style.",
  },
  {
    filename: "3-waves.png",
    aspect: "4:5",
    prompt:
      "A professional salon photograph of a woman with gorgeous loose beachy waves cascading over her shoulders. Hair has natural movement and shine. Shot from a three-quarter angle in a chic minimalist salon with warm ambient lighting. Beauty editorial quality.",
  },
  {
    filename: "4-updo.png",
    aspect: "1:1",
    prompt:
      "A professional photograph of an elegant updo hairstyle from behind and slightly to the side. Intricate twisted bun with delicate face-framing tendrils. Soft romantic lighting in a luxurious salon setting. Bridal or formal event styling. Editorial quality.",
  },
  {
    filename: "5-color.png",
    aspect: "3:4",
    prompt:
      "A professional salon photograph showing a vibrant hair color transformation — rich auburn and copper tones on flowing straight hair. The color catches the light beautifully. Shot in a high-end salon with soft directional lighting. Beauty magazine editorial style.",
  },
  {
    filename: "6-blowout.png",
    aspect: "1:1",
    prompt:
      "A professional salon photo of a woman with a perfect voluminous blowout, hair flowing with bounce and movement. Sleek and shiny with beautiful body. Clean modern salon background. Soft glamorous lighting. High-end beauty photography.",
  },
  {
    filename: "7-trim.png",
    aspect: "4:5",
    prompt:
      "A professional salon photograph of a stylist carefully trimming a client's hair with precision scissors. Focus on the hands, scissors, and freshly cut hair ends. Warm salon lighting, shallow depth of field. Authentic candid salon moment, editorial quality.",
  },
  {
    filename: "8-ombre.png",
    aspect: "1:1",
    prompt:
      "A professional salon photograph showing beautiful ombre hair from behind — a seamless gradient from dark chocolate brown at the roots to warm caramel blonde at the tips. Long flowing hair with natural texture. Soft backlit salon setting. Beauty editorial style.",
  },
  {
    filename: "9-style.png",
    aspect: "1:1",
    prompt:
      "A professional photograph of a stylish modern haircut and styling — a textured bob with subtle layers and movement. The hair looks healthy and polished. Shot in an elegant minimalist salon with soft natural window light. High-end beauty editorial.",
  },
];

async function generateImage(entry) {
  console.log(`Generating: ${entry.filename}...`);

  const response = await ai.models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash-image",
    contents: entry.prompt,
    config: {
      responseModalities: ["IMAGE"],
      imageConfig: {
        aspectRatio: entry.aspect,
        imageSize: "1K",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const buffer = Buffer.from(part.inlineData.data, "base64");
      const outputPath = path.join(OUTPUT_DIR, entry.filename);
      fs.writeFileSync(outputPath, buffer);
      console.log(`  Saved: ${outputPath}`);
      return true;
    }
  }

  console.warn(`  Warning: No image returned for ${entry.filename}`);
  return false;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let success = 0;
  let failed = 0;

  for (const entry of galleryPrompts) {
    try {
      const ok = await generateImage(entry);
      if (ok) success++;
      else failed++;
    } catch (err) {
      console.error(`  Error generating ${entry.filename}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone! ${success} images generated, ${failed} failed.`);
}

main();
