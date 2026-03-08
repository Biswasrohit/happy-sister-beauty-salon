import Link from "next/link";

export function Footer() {
  return (
    <footer className="glass-dark relative text-mint-light">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-serif text-xl text-sage-light">
            Happy Sister
          </h3>
          <p className="text-sm leading-[1.7] text-sage">
            Your neighborhood barbershop & beauty salon in Woodside, Queens.
            Where everyone leaves feeling like family.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-serif text-lg text-sage-light">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/services", label: "Services & Pricing" },
              { href: "/gallery", label: "Gallery" },
              { href: "/book", label: "Book Appointment" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sage transition-colors duration-200 hover:text-sage-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-serif text-lg text-sage-light">
            Hours & Location
          </h4>
          <p className="text-sm leading-[1.7] text-sage">
            39-75 61st St
            <br />
            Woodside, NY 11377
          </p>
          <p className="mt-2 text-sm text-sage">
            Open every day: 9:00 AM - 7:30 PM
          </p>
          <div className="mt-4 flex gap-4">
            {["Facebook", "Instagram", "Yelp"].map((name) => (
              <span
                key={name}
                className="cursor-pointer text-sm text-sage transition-colors duration-200 hover:text-sage-light"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-sage/20 py-4 text-center text-xs text-sage/60">
        &copy; {new Date().getFullYear()} Happy Sister Beauty Salon. All rights
        reserved.
      </div>
    </footer>
  );
}
