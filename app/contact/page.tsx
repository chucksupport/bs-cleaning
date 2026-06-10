import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote for trash bin cleaning or pressure washing in Ohio. We'll be in touch fast.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Get a <span className="text-primary">Free Quote</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us what you need and we&apos;ll get right back to you. It takes
            less than a minute.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {/* TODO: replace phone + email with the client's real details (lib/site.ts) */}
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="size-5" />
              </span>
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
