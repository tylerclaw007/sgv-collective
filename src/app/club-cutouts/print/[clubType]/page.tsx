import { notFound } from "next/navigation";
import { clubTypes, cutouts, type ClubType } from "@/lib/data/cutouts";
import { PrintSheet } from "./print-sheet";

export function generateStaticParams() {
  return clubTypes.map((clubType) => ({ clubType }));
}

type Params = Promise<{ clubType: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { clubType } = await params;
  const content = cutouts[clubType as ClubType];
  if (!content) return { title: "Print sheet" };
  return {
    title: `${content.label} cutouts`,
    description: `Printable pocket cards for ${content.label.toLowerCase()} distribution. Each card points to the Next Steps guide.`,
    robots: { index: false, follow: false },
  };
}

export default async function PrintCutoutPage({ params }: { params: Params }) {
  const { clubType } = await params;
  const content = cutouts[clubType as ClubType];
  if (!content) notFound();
  return <PrintSheet content={content} />;
}
