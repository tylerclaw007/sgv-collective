import Image from "next/image";
import { MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import type { Club } from "@/lib/data/clubs";

export function ClubCard({ club }: { club: Club }) {
  return (
    <article className="group relative rounded-2xl bg-white border border-[var(--color-sky-100)] p-6 hover:border-[var(--color-baby)] hover:shadow-lg hover:shadow-[var(--color-navy)]/5 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 shrink-0 rounded-full bg-white grid place-items-center overflow-hidden p-2 ring-1 ring-[var(--color-sky-100)] group-hover:ring-[var(--color-baby)] shadow-sm transition">
          <Image
            src={club.logo}
            alt={`${club.school} logo`}
            width={64}
            height={64}
            className="w-full h-full object-contain"
            unoptimized={club.logo.endsWith(".gif")}
          />
        </div>
        <div className="min-w-0 flex-1">
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
          {club.instagrams.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {club.instagrams.map((ig) => (
                <a
                  key={ig.handle}
                  href={`https://www.instagram.com/${ig.handle}/`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${club.shortName ?? club.school} Instagram${
                    ig.label ? ` (${ig.label})` : ""
                  }`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-sky-50)] text-[var(--color-navy)] hover:bg-[var(--color-baby)] transition cursor-pointer"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>{ig.label ?? `@${ig.handle}`}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
