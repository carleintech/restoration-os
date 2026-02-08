"use client";

import { useEffect, useState } from "react";
import { getMe } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/AdminShell";

function isAdminRole(role: string) {
  return ["pastor", "admin", "super_admin"].includes(role);
}

export default function AdminDashboard() {
  const r = useRouter();
  const [me, setMe] = useState<{ id: string; email?: string; role: string } | null>(null);

  useEffect(() => {
    (async () => {
      const m = await getMe();
      if (!m) return r.replace("/login");
      if (!isAdminRole(m.role)) return r.replace("/unauthorized");
      setMe(m);
    })();
  }, [r]);

  if (!me) return <div className="p-6">Loading…</div>;

  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-sm text-stone-500">Sunday Messages</p>
          <p className="text-2xl font-semibold">Manage</p>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-sm text-stone-500">Community</p>
          <p className="text-2xl font-semibold">Moderation</p>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-sm text-stone-500">Trips</p>
          <p className="text-2xl font-semibold">Planning</p>
        </div>
      </div>
    </AdminShell>
  );
}
