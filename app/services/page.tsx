import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Trash bin cleaning and full-service pressure washing — driveways, sidewalks, patios, decks, fences, siding and more across Northeast Ohio.",
};

const pressureWashingSubServices = [
  "House siding",
  "Driveways",
  "Sidewalks & walkways",
  "Patios",
  "Vinyl Fences",
  "Dumpster Pads",
  "Parking Lots",
  "Commercial Buildings",
  "Storefronts",
];

const steps = [
  { n: "01", title: "Book", body: "Request a free quote online — it takes under a minute." },
  { n: "02", title: "We arrive", body: "Our team shows up on schedule, fully equipped." },
  { n: "03", title: "Done", body: "You enjoy clean, fresh, like-new surfaces. That's it." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Two things we do exceptionally well — keep your bins sanitary and
            make your property shine.
          </p>
        </div>
      </section>

      {/* Trash bin cleaning */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Trash2 className="size-7" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Trash Bin Cleaning
            </h2>
            <p className="mt-4 text-muted-foreground">
              Your garbage and recycling cans are a breeding ground for bacteria
              and odors. We blast them clean with high-pressure hot water,
              then sanitize and deodorize so they look — and smell — brand new.
            </p>
          </div>
          <div className="grid content-start gap-4">
            <Detail title="What's included">
              Sanitized with a 200-degree water, high-pressure wash system that
              kills 99.9% of germs &amp; bacteria. Our goal is simple: make the
              process convenient, reliable, and hassle-free.
            </Detail>
            <Detail title="Why it matters">
              Kills the germs and knocks out the smell that draws flies, maggots,
              and curious critters. Healthier for your family, kinder to your
              nose.
            </Detail>
          </div>
        </div>
      </section>

      {/* Pressure washing */}
      <section className="border-y border-border/60 bg-[#0a0a0a]">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Droplets className="size-7" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Pressure Washing
              </h2>
              <p className="mt-4 text-muted-foreground">
                Restore the beauty of your home or business with professional
                pressure washing. We safely remove dirt, mold, mildew, algae,
                and years of built-up grime to leave your property looking like
                new.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {pressureWashingSubServices.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border/60 bg-background px-3 py-2 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid content-start gap-4">
              <Detail title="What's included">
                From soft wash techniques that protect delicate surfaces to
                power washing that removes tough stains, we have you covered.
              </Detail>
              <Detail title="Why it matters">
                Boosts curb appeal, protects your surfaces from long-term damage,
                and makes the whole property feel cared-for.
              </Detail>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <span className="text-4xl font-extrabold text-primary">
                {step.n}
              </span>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y border-border/60 bg-[#0a0a0a]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Simple, fair pricing
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Pricing varies by frequency and property — get a free quote in under
            a minute and we&apos;ll tailor it to you.
          </p>
          <Button asChild size="xl">
            <Link href="/contact">Get My Free Quote</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Serving {siteConfig.state} and surrounding areas.
          </p>
        </div>
      </section>
    </>
  );
}

function Detail({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-6">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
        {title}
      </h3>
      <p className="mt-2 text-muted-foreground">{children}</p>
    </div>
  );
}
