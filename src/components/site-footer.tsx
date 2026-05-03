import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-[var(--color-navy)] text-[var(--color-sky-100)]">
      <div className="absolute inset-0 bg-dot-grid-dark opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[var(--color-baby)] grid place-items-center text-[var(--color-navy)] text-xs font-bold tracking-widest">
              SGV
            </span>
            <span>
              <span className="block text-white text-base font-semibold leading-tight">
                Christian Club Collective
              </span>
              <span className="block text-[var(--color-baby)] text-xs leading-tight">
                San Gabriel Valley
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--color-sky-200)]">
            One mission, every campus. A regional network of high school
            Christian clubs across the SGV.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="mailto:sgvchristianclubs@gmail.com"
              aria-label="Email the collective"
              className="p-2 rounded-lg bg-white/5 hover:bg-[var(--color-baby)] hover:text-[var(--color-navy)] transition cursor-pointer"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-white/5 hover:bg-[var(--color-baby)] hover:text-[var(--color-navy)] transition cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/about", label: "About" },
              { href: "/events", label: "Events" },
              { href: "/everything-night", label: "Everything Night" },
              { href: "/clubs", label: "Clubs" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="fancy-link text-[var(--color-sky-200)] hover:text-white transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/leadership", label: "Leadership" },
              { href: "/churches", label: "Churches" },
              { href: "/contact", label: "Contact" },
              { href: "/contact?type=start", label: "Start a club" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="fancy-link text-[var(--color-sky-200)] hover:text-white transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-sky-300)]">
          <p>
            &copy; {new Date().getFullYear()} SGV Christian Club Collective. Built
            with love in the valley.
          </p>
          <p className="text-[var(--color-sky-300)]">
            Through Him, we are chosen.
          </p>
        </div>
      </div>
    </footer>
  );
}
