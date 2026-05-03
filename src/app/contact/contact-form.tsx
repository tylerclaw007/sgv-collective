"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContact, type ContactState } from "./actions";
import { cn } from "@/lib/utils";

const initial: ContactState = { ok: false };

const interests = [
  { value: "join", label: "Join a club" },
  { value: "start", label: "Start a club" },
  { value: "rsvp-help", label: "Everything Night question" },
  { value: "church", label: "Church partnership" },
  { value: "general", label: "Just say hi" },
];

export function ContactForm() {
  const sp = useSearchParams();
  const initialInterest = (() => {
    const t = sp.get("type");
    if (!t) return "general";
    if (interests.some((i) => i.value === t)) return t;
    return "general";
  })();

  const [interest, setInterest] = useState<string>(initialInterest);
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok && formRef.current) {
      formRef.current.reset();
      setInterest("general");
    }
  }, [state.ok]);

  const fe = state.fieldErrors ?? {};

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-[var(--color-baby)] bg-[var(--color-sky-50)] p-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-[var(--color-baby)] grid place-items-center text-[var(--color-navy)]">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[var(--color-navy)]">
          Got it. Thanks for reaching out.
        </h3>
        <p className="mt-2 text-sm text-[var(--color-sky-700)]">
          Someone from the team will get back to you within a few days.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Name"
          name="name"
          required
          autoComplete="name"
          error={fe.name?.[0]}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={fe.email?.[0]}
        />
      </div>

      <Field
        label="School (optional)"
        name="school"
        autoComplete="organization"
        error={fe.school?.[0]}
      />

      <div>
        <label className="block text-sm font-medium text-[var(--color-navy)] mb-2">
          Reason for reaching out
        </label>
        <input type="hidden" name="interest" value={interest} />
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              key={i.value}
              type="button"
              onClick={() => setInterest(i.value)}
              aria-pressed={interest === i.value}
              className={cn(
                "px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer",
                interest === i.value
                  ? "bg-[var(--color-navy)] text-white"
                  : "bg-[var(--color-sky-50)] text-[var(--color-sky-700)] hover:bg-[var(--color-sky-100)]",
              )}
            >
              {i.label}
            </button>
          ))}
        </div>
        {fe.interest?.[0] && (
          <p className="mt-1 text-xs text-rose-600">{fe.interest[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-navy)] mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(
            "w-full bg-white border rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] placeholder-[var(--color-sky-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-baby)] focus:border-transparent transition resize-y",
            fe.message?.[0]
              ? "border-rose-400"
              : "border-[var(--color-sky-200)]",
          )}
          placeholder="Tell us a little about your school, your club, or what you are wondering."
        />
        {fe.message?.[0] && (
          <p className="mt-1 text-xs text-rose-600">{fe.message[0]}</p>
        )}
      </div>

      {state.error && !state.ok && (
        <div
          role="alert"
          className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-700"
        >
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[var(--color-navy)] hover:bg-[var(--color-navy-soft)] text-white transition-all duration-200 cursor-pointer shadow-md shadow-[var(--color-navy)]/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[var(--color-navy)] mb-2"
      >
        {label}
        {required && <span className="text-[var(--color-baby)] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full bg-white border rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] placeholder-[var(--color-sky-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-baby)] focus:border-transparent transition",
          error ? "border-rose-400" : "border-[var(--color-sky-200)]",
        )}
      />
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
}
