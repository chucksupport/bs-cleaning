import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, MapPin, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Locally owned and proudly serving ${siteConfig.state} — professional trash bin cleaning and pressure washing from B's Trash Bin Cleaning.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            About <span className="text-primary">B&apos;s</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            At B&apos;s Trash Bin Cleaning, we&apos;re dedicated to transforming
            properties &amp; trash bins with our professional pressure washing
            and bin cleaning services. Whether you&apos;re looking to enhance
            your home&apos;s curb appeal or have a dirty trash bin, our team is
            here to handle all your exterior cleaning needs with expertise and
            care.
          </p>
          {/* TODO: Founder story from Bri — insert when she provides it */}
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-8">
            <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Trash2 className="size-7" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How we clean bins
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sanitized with a 200-degree water, high-pressure wash system that
              kills 99.9% of germs and bacteria. Our goal is simple: make the
              process convenient, reliable, and hassle-free.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-8">
            <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Droplets className="size-7" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our pressure washing range
            </h2>
            <p className="mt-4 text-muted-foreground">
              From soft wash techniques that protect delicate surfaces to power
              washing that removes tough stains, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Where we serve */}
      <section className="border-y border-border/60 bg-[#0a0a0a]">
        <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MapPin className="size-7" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Where we serve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Locally owned and serving Northeast Ohio — Wadsworth, Norton,
            Barberton, Rittman, New Franklin, Doylestown, Medina, Copley, Akron,
            and the surrounding communities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ready for cleaner bins or a fresher property?
          </h2>
          <Button asChild size="xl">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
