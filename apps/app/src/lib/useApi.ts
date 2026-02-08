"use client";

import { useEffect, useState } from "react";
import { getAccessToken } from "./auth";
import { apiFetch } from "./api";

export function useApi<T>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessToken();
        if (!token) throw new Error("No session");
        const res = await apiFetch(path, token);
        setData(res);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [path]);

  return { data, loading, error };
}
