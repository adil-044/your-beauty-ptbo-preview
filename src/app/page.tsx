'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, Sparkles } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reveal } from "@/components/Reveal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ADDRESS, BOOK, IG, asset } from "@/lib/site";
import site from "@/content/site.json";

export default function HomePage() {
  return (
    <>
      {/* Hero — text block separate from image, no bleed */}
      <section className="border-b border-border bg-muted/30">
        <div className="section-pad grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <Badge variant="outline" className="mb-4">Peterborough · By appointment</Badge>
            <h1 className="display-title">
              Your space. <span className="italic text-primary">Your glow.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Laser, waxing, nails, facials & lashes — college-certified estheticians in a woman-owned studio at Brookdale Plaza.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-primary">
              <Star className="h-4 w-4 fill-current" />
              {site.rating}.0 · {site.reviewsCount} Fresha reviews
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book">One-tap booking</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View services</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="order-1 lg:order-2">
            <div className="media-frame aspect-[4/5] w-full max-w-lg lg:ml-auto">
              <Image
                src={asset("/media/hero-studio.jpg")}
                alt="YOUR Beauty Studio — studio moment"
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 480px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services pillars */}
      <section className="section-pad">
        <Reveal>
          <p className="kicker">What we do</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Three reasons clients book</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {site.pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <Link href={p.href} className="group block">
                <Card className="overflow-hidden transition hover:shadow-md">
                  <div className="media-frame aspect-[4/5] rounded-none border-0 border-b">
                    <Image src={asset(p.image)} alt={p.title} fill className="object-cover transition duration-500 group-hover:scale-[1.02]" sizes="360px" />
                  </div>
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.blurb}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scroll reveal — isolated full-bleed section */}
      <ScrollReveal
        src="/media/before-after.jpg"
        alt="Laser hair removal before and after"
        label="Cynosure Vectus® results from YOUR Beauty Studio"
      />

      {/* Tech + melanin — split layout, contained images */}
      <section className="section-pad bg-muted/40">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Technology</p>
            <h2 className="mt-3 font-display text-4xl">Safe for melanin-rich skin</h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Skintel® reads melanin in real time. Vectus™ adjusts energy per client — especially skin tones other lasers miss.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Woman-owned</Badge>
              <Badge>LGBTQ+ friendly</Badge>
              <Badge>Student no-tax promo</Badge>
            </div>
            <Button asChild className="mt-8">
              <Link href="/results">See results</Link>
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="media-frame aspect-[4/5] w-full max-w-md lg:ml-auto">
              <Image src={asset("/media/melanin-laser.jpg")} alt="Melanin-rich skin laser care" fill className="object-cover" sizes="400px" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Before/after drag — text left, image right */}
      <section className="section-pad">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Results</p>
            <h2 className="mt-3 font-display text-4xl">Drag to compare</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Real laser journeys from their chair. Scroll scrubs the slider on mobile — or drag the handle.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/results">Full results gallery</Link>
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <BeforeAfter src="/media/before-after.jpg" alt="Laser before and after" />
          </Reveal>
        </div>
      </section>

      {/* Marketing help — Uptisement positioning */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="section-pad">
          <Reveal>
            <div className="flex items-center gap-2 text-secondary">
              <Sparkles className="h-4 w-4" />
              <p className="kicker !text-secondary">Tailored marketing for salons</p>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">We help local beauty studios grow</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/75">
              Uptisement builds sites, booking flows, and light marketing for Peterborough salons — so your IG story and your website tell the same promise.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {site.marketing.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <Card className="h-full border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary-foreground">{m.title}</CardTitle>
                    <CardDescription className="text-primary-foreground/70">{m.body}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad">
        <Reveal>
          <p className="kicker">Fresha reviews</p>
          <h2 className="mt-3 font-display text-4xl">{site.rating}.0★ from guests</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.featuredReviews.map((r, i) => (
            <Reveal key={r.author + i} delay={(i % 3) * 0.05}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{r.author}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="section-pad text-center">
          <Reveal>
            <h2 className="font-display text-4xl">Ready for your chair?</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">{ADDRESS} — inside Ride or Dye Salon.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href={BOOK} target="_blank" rel="noopener noreferrer">
                  Book on Fresha <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
