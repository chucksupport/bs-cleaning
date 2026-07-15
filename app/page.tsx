import Link from "next/link";
import { Droplets, MapPin, Sparkles, Star, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Trash2,
    title: "Trash Bin Cleaning",
    body: "Pressurized, hot-water blasting that lifts out the gunk, kills the germs, and leaves your cans smelling fresh.",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    body: "Driveways, sidewalks, patios, decks, fences and siding — restored to like-new with serious curb appeal.",
  },
  {
    icon: MapPin,
    title: "Service Area",
    body: `Proudly serving neighborhoods across ${siteConfig.state}. Not sure if we reach you? Just ask.`,
    href: "/service-area",
  },
];

// TODO: confirm these "why us" claims with the client before launch.
const whyUs = [
  "Eco-friendly, biodegradable cleaning solutions",
  "Hot-water, high-pressure sanitizing",
  "Deodorized and deep-cleaned every visit",
  "100% satisfaction guarantee",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 py-24 sm:px-6 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="size-3.5" />
            Woman-owned · {siteConfig.state}
          </span>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Unmatched pressure washing
            <br />
            <span className="text-primary">&amp; bin cleaning.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
            At B&apos;s Trash Bin Cleaning, we&apos;re dedicated to transforming
            properties &amp; trash bins with our professional pressure washing /
            bin cleaning services. Whether you&apos;re looking to enhance your
            home&apos;s curb appeal or have a dirty trash bin, our team is here
            to handle all your exterior cleaning needs with expertise and care.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="xl">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three-card services overview */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const card = (
              <Card
                className={cn(
                  "h-full border-border/60",
                  service.href &&
                    "transition-colors hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            );

            return service.href ? (
              <Link key={service.title} href={service.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={service.title}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-border/60 bg-[#0a0a0a]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Why folks <span className="text-primary">love us</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              We treat every property like it&apos;s our own. Here&apos;s what
              you can count on every single visit.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-4"
              >
                <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6">
        {/* TODO: replace with real testimonials / reviews once collected. */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-7 fill-current" />
            ))}
          </div>
          <p className="text-2xl font-bold sm:text-3xl">
            Loved by neighbors across {siteConfig.state}.
          </p>
          <p className="text-muted-foreground">
            Real reviews coming soon — be one of the first to brag about your
            fresh bins.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6">
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ready for the cleanest bins on the block?
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Get a free quote in under a minute. No obligation, no pushy sales.
          </p>
          <Button asChild size="xl">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
