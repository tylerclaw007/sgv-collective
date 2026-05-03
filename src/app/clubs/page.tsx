import Image from "next/image";
import { ClubsGrid } from "./clubs-grid";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/buttons";
import { clubs } from "@/lib/data/clubs";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Clubs",
  description:
    "Find your campus. 20 high school Christian clubs across the SGV.",
};

export default function ClubsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-navy)] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/everything-night-picnic.jpg"
            alt="Friends gathered on the lawn"
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
            Clubs directory
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-white text-balance [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            Find your campus.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            20 high school clubs across the San Gabriel Valley. If your school
            is here, show up. If it is not, start one.
          </p>
        </div>
      </section>

      <Section tone="white">
        <ClubsGrid clubs={clubs} />
      </Section>

      <Section tone="cream" align="center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-navy)] text-balance">
            Do not see your school?
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--color-sky-700)] leading-relaxed">
            We would love to help you start a club at your campus.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/contact?type=start" variant="primary" size="lg">
              Start a club
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg">
              Just say hi
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
