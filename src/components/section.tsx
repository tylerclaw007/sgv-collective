import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  align?: "left" | "center";
  tone?: "white" | "cream" | "navy";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  innerClassName,
  align = "left",
  tone = "white",
}: Props) {
  const toneCls =
    tone === "white"
      ? "bg-white text-[var(--color-navy)]"
      : tone === "cream"
        ? "bg-[var(--color-cream)] text-[var(--color-navy)]"
        : "bg-[var(--color-navy)] text-white";
  return (
    <section
      id={id}
      className={cn("relative py-20 md:py-28", toneCls, className)}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          innerClassName,
        )}
      >
        {(eyebrow || title || description) && (
          <header
            className={cn(
              "max-w-2xl",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <p
                className={cn(
                  "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase",
                  tone === "navy"
                    ? "text-[var(--color-baby)]"
                    : "text-[var(--color-sky-600)]",
                )}
              >
                <span
                  className={cn(
                    "w-6 h-px",
                    tone === "navy"
                      ? "bg-[var(--color-baby)]"
                      : "bg-[var(--color-sky-300)]",
                  )}
                />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "mt-4 text-3xl md:text-5xl font-bold tracking-tight text-balance",
                  tone === "navy" ? "text-white" : "text-[var(--color-navy)]",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-base md:text-lg leading-relaxed",
                  tone === "navy"
                    ? "text-[var(--color-sky-200)]"
                    : "text-[var(--color-sky-700)]",
                )}
              >
                {description}
              </p>
            )}
          </header>
        )}
        <div className={cn(title || eyebrow ? "mt-12 md:mt-16" : "")}>
          {children}
        </div>
      </div>
    </section>
  );
}
