"use client";

import { AdminShell } from "@/components/AdminShell";
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function NewSunday() {
  const r = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [weekOf, setWeekOf] = useState("");

  async function submit() {
    const token = await getAccessToken();
    if (!token) return;

    await apiFetch("/sunday", token, {
      method: "POST",
      body: JSON.stringify({ title, summary, weekOf }),
    });

    r.push("/sunday");
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">New Sunday Message</h1>

      <div className="space-y-4 max-w-xl">
        <input
          className="w-full rounded-lg border p-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full rounded-lg border p-3"
          placeholder="Summary / Theme"
          rows={4}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <input
          type="date"
          className="w-full rounded-lg border p-3"
          value={weekOf}
          onChange={(e) => setWeekOf(e.target.value)}
        />

        <button
          type="button"
          className="rounded-lg bg-amber-500 px-4 py-2 font-medium"
          onClick={submit}
        >
          Save Draft
        </button>
      </div>
    </AdminShell>
  );
}
