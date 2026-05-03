import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTAButton } from "@/components/buttons";
import {
  churches,
  pastoralGuidance,
  affiliates,
  supportTypes,
} from "@/lib/data/churches";
import { ArrowRight, Church, Compass, Users2 } from "lucide-react";

export const metadata = {
  title: "Churches",
  description:
    "Local churches that fund, host, speak, and walk with the SGV Christian Club Collective.",
};

export default function ChurchesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-[var(--color-navy)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-dark opacity-25 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-baby)]">
            Churches and partners
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Standing with us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-sky-200)] leading-relaxed">
            Local churches and partners who help fuel the collective. The
            students lead, but we do not do this alone.
          </p>
        </div>
      </section>

      <Section eyebrow="Partner churches" title="The churches walking with us.">
        <div className="grid md:grid-cols-2 gap-5">
          {churches.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 70}>
              <article className="rounded-2xl bg-white border border-[var(--color-sky-100)] p-6 h-full hover:border-[var(--color-baby)] transition">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-sky-50)] grid place-items-center text-[var(--color-navy)] shrink-0">
                    <Church className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-navy)]">
                      {c.name}
                    </h3>
                    {c.pastor && (
                      <p className="mt-1 text-sm font-medium text-[var(--color-baby)]">
                        {c.pastor}
                      </p>
                    )}
                    <p className="mt-2 text-sm text-[var(--color-sky-700)] leading-relaxed">
                      {c.support}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section
        tone="cream"
        eyebrow="Pastoral guidance"
        title="Shepherding the collective."
        description="Pastors who guide our student leaders and keep us rooted in the gospel."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {pastoralGuidance.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 80}>
              <article className="rounded-2xl bg-white border border-[var(--color-sky-100)] p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-baby)]/15 grid place-items-center text-[var(--color-baby)] shrink-0">
                    <Compass className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-navy)]">
                      {p.pastor}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--color-sky-600)]">
                      {p.church}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-sky-700)] leading-relaxed">
                      {p.role}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Affiliates"
        title="Ministries alongside us."
        description="Outreach partners who are not churches but stand with the collective."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {affiliates.map((a, i) => (
            <ScrollReveal key={a.name} delay={i * 80}>
              <article className="rounded-2xl bg-white border border-[var(--color-sky-100)] p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-sky-50)] grid place-items-center text-[var(--color-navy)] shrink-0">
                    <Users2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-navy)]">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-sky-700)] leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section
        tone="white"
        eyebrow="How they help"
        title="Four ways churches support us."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {supportTypes.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <article className="rounded-2xl bg-white border border-[var(--color-sky-100)] p-6 h-full hover:border-[var(--color-baby)] transition">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-sky-50)] grid place-items-center text-[var(--color-navy)]">
                  <Church className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-sky-700)] leading-relaxed">
                  {s.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section
        tone="cream"
        eyebrow="Want in?"
        title="Pastors, leaders, churches."
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-[var(--color-sky-100)] p-7">
            <h3 className="text-lg font-semibold text-[var(--color-navy)]">
              Partner with us
            </h3>
            <p className="mt-2 text-sm text-[var(--color-sky-700)] leading-relaxed">
              We would love to talk about hosting a worship night, sending a
              speaker, or sponsoring food for Everything Night.
            </p>
            <div className="mt-5">
              <CTAButton href="/contact?type=church" variant="primary">
                Reach out
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </CTAButton>
            </div>
          </div>
          <div className="rounded-2xl bg-[var(--color-navy)] text-white p-7">
            <h3 className="text-lg font-semibold">Pray for the schools.</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-sky-200)]">
              Whether or not you partner officially, prayer for these campuses
              changes things. Pray for our friends who have not met Jesus yet.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
