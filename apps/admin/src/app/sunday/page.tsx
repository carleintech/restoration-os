"use client";

import { AdminShell } from "@/components/AdminShell";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";

export default function AdminSunday() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const token = await getAccessToken();
      if (!token) return;
      const data = await apiFetch("/sunday", token);
      setItems(data);
    })();
  }, []);

  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">Sunday Messages</h1>

      <div className="space-y-3">
        {items.map((m) => (
          <div key={m.id} className="rounded-xl bg-white p-4 shadow">
            <h2 className="font-medium">{m.title}</h2>
            <p className="text-sm text-stone-600">{m.status}</p>
            
            <button
              type="button"
              className="mt-2 text-sm text-green-700"
              onClick={async () => {
                const token = await getAccessToken();
                if (!token) return;
                await apiFetch(`/sunday/${m.id}/publish`, token, { method: "PATCH" });
                location.reload();
              }}
            >
              Publish
            </button>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
