export async function apiFetch(path: string, token?: string, init?: RequestInit) {
  const base = process.env.NEXT_PUBLIC_API_URL!;
  const headers = new Headers(init?.headers);

  if (token) headers.set("Authorization", `Bearer ${token}`);
  headers.set("Content-Type", "application/json");

  const res = await fetch(`${base}${path}`, { ...init, headers });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}
