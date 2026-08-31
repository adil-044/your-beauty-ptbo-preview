'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOK, NAV, PREVIEW_PRICE, UPTISEMENT, asset } from "@/lib/site";
import { cn } from "@/lib/cn";

function PreviewBar() {
  return (
    <div className="sticky top-0 z-[60] border-b border-primary/20 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs sm:text-sm">
        <span className="font-medium tracking-wide">Preview from Uptisement</span>
        <a
          href={UPTISEMENT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-foreground px-3 py-1.5 font-semibold text-primary transition hover:opacity-90"
        >
          Go live — {PREVIEW_PRICE}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[41px] z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border">
            <Image src={asset("/media/studio-open.jpg")} alt="" fill className="object-cover" sizes="36px" />
          </span>
          <span className="truncate font-display text-lg font-medium sm:text-xl">YOUR Beauty</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={BOOK} target="_blank" rel="noopener noreferrer">Book</a>
          </Button>
          <button
            type="button"
            className="rounded-full border border-border p-2 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href={BOOK} target="_blank" rel="noopener noreferrer">Book on Fresha</a>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">YOUR Beauty Studio</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Tailored beauty in Peterborough — laser, waxing, nails, facials & lashes. Woman-owned, LGBTQ+ friendly.
          </p>
        </div>
        <div>
          <p className="kicker mb-2">Visit</p>
          <p className="text-sm text-muted-foreground">843 Chemong Rd<br />Peterborough, ON</p>
        </div>
        <div>
          <p className="kicker mb-2">Book</p>
          <p className="text-sm text-muted-foreground">
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Fresha online booking
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
        Preview from Uptisement · Not affiliated with YOUR Beauty Studio
      </div>
    </footer>
  );
}

export function StickyBook() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 flex w-[min(22rem,calc(100%-2rem))] -translate-x-1/2 gap-2 rounded-full border border-border bg-background/95 p-1 shadow-lg backdrop-blur md:hidden">
      <Button asChild variant="outline" size="sm" className="flex-1 rounded-full">
        <Link href="/book">Services</Link>
      </Button>
      <Button asChild size="sm" className="flex-1 rounded-full">
        <a href={BOOK} target="_blank" rel="noopener noreferrer">Book</a>
      </Button>
    </div>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PreviewBar />
      <SiteHeader />
      <main className="pb-24 md:pb-0">{children}</main>
      <SiteFooter />
      <StickyBook />
    </>
  );
}
