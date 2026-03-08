export function Footer() {
  return (
    <footer className="border-t border-cream-dark/60 bg-cream-dark/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="mb-4 font-script text-3xl text-charcoal">
            Happy Sister Beauty Salon
          </h3>
          <div className="flex gap-4">
            {[
              { name: "Facebook", href: "#" },
              { name: "Instagram", href: "#" },
              { name: "Yelp", href: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-sm text-warm-gray transition-colors duration-200 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal-light">
            Contact
          </h4>
          <div className="space-y-2 text-sm leading-relaxed text-warm-gray">
            <p>
              39-75 61st St
              <br />
              Woodside, NY 11377
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:hello@happysistersalon.com"
                className="transition-colors duration-200 hover:text-coral"
              >
                hello@happysistersalon.com
              </a>
            </p>
            <p>
              Call:{" "}
              <a
                href="tel:7184782388"
                className="transition-colors duration-200 hover:text-coral"
              >
                (718) 478-2388
              </a>
            </p>
          </div>
        </div>

        {/* Studio Hours */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal-light">
            Studio Hours
          </h4>
          <div className="space-y-2 text-sm text-warm-gray">
            <div className="flex justify-between">
              <span>Mon – Sun</span>
              <span>9am – 7:30pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-dark/40 py-4 text-center text-xs text-warm-gray/60">
        &copy; {new Date().getFullYear()} Happy Sister Beauty Salon. All rights
        reserved.
      </div>
    </footer>
  );
}
