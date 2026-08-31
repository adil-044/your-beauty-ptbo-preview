import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ADDRESS, ADDRESS_NOTE, IG, MAPS, PHONE, PHONE_HREF, asset } from "@/lib/site";
import site from "@/content/site.json";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="section-pad grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Our studio</p>
            <h1 className="display-title mt-3">Beauty that puts you first</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              YOUR Beauty Studio is a woman-owned space in Peterborough — laser, waxing, nails, facials and lashes by college-certified estheticians.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Woman-owned</Badge>
              <Badge>LGBTQ+ friendly</Badge>
              <Badge>By appointment</Badge>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="media-frame aspect-[4/5] w-full max-w-md lg:ml-auto">
              <Image src={asset("/media/studio-open.jpg")} alt="YOUR Beauty Studio opening" fill className="object-cover" sizes="400px" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="media-frame aspect-[4/5] w-full max-w-md">
              <Image src={asset("/media/laser-promo.jpg")} alt="Cynosure Vectus laser" fill className="object-cover" sizes="400px" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="kicker">Technology</p>
            <h2 className="mt-3 font-display text-4xl">Cynosure Vectus™ + Skintel®</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Medical-grade laser that reads melanin and adjusts in real time — safer, more effective hair removal for all skin tones.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              First-time clients: <strong className="text-foreground">free consultation</strong> + <strong className="text-foreground">$50 off</strong> full-body laser.
            </p>
            <Button asChild className="mt-8">
              <Link href="/book#laser">Book consult</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="section-pad">
          <Reveal>
            <p className="kicker">The team</p>
            <h2 className="mt-3 font-display text-4xl">Certified estheticians who care</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Follow the team on Instagram — every artist has their own specialty, from laser to nail art.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {site.team.map((t) => (
                <li key={t}>
                  <a href={`https://www.instagram.com/${t.replace("@", "")}/`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-border">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">Visit</p>
            <h2 className="mt-3 font-display text-4xl">Brookdale Plaza</h2>
            <p className="mt-4 text-muted-foreground">
              {ADDRESS}<br />{ADDRESS_NOTE}
            </p>
            <p className="mt-4">
              <a href={PHONE_HREF} className="font-semibold text-primary">{PHONE}</a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={MAPS} target="_blank" rel="noopener noreferrer">Directions</a>
              </Button>
              <Button asChild variant="outline">
                <a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="media-frame aspect-video w-full">
              <Image src={asset("/media/location.jpg")} alt="Brookdale Plaza location" fill className="object-cover" sizes="560px" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
