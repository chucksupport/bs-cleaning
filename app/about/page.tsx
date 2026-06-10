import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the woman-owned team behind B's Trash Bin Cleaning, proudly serving ${siteConfig.state}.`,
};

const credentials = [
  {
    icon: ShieldCheck,
    title: "Insured & professional",
    // TODO: confirm exact licensing / insurance credentials with the client.
    body: "Fully insured and treating every property with care and respect.",
  },
  {
    icon: Leaf,
    title: "Eco-conscious",
    body: "Biodegradable solutions and responsible water use on every job.",
  },
  {
    icon: Sparkles,
    title: "Detail-obsessed",
    body: "We're not happy until it's spotless — guaranteed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            About <span className="text-primary">B&apos;s</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A woman-owned local business on a mission to make {siteConfig.state}{" "}
            cleaner, one bin (and driveway) at a time.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
        {/* ============================================================
            TODO (PLACEHOLDER STORY): Replace the copy below with B's real
            story — how she started, what she cares about, why customers
            should trust her. This is dummy text written to set the tone.
            ============================================================ */}
        <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-primary">
          Placeholder story — swap in the owner&apos;s real bio before launch.
        </div>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            B&apos;s Trash Bin Cleaning started with a simple frustration: trash
            cans are disgusting, and nobody wants to scrub them. So B decided to
            do something about it — for the whole neighborhood.
          </p>
          <p>
            What began as a one-woman operation with a pressure washer and a lot
            of hustle has grown into a trusted local service. Every job gets the
            same care, whether it&apos;s a single bin or a full driveway
            makeover.
          </p>
          <p>
            When you book with B&apos;s, you&apos;re supporting a local,
            woman-owned business that genuinely cares about doing right by its
            customers and its community.
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-[#0a0a0a]">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-3">
          {credentials.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/60 bg-background p-6"
            >
              <div className="mb-3 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Proudly serving {siteConfig.state}
            </h2>
            <p className="mt-4 text-muted-foreground">
              We cover communities across {siteConfig.state} and the surrounding
              areas. Wherever you are, if your bins need love or your driveway
              needs a refresh, we&apos;d be glad to help. Check our service area
              or just reach out — we&apos;re friendly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button asChild size="xl">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/service-area">See Service Area</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
