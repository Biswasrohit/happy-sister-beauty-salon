export function TopInfoBar() {
  return (
    <div className="hidden border-b border-cream-dark/60 bg-cream-dark/40 md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs tracking-wide text-warm-gray">
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="transition-colors duration-200 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors duration-200 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Yelp"
            className="transition-colors duration-200 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.376-.558 1.206-.456 1.47.18l1.796 4.305c.264.633-.236 1.296-1 1.02zm-8.428 5.214l1.793-4.837c.354-.955 1.794-.955 2.148 0l1.793 4.837c.236.636-.28 1.296-1.02 1.02l-3.694-1.06c-.74-.213-1.256-1.324-.02-.96zM6.08 12.594l4.995 1.433c.96.276 1.74-.8 1.176-1.63L9.346 8.09c-.376-.558-1.206-.456-1.47.18L6.08 12.575c-.264.633.236 1.296 1 1.02z" />
            </svg>
          </a>
        </div>

        <span className="font-medium">
          Mon–Sat 9am – 7:30pm &nbsp;|&nbsp; Sun 10am – 6:30pm
        </span>

        <a
          href="tel:7184782388"
          className="font-medium transition-colors duration-200 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          (718) 478-2388
        </a>
      </div>
    </div>
  );
}
