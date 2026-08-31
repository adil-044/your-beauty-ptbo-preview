import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ADDRESS, ADDRESS_NOTE, BOOK, IG, PHONE, PHONE_HREF, asset } from "@/lib/site";

export const metadata: Metadata = { title: "Book" };

const tiles = [
  { id: "laser", title: "Laser Hair Removal", sub: "From $250 · Free consult · $50 off first" },
  { id: "waxing", title: "Waxing", sub: "Brazilian $50 · Full body $160" },
  { id: "nails", title: "Nails", sub: "Gel, builder, nail art" },
  { id: "lashes", title: "Lashes", sub: "Lift & tint from $90" },
  { id: "facials", title: "Facials & Brows", sub: "Signature facial $120 · Brow wax $20" },
];

export default function BookPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="section-pad !py-16 text-center sm:!py-20">
          <p className="kicker">Book online</p>
          <h1 className="display-title mt-3">One tap. Done.</h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Pick your service — opens Fresha ready to book. No hunting through menus on mobile.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-lg gap-3">
          {tiles.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.04}>
              <a id={t.id} href={BOOK} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="transition hover:border-primary/40 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-5">
                    <div>
                      <CardTitle className="text-lg">{t.title}</CardTitle>
                      <CardDescription>{t.sub}</CardDescription>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
                  </CardHeader>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-sm text-muted-foreground">Prefer to talk first?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <a href={PHONE_HREF}><Phone className="h-4 w-4" /> {PHONE}</a>
            </Button>
            <Button asChild variant="outline">
              <a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="section-pad grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Location</p>
            <h2 className="mt-3 font-display text-3xl">Find us</h2>
            <div className="mt-4 flex gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-foreground">{ADDRESS}</p>
                <p className="mt-1">{ADDRESS_NOTE}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="media-frame aspect-[4/3] w-full max-w-md lg:ml-auto">
              <Image src={asset("/media/hero-studio.jpg")} alt="Studio" fill className="object-cover" sizes="400px" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
