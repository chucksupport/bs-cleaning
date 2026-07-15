import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area",
  description: `B's Trash Bin Cleaning serves Wadsworth, Akron, Medina, and neighboring ${siteConfig.state} suburbs in the greater Akron area. Don't see yours? Ask anyway.`,
};

const cities = [
  "Wadsworth",
  "Norton",
  "Barberton",
  "Rittman",
  "New Franklin",
  "Doylestown",
  "Medina",
  "Copley",
  "Akron",
];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Service <span className="text-primary">Area</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We proudly serve the greater Akron area and surrounding{" "}
            {siteConfig.state} suburbs. Here are some of the cities we cover.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-5"
            >
              <MapPin className="size-5 shrink-0 text-primary" />
              <span className="text-lg font-semibold">{city}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-[#0a0a0a]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Don&apos;t see your city?
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Ask anyway! We&apos;re always expanding, and there&apos;s a good
            chance we can reach you.
          </p>
          <Button asChild size="xl">
            <Link href="/contact">Ask About Your Area</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
