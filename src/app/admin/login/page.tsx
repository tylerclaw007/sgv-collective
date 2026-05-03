import { redirect } from "next/navigation";
import { createSupabaseServer, isSupabaseConfigured } from "@/lib/supabase/server";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Admin login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  if (!isSupabaseConfigured()) {
    return null;
  }
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/admin");

  return (
    <div className="min-h-screen grid place-items-center px-6 py-20">
      <div className="w-full max-w-md rounded-2xl bg-white border border-[var(--color-sky-100)] p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-[var(--color-navy)] grid place-items-center text-white text-[10px] font-bold tracking-widest">
            SGV
          </span>
          <div>
            <h1 className="text-base font-semibold text-[var(--color-navy)] leading-tight">
              Admin sign in
            </h1>
            <p className="text-[11px] text-[var(--color-sky-600)] leading-tight">
              Christian Club Collective
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-[var(--color-sky-700)] leading-relaxed">
          Sign in with the email and password you set in Supabase Auth.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
