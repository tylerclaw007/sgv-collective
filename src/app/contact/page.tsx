import { Suspense } from "react";
import Image from "next/image";
import { Section } from "@/components/section";
import { ContactForm } from "./contact-form";
import { Mail, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";

export const metadata = {
  title: "Contact",
  description:
    "Join a club, start a club, or get in touch with the SGV Christian Club Collective.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-navy)] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/everything-night-main.jpg"
            alt="SGV Christian Club Collective"
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
            Contact
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-white text-balance [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            Say hi. Ask anything.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
            We read every message. Whether you want to join, start, or just ask
            a question, drop a note.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="h-96" />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-[var(--color-cream)] border border-[var(--color-sky-100)] p-6">
              <div className="w-10 h-10 rounded-xl bg-white grid place-items-center text-[var(--color-navy)]">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                Email us
              </h3>
              <a
                href="mailto:sgvchristianclubs@gmail.com"
                className="mt-1 inline-block text-sm text-[var(--color-sky-700)] fancy-link hover:text-[var(--color-navy)]"
              >
                sgvchristianclubs@gmail.com
              </a>
            </div>

            <div className="rounded-2xl bg-[var(--color-navy)] text-white p-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center text-[var(--color-baby)]">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold">
                Coming to Everything Night?
              </h3>
              <p className="mt-1 text-sm text-[var(--color-sky-200)]">
                RSVP on Partiful so we know how much food to make.
              </p>
              <a
                href="https://partiful.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--color-baby)] text-[var(--color-navy)] hover:bg-white transition cursor-pointer"
              >
                Partiful RSVP
              </a>
            </div>

            <div className="rounded-2xl bg-white border border-[var(--color-sky-100)] p-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-sky-50)] grid place-items-center text-[var(--color-navy)]">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-navy)]">
                Follow along
              </h3>
              <p className="mt-1 text-sm text-[var(--color-sky-700)]">
                We post upcoming events and recap photos on Instagram.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
