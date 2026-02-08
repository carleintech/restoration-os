"use client";

import { AdminShell } from "@/components/AdminShell";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";

export default function AdminTrips() {
  const [trips, setTrips] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const token = await getAccessToken();
      if (!token) return;
      const data = await apiFetch("/trips", token);
      setTrips(data);
    })();
  }, []);

  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">Trips</h1>

      <div className="space-y-3">
        {trips.map((t) => (
          <div key={t.id} className="rounded-xl bg-white p-4 shadow">
            <p className="font-medium">{t.title}</p>
            <p className="text-sm text-stone-600">{t.status}</p>
            
            <button
              type="button"
              className="mt-2 text-sm text-blue-700"
              onClick={async () => {
                const token = await getAccessToken();
                if (!token) return;
                await apiFetch(`/trips/${t.id}/status`, token, {
                  method: "PATCH",
                  body: JSON.stringify({ status: "open" }),
                });
                location.reload();
              }}
            >
              Open Signup
            </button>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
