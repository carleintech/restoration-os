"use client";

import { AdminShell } from "@/components/AdminShell";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";

export default function AdminCommunity() {
  const [posts, setPosts] = useState<any[]>([]);

  async function hide(id: string) {
    const token = await getAccessToken();
    if (!token) return;
    await apiFetch(`/community/${id}/hide`, token, { method: "POST" });
    setPosts(posts.filter((p) => p.id !== id));
  }

  useEffect(() => {
    (async () => {
      const token = await getAccessToken();
      if (!token) return;
      const data = await apiFetch("/community", token);
      setPosts(data);
    })();
  }, []);

  return (
    <AdminShell>
      <h1 className="text-2xl font-semibold mb-4">Community Moderation</h1>

      <div className="space-y-3">
        {posts.map((p) => (
          <div key={p.id} className="rounded-xl bg-white p-4 shadow">
            <p className="font-medium">{p.title}</p>
            <p className="text-sm text-stone-600">{p.content}</p>

            <button
              className="mt-2 text-sm text-red-600"
              onClick={() => hide(p.id)}
            >
              Hide Post
            </button>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
