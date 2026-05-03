import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import type { Event } from "@/lib/data/events";

export function EventCard({ event }: { event: Event }) {
  const isEverythingNight = event.category === "Everything Night";
  const href = isEverythingNight ? "/everything-night" : "/events";
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[var(--color-sky-100)] hover:border-[var(--color-baby)] hover:shadow-xl hover:shadow-[var(--color-navy)]/5 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-sky-50)]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-[var(--color-navy)] backdrop-blur">
          {event.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[var(--color-navy)]">
          {event.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-sky-700)]">
          {event.tagline}
        </p>
        <dl className="mt-4 space-y-1.5 text-sm text-[var(--color-sky-700)]">
          <div className="flex items-center gap-2">
            <Calendar
              className="w-4 h-4 text-[var(--color-baby)]"
              aria-hidden="true"
            />
            <span>
              {event.date}
              {event.time ? ` :: ${event.time}` : ""}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin
              className="w-4 h-4 text-[var(--color-baby)]"
              aria-hidden="true"
            />
            <span>{event.location}</span>
          </div>
        </dl>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-navy)] group-hover:gap-2 transition-all">
          {isEverythingNight ? "Open the page" : "See details"}
          <ArrowUpRight
            className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
