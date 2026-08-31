import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { asset } from "@/lib/site";
import site from "@/content/site.json";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="section-pad !py-16 sm:!py-20">
          <p className="kicker">Menu & pricing</p>
          <h1 className="display-title mt-3">Clear prices. No surprises.</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Every service books through our one-tap page — pick what you need, confirm on Fresha, done.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="grid gap-5 sm:grid-cols-2">
          {site.services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 0.05}>
              <Card className="overflow-hidden">
                <div className="grid sm:grid-cols-[140px_1fr]">
                  <div className="media-frame aspect-square rounded-none border-0 border-r sm:aspect-auto sm:min-h-[140px]">
                    <Image src={asset(s.image)} alt={s.name} fill className="object-cover" sizes="140px" />
                  </div>
                  <div className="flex flex-col justify-between p-5">
                    <div>
                      <CardTitle className="text-xl">{s.name}</CardTitle>
                      <p className="mt-1 font-semibold text-primary">{s.price}</p>
                      <CardDescription className="mt-1">{s.note}</CardDescription>
                    </div>
                    <Button asChild size="sm" className="mt-4 w-fit">
                      <Link href={`/book#${s.book}`}>Book</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="section-pad text-center">
          <h2 className="font-display text-4xl">Skip the heavy booking flow</h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/75">
            Mobile-first booking sends clients straight to the right service.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/book">One-tap booking</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
