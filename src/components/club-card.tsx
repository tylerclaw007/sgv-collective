import { MapPin } from "lucide-react";
import type { Club } from "@/lib/data/clubs";

export function ClubCard({ club }: { club: Club }) {
  const initials = (club.shortName ?? club.school)
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <article className="group relative rounded-2xl bg-white border border-[var(--color-sky-100)] p-6 hover:border-[var(--color-baby)] hover:shadow-lg hover:shadow-[var(--color-navy)]/5 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-sky-50)] grid place-items-center text-[var(--color-navy)] text-xs font-bold tracking-wide group-hover:bg-[var(--color-baby)] transition">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-[var(--color-navy)] truncate">
            {club.school}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-[var(--color-sky-600)]">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{club.city}</span>
          </div>
          <p className="mt-3 text-sm text-[var(--color-sky-700)] leading-relaxed">
            {club.description}
          </p>
        </div>
      </div>
    </article>
  );
}
