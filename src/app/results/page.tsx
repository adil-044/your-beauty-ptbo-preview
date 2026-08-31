'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reveal } from "@/components/Reveal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { BOOK, asset } from "@/lib/site";
import site from "@/content/site.json";

export default function ResultsPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="section-pad !py-16 sm:!py-20">
          <p className="kicker">Technology & results</p>
          <h1 className="display-title mt-3">Proof in the chair</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Cynosure Vectus® + Skintel® — transformations from @yourbeautyptbo.co, not stock photos.
          </p>
        </div>
      </section>

      <ScrollReveal
        src="/media/before-after.jpg"
        alt="Laser hair removal results"
        label="Scroll to reveal — same technology used in-studio"
      />

      <section className="section-pad">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Interactive</p>
            <h2 className="mt-3 font-display text-4xl">Drag to compare</h2>
            <p className="mt-4 text-muted-foreground">
              On mobile, scroll scrubs the reveal. Drag the handle anytime.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <BeforeAfter src="/media/before-after.jpg" alt="Laser results" label="Full body laser — client results" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-muted/30">
        <Reveal>
          <p className="kicker">From Instagram</p>
          <h2 className="mt-3 font-display text-4xl">Their work, their room</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {site.gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.04}>
              <div className="media-frame aspect-square">
                <Image src={asset(src)} alt={`Gallery ${i + 1}`} fill className="object-cover" sizes="240px" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href={BOOK} target="_blank" rel="noopener noreferrer">
              Book free consult <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
