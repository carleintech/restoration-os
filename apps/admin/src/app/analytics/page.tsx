"use client";

import { AdminShell } from "@/components/AdminShell";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";

export default function AnalyticsPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const token = await getAccessToken();
      if (!token) return;
      const res = await apiFetch("/analytics/summary", token);
      setData(res);
    })();
  }, []);

  // Group by metric type
  const grouped: Record<string, any[]> = {};
  for (const item of data) {
    if (!grouped[item.metric]) grouped[item.metric] = [];
    grouped[item.metric].push(item);
  }

  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">Engagement (Last 7 Days)</h1>

      <div className="space-y-6">
        {Object.entries(grouped).map(([metric, items]) => {
          const total = items.reduce((sum, item) => sum + item.count, 0);
          
          return (
            <div key={metric} className="rounded-xl bg-white p-4 shadow">
              <h2 className="font-semibold text-lg capitalize mb-2">{metric}</h2>
              <p className="text-3xl font-bold text-amber-500 mb-3">{total}</p>
              <div className="grid grid-cols-7 gap-2">
                {items.map((d) => (
                  <div key={d.id} className="text-center">
                    <p className="text-xs text-stone-400">
                      {new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' })}
                    </p>
                    <p className="text-sm font-medium">{d.count}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {data.length === 0 && (
          <p className="text-stone-500">No engagement data yet. Activity will appear here once members start interacting.</p>
        )}
      </div>
    </AdminShell>
  );
}
