import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase/server";

export const metadata = {
  title: "RSVPs",
  robots: { index: false, follow: false },
};

export default async function AdminRsvpsPage() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: rsvps, error } = await supabase
    .from("rsvps")
    .select("id, name, email, school, event_slug, guests, notes, created_at")
    .order("created_at", { ascending: false })
    .limit(500);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-sky-600)]">
          RSVPs
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-navy)]">
          Who is coming
        </h1>
      </header>

      {error && (
        <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-700">
          Could not load RSVPs: {error.message}
        </div>
      )}

      <div className="rounded-2xl bg-white border border-[var(--color-sky-100)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--color-sky-50)] text-[var(--color-navy)]">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">School</th>
                <th className="px-4 py-3 font-semibold">Event</th>
                <th className="px-4 py-3 font-semibold">Guests</th>
                <th className="px-4 py-3 font-semibold">When</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-sky-100)]">
              {(rsvps ?? []).length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-[var(--color-sky-700)]"
                  >
                    No RSVPs yet.
                  </td>
                </tr>
              ) : (
                rsvps!.map((r) => (
                  <tr
                    key={r.id}
                    className="hover:bg-[var(--color-cream)] transition"
                  >
                    <td className="px-4 py-3 font-medium text-[var(--color-navy)]">
                      {r.name}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-sky-700)]">
                      {r.email}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-sky-700)]">
                      {r.school ?? "::"}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-sky-700)]">
                      {r.event_slug}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-sky-700)]">
                      {r.guests}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-sky-700)]">
                      {new Date(r.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
