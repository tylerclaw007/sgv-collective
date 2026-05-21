"use client";

import { QRCodeSVG } from "qrcode.react";
import { Printer } from "lucide-react";
import type { CutoutContent } from "@/lib/data/cutouts";
import { QR_TARGET_URL, SHORT_URL_DISPLAY } from "@/lib/data/cutouts";

type Props = {
  content: CutoutContent;
};

const CARDS_PER_SHEET = 6;

export function PrintSheet({ content }: Props) {
  const cards = Array.from({ length: CARDS_PER_SHEET }, (_, i) => i);

  return (
    <div className="min-h-screen bg-[var(--color-cream)] py-10 print:py-0 print:bg-white">
      <div className="no-print mx-auto max-w-4xl px-4 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-sky-600)]">
            {content.label}
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[var(--color-navy)]">
            Print preview
          </h1>
          <p className="mt-1 text-sm text-[var(--color-sky-700)]">
            Letter, portrait, no scaling. Six pocket cards per sheet.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[var(--color-navy)] hover:bg-[var(--color-navy-soft)] text-white shadow-md shadow-[var(--color-navy)]/20 transition cursor-pointer"
        >
          <Printer className="w-4 h-4" aria-hidden="true" />
          Print this sheet
        </button>
      </div>

      <div className="print-sheet mx-auto bg-white shadow-xl shadow-[var(--color-navy)]/10 print:shadow-none">
        <div className="print-grid">
          {cards.map((i) => (
            <article key={i} className="print-card">
              <div className="print-card-inner">
                <p className="print-eyebrow">{content.eyebrow}</p>
                <h2 className="print-headline">{content.headline}</h2>
                <p className="print-body">{content.body}</p>

                <div className="print-divider" />

                <div className="print-foot">
                  <div className="print-qr">
                    <QRCodeSVG
                      value={QR_TARGET_URL}
                      size={88}
                      bgColor="#ffffff"
                      fgColor="#0d1f3d"
                      level="M"
                      marginSize={0}
                    />
                  </div>
                  <div className="print-foot-text">
                    <p className="print-cta">{content.cta}</p>
                    <p className="print-url">{SHORT_URL_DISPLAY}</p>
                    <p className="print-brand">SGV Christian Club Collective</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="no-print mt-6 text-center text-xs text-[var(--color-sky-600)]">
        Tip: in the print dialog, set margins to &ldquo;Default&rdquo; and scale
        to 100%.
      </p>
    </div>
  );
}
