// Supabase Edge Function: forward-email
// Forwards contact_messages and rsvps to NOTIFY_EMAIL via Resend.
// Deploy: supabase functions deploy forward-email
// Secrets to set in the Supabase project:
//   NOTIFY_EMAIL=SGVChristianclubs@gmail.com
//   RESEND_API_KEY=...
//   NOTIFY_FROM_EMAIL=notifications@sgvcollective.com

// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

type Payload =
  | {
      kind: "contact";
      record: {
        name: string;
        email: string;
        school?: string | null;
        interest: string;
        message: string;
      };
    }
  | {
      kind: "rsvp";
      record: {
        name: string;
        email: string;
        school?: string | null;
        guests: number;
        notes?: string | null;
        event_slug: string;
      };
    };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(payload: Payload) {
  if (payload.kind === "contact") {
    const r = payload.record;
    return {
      subject: `[SGV] New contact: ${r.interest} from ${r.name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(r.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(r.email)}</p>
        <p><strong>School:</strong> ${escapeHtml(r.school ?? "—")}</p>
        <p><strong>Interest:</strong> ${escapeHtml(r.interest)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(r.message)}</p>
      `,
    };
  }
  const r = payload.record;
  return {
    subject: `[SGV] New RSVP: ${r.event_slug} (${r.guests}) from ${r.name}`,
    html: `
      <h2>New RSVP</h2>
      <p><strong>Event:</strong> ${escapeHtml(r.event_slug)}</p>
      <p><strong>Name:</strong> ${escapeHtml(r.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(r.email)}</p>
      <p><strong>School:</strong> ${escapeHtml(r.school ?? "—")}</p>
      <p><strong>Guests:</strong> ${r.guests}</p>
      <p><strong>Notes:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(r.notes ?? "")}</p>
    `,
  };
}

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  const NOTIFY_FROM_EMAIL =
    Deno.env.get("NOTIFY_FROM_EMAIL") ?? "notifications@sgvcollective.com";

  if (!NOTIFY_EMAIL || !RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing NOTIFY_EMAIL or RESEND_API_KEY" }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  if (body.kind !== "contact" && body.kind !== "rsvp") {
    return new Response("Unknown kind", { status: 400 });
  }

  const { subject, html } = buildEmail(body);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: NOTIFY_FROM_EMAIL,
      to: NOTIFY_EMAIL,
      reply_to: (body.record as any).email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return new Response(
      JSON.stringify({ error: "Resend failed", details: text }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" },
  });
});
