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
          isPast ? "text-[var(--color-sky-700)]" : "text-[var(--color-sky-200)]",
        )}
      >
        {leader.blurb}
      </p>
    </article>
  );
}
