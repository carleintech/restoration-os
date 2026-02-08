import { supabase } from "./supabase";
import { apiFetch } from "./api";

export type Me = { id: string; email?: string; role: string };

export async function getAccessToken(): Promise<string | null> {
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token ?? null;
}

export async function getMe(): Promise<Me | null> {
  const token = await getAccessToken();
  if (!token) return null;
  return apiFetch("/auth/me", token);
}
