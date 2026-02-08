"use client";

import { AdminShell } from "@/components/AdminShell";
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function NewTrip() {
  const r = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [capacity, setCapacity] = useState(20);

  async function submit() {
    const token = await getAccessToken();
    if (!token) return;

    await apiFetch("/trips", token, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        startDate,
        endDate,
        capacity,
      }),
    });

    r.push("/trips");
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">Create Trip</h1>

      <div className="space-y-4 max-w-xl">
        <input
          className="w-full rounded-lg border p-3"
          placeholder="Trip Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full rounded-lg border p-3"
          placeholder="Description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex gap-3">
          <input
            type="date"
            className="flex-1 rounded-lg border p-3"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="flex-1 rounded-lg border p-3"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <input
          type="number"
          className="w-full rounded-lg border p-3"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
        />

        <button
          type="button"
          className="rounded-lg bg-amber-500 px-4 py-2 font-medium"
          onClick={submit}
        >
          Create Trip
        </button>
      </div>
    </AdminShell>
  );
}
