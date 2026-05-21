import Link from "next/link";
import {
  ArrowRight,
  Download,
  Printer,
  QrCode,
  Scissors,
  Sparkles,
} from "lucide-react";
import { CTAButton } from "@/components/buttons";
import { Section } from "@/components/section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { clubTypes, cutouts, SHORT_URL_DISPLAY } from "@/lib/data/cutouts";

export const metadata = {
  title: "Club Cutouts",
  description:
    "Printable pocket-sized cutouts every club leader can hand out. Each one points to the Next Steps guide.",
};

const steps = [
  {
    icon: Printer,
    title: "Pick your club type",
    body: "Student, service, or youth fellowship. The copy adapts to your group.",
  },
  {
    icon: Scissors,
    title: "Print and cut",
    body: "Six pocket cards per sheet of 8.5 x 11. Standard printer, no special paper.",
  },
  {
    icon: QrCode,
    title: "Hand them out",
    body: "Each card has a QR and a short URL pointing back to the Next Steps guide.",
  },
];

export default function ClubCutoutsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[var(--color-cream)] to-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-sky-600)]">
            Club Cutouts
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-navy)] text-balance">
            Pocket-sized invitations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-sky-700)] leading-relaxed">
            Printable cutouts for club leaders. One side: a short message. The
            other: a QR code that drops every recipient straight into the Next
            Steps guide.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CTAButton href="#variants" variant="primary" size="lg">
              Pick a variant
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </CTAButton>
            <CTAButton href="/next-steps" variant="ghost" size="lg">
              See the destination
            </CTAButton>
          </div>
        </div>
      </section>

      <Section
        eyebrow="How it works"
        title="From a card to a conversation."
        description="Designed for the moment after a meeting, retreat, or service project. A leader hands you a card. The card hands you a path."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 90}>
              <article className="group h-full rounded-2xl border border-[var(--color-sky-100)] bg-white p-7 hover:border-[var(--color-baby)] hover:shadow-lg hover:shadow-[var(--color-navy)]/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-sky-50)] grid place-items-center text-[var(--color-navy)] group-hover:bg-[var(--color-baby)] transition">
                  <s.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="mt-5 text-xs font-semibold tracking-widest uppercase text-[var(--color-sky-600)]">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[var(--color-navy)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-sky-700)] leading-relaxed">
                  {s.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section
        id="variants"
        tone="cream"
        eyebrow="Three variants"
        title="Pick the one that fits your group."
        description="Each variant uses different language so the message lands with the people in front of you."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubTypes.map((t, i) => {
            const c = cutouts[t];
            return (
              <ScrollReveal key={t} delay={i * 90}>
                <article className="group h-full flex flex-col rounded-2xl bg-white border border-[var(--color-sky-100)] p-7 hover:border-[var(--color-baby)] hover:shadow-lg hover:shadow-[var(--color-navy)]/5 transition-all duration-300">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-sky-600)]">
                    {c.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--color-navy)] tracking-tight">
                    {c.headline}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-sky-700)] leading-relaxed flex-1">
                    {c.audienceTagline}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <Link
                      href={`/club-cutouts/print/${t}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-[var(--color-navy)] hover:bg-[var(--color-navy-soft)] text-white shadow-md shadow-[var(--color-navy)]/20 transition cursor-pointer"
                    >
                      <Printer className="w-4 h-4" aria-hidden="true" />
                      Open print sheet
                    </Link>
                    <Link
                      href={`/club-cutouts/print/${t}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border border-[var(--color-sky-200)] hover:border-[var(--color-baby)] hover:bg-[var(--color-sky-50)] text-[var(--color-navy)] transition cursor-pointer"
                    >
                      Preview
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl rounded-2xl bg-white border border-[var(--color-sky-100)] p-7">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--color-baby)] grid place-items-center text-[var(--color-navy)]">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-navy)]">
                The short URL on every card
              </h3>
              <p className="mt-2 text-sm text-[var(--color-sky-700)] leading-relaxed">
                Every cutout shows{" "}
                <span className="font-mono text-[var(--color-navy)] font-semibold">
                  {SHORT_URL_DISPLAY}
                </span>
                . Typing it (or scanning the QR) drops anyone straight into the
                Next Steps guide. Same destination, two ways in.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy" eyebrow="Use it" title="Print, fold, hand out.">
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
          <article className="rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-baby)] grid place-items-center text-[var(--color-navy)]">
              <Printer className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Printing tips
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-sky-200)] leading-relaxed">
              <li>Letter size, portrait, no scaling.</li>
              <li>Standard printer paper works. Card stock is even better.</li>
              <li>Cut along the dashed lines for six pocket cards.</li>
            </ul>
          </article>
          <article className="rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-baby)] grid place-items-center text-[var(--color-navy)]">
              <Download className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">
              Saving as PDF
            </h3>
            <p className="mt-3 text-sm text-[var(--color-sky-200)] leading-relaxed">
              In the print dialog, choose &ldquo;Save as PDF&rdquo; as the
              destination. Send it to your club leaders, parents, or print shop.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
