"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const r = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setErr(error.message);

    r.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 rounded-2xl border p-6">
        <h1 className="text-2xl font-semibold">Admin Sign In</h1>
        <p className="text-sm text-muted-foreground">Access the Restoration OS admin console.</p>

        <input className="w-full rounded-md border p-3" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-md border p-3" placeholder="Password" type="password"
          value={password} onChange={(e) => setPassword(e.target.value)} />

        {err && <div className="text-sm text-red-600">{err}</div>}

        <button className="w-full rounded-md bg-black text-white p-3">Sign in</button>
      </form>
    </div>
  );
}
