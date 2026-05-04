import type { Leader } from "@/lib/data/leadership";
import { cn } from "@/lib/utils";

export function LeaderCard({ leader }: { leader: Leader }) {
  const initials = leader.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const isPast = leader.era === "past";
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        isPast
          ? "bg-white border-[var(--color-sky-100)] hover:border-[var(--color-baby)]"
          : "bg-[var(--color-navy)] border-[var(--color-navy)] hover:border-[var(--color-baby)] text-white",
      )}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-2xl grid place-items-center text-xl font-bold",
          isPast
            ? "bg-[var(--color-sky-50)] text-[var(--color-navy)]"
            : "bg-[var(--color-baby)] text-[var(--color-navy)]",
        )}
      >
        {initials}
      </div>
      <h3
        className={cn(
          "mt-5 text-lg font-semibold",
          isPast ? "text-[var(--color-navy)]" : "text-white",
        )}
      >
        {leader.name}
      </h3>
      <p
        className={cn(
          "text-xs uppercase tracking-widest mt-1 font-medium",
          isPast ? "text-[var(--color-sky-600)]" : "text-[var(--color-baby)]",
        )}
      >
        {leader.role}
      </p>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          isPast
            ? "text-[var(--color-sky-700)]"
            : "text-[var(--color-sky-200)]",
        )}
      >
        {leader.blurb}
      </p>
      {leader.events && leader.events.length > 0 ? (
        <div className="mt-5">
          <p
            className={cn(
              "text-[10px] uppercase tracking-widest font-semibold",
              isPast
                ? "text-[var(--color-sky-500)]"
                : "text-[var(--color-baby)]",
            )}
          >
            Events
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {leader.events.map((ev) => (
              <li
                key={ev}
                className={cn(
                  "text-xs px-2.5 py-1 rounded-full border",
                  isPast
                    ? "bg-[var(--color-sky-50)] border-[var(--color-sky-100)] text-[var(--color-navy)]"
                    : "bg-white/10 border-white/15 text-white",
                )}
              >
                {ev}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
