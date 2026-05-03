"use client";

import { useActionState } from "react";
import { Loader2, LogIn } from "lucide-react";
import { signInWithPassword } from "../actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    signInWithPassword,
    { error: undefined } as { error?: string },
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--color-navy)] mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-white border border-[var(--color-sky-200)] rounded-xl px-4 py-2.5 text-sm text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-baby)] focus:border-transparent"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[var(--color-navy)] mb-1.5"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full bg-white border border-[var(--color-sky-200)] rounded-xl px-4 py-2.5 text-sm text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-baby)] focus:border-transparent"
        />
      </div>

      {state.error && (
        <div
          role="alert"
          className="rounded-xl bg-rose-50 border border-rose-200 px-3 py-2 text-xs text-rose-700"
        >
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[var(--color-navy)] hover:bg-[var(--color-navy-soft)] text-white transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Signing in
          </>
        ) : (
          <>
            <LogIn className="w-4 h-4" aria-hidden="true" />
            Sign in
          </>
        )}
      </button>
    </form>
  );
}
