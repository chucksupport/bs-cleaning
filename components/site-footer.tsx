import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[#0a0a0a]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-primary">B&apos;s</span> Trash Bin Cleaning
          </span>
          <p className="max-w-xs text-sm text-muted-foreground">
            Professional trash bin cleaning and pressure washing across{" "}
            {siteConfig.state}. Woman-owned and proud of it.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Explore
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Get in touch
          </h3>
          {/* TODO: replace phone + email with the client's real details (see lib/site.ts) */}
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
