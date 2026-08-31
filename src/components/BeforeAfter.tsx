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

export function BeforeAfter({ src, alt, label }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const clip = useRef<HTMLDivElement>(null);
  const handle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const clipEl = clip.current;
    const handleEl = handle.current;
    if (!el || !clipEl || !handleEl) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dragging = false;
    let pos = 0.5;

    const setPos = (p: number) => {
      pos = Math.min(0.92, Math.max(0.08, p));
      const pct = `${pos * 100}%`;
      clipEl.style.clipPath = `inset(0 0 0 ${pct})`;
      handleEl.style.left = pct;
    };
    setPos(pos);

    const onPointer = (x: number) => {
      const rect = el.getBoundingClientRect();
      setPos((x - rect.left) / rect.width);
    };
    const down = (e: PointerEvent) => {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      onPointer(e.clientX);
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      onPointer(e.clientX);
    };
    const up = () => {
      dragging = false;
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);

    let st: ScrollTrigger | undefined;
    if (!reduce) {
      st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        end: "bottom 25%",
        scrub: 0.55,
        onUpdate: (self) => {
          if (dragging) return;
          setPos(0.15 + self.progress * 0.7);
        },
      });
    }

    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      st?.kill();
    };
  }, []);

  return (
    <div className="space-y-3">
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
      <div
        ref={root}
        className="media-frame relative aspect-[4/5] touch-none select-none sm:aspect-[5/4]"
        role="img"
        aria-label={`${alt} comparison`}
      >
        <Image src={asset(src)} alt={alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 560px" />
        <div ref={clip} className="absolute inset-0" style={{ clipPath: "inset(0 0 0 50%)" }}>
          <Image src={asset(src)} alt={`${alt} after`} fill className="object-cover brightness-[1.05]" sizes="(max-width:768px) 100vw, 560px" />
        </div>
        <div ref={handle} className="absolute inset-y-0 z-10 w-0.5 bg-background" style={{ left: "50%" }}>
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-[9px] font-bold shadow-md">
            ◀▶
          </div>
        </div>
      </div>
    </div>
  );
}
