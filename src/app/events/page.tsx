import Image from "next/image";
import { Section } from "@/components/section";
import { EventCard } from "@/components/event-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTAButton } from "@/components/buttons";
import { events } from "@/lib/data/events";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Events",
  description:
    "Everything Night, worship gatherings, and summer hangs across the SGV.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-navy)] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/everything-night-band.jpg"
            alt="Worship band on stage"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)]/85 via-[var(--color-navy)]/75 to-[var(--color-navy)]/95" />
          <div className="absolute inset-0 bg-dot-grid-dark opacity-30" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-baby)]">
            Events
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-white text-balance [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            Show up.{" "}
            <span className="text-[var(--color-baby)]">Bring a friend.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            Big nights, small hangs, worship gatherings. There is always
            something next.
          </p>
        </div>
      </section>

      <Section eyebrow="Upcoming" title="Mark your calendar.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <ScrollReveal key={e.slug} delay={i * 80}>
              <EventCard event={e} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section
        tone="cream"
        eyebrow="Past nights"
        title="What it usually looks like."
      >
        <p className="max-w-2xl text-base md:text-lg text-[var(--color-sky-700)] leading-relaxed">
          Worship, food, games, real conversation. Everything Night happens
          twice a year and pulls every campus together.
        </p>
        <div className="mt-10">
          <CTAButton href="/everything-night" variant="primary">
            See Everything Night
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
