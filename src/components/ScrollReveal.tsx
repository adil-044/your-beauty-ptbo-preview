'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  label?: string;
};

/** Pinned scroll reveal — Dr Grigoriak pattern. Image stays contained; text lives outside. */
export function ScrollReveal({ src, alt, label }: Props) {
  const section = useRef<HTMLElement>(null);
  const clip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = section.current;
    const clipEl = clip.current;
    if (!sec || !clipEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clipEl.style.clipPath = "inset(0 0% 0 0)";
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        clipEl,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: "+=80%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
          },
        }
      );
    }, sec);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative min-h-[100svh] bg-primary">
      <div className="flex min-h-[100svh] flex-col items-center justify-center px-4 py-16">
        <div className="media-frame relative aspect-[3/4] w-full max-w-md sm:max-w-lg">
          <Image src={asset(src)} alt={alt} fill className="object-cover" sizes="(max-width:768px) 90vw, 480px" priority />
          <div ref={clip} className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 100% 0 0)" }}>
            <Image src={asset(src)} alt={`${alt} — after`} fill className="object-cover brightness-[1.04] contrast-[1.02]" sizes="(max-width:768px) 90vw, 480px" />
          </div>
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">Before</span>
          <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">After</span>
        </div>
        {label && <p className="mt-6 max-w-sm text-center text-sm text-primary-foreground/80">{label}</p>}
        <p className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/50">Scroll to reveal</p>
      </div>
    </section>
  );
}
