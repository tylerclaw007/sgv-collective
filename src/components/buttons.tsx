import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-navy)] hover:bg-[var(--color-navy-soft)] text-white shadow-md shadow-[var(--color-navy)]/20",
  secondary:
    "bg-[var(--color-baby)] hover:bg-[var(--color-sky-300)] text-[var(--color-navy)]",
  ghost:
    "bg-transparent hover:bg-[var(--color-sky-50)] text-[var(--color-navy)]",
  outline:
    "border border-[var(--color-sky-200)] hover:border-[var(--color-baby)] hover:bg-[var(--color-sky-50)] text-[var(--color-navy)]",
};

type CTAProps = Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    href: string;
    variant?: Variant;
    children: ReactNode;
    size?: "md" | "lg";
    external?: boolean;
  };

export function CTAButton({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...rest
}: CTAProps) {
  const sizeCls = size === "lg" ? "px-6 py-3 text-base" : "px-5 py-2.5 text-sm";
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer",
    sizeCls,
    styles[variant],
    className,
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
