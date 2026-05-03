import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase/server";

export const metadata = {
  title: "Messages",
  robots: { index: false, follow: false },
};

export default async function AdminMessagesPage() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: messages, error } = await supabase
    .from("contact_messages")
    .select("id, name, email, school, interest, message, created_at")
    .order("created_at", { ascending: false })
    .limit(500);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-sky-600)]">
          Messages
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-navy)]">
          Inbox
        </h1>
      </header>

      {error && (
        <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-700">
          Could not load messages: {error.message}
        </div>
      )}

      <div className="space-y-3">
        {(messages ?? []).length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--color-sky-200)] p-12 text-center text-[var(--color-sky-700)]">
            No messages yet.
          </div>
        ) : (
          messages!.map((m) => (
            <article
              key={m.id}
              className="rounded-2xl bg-white border border-[var(--color-sky-100)] p-5"
            >
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-navy)]">
                    {m.name}
                    <span className="ml-2 text-xs font-medium text-[var(--color-sky-600)]">
                      {m.email}
                    </span>
                  </h3>
                  {m.school && (
                    <p className="text-xs text-[var(--color-sky-600)]">
                      {m.school}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[var(--color-sky-50)] text-[var(--color-navy)] uppercase tracking-widest">
                    {m.interest}
                  </span>
                  <time className="text-xs text-[var(--color-sky-600)]">
                    {new Date(m.created_at).toLocaleString()}
                  </time>
                </div>
              </header>
              <p className="mt-3 text-sm text-[var(--color-sky-700)] leading-relaxed whitespace-pre-line">
                {m.message}
              </p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
