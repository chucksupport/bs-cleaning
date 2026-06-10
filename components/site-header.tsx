import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/*
          TODO logo: Chuck will save the real logo as public/logo.jpg and this
          text wordmark can be swapped for:
            <Image src="/logo.jpg" alt="B's Trash Bin Cleaning" width={...} height={...} priority />
        */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">
            <span className="text-primary">B&apos;s</span>{" "}
            <span className="text-foreground">Trash Bin Cleaning</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
            Pressure Washing Services
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="lg" className="font-semibold">
          <Link href="/contact">Free Quote</Link>
        </Button>
      </div>
    </header>
  );
}
