"use client";

import { useState, useEffect, useCallback } from "react";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";

export interface Notification {
  id: string;
  category: string;
  priority: string;
  status: string;
  title: string;
  body: string;
  deepLink?: string;
  imageUrl?: string;
  createdAt: string;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    setLoading(true);
    try {
      const data = await apiFetch("/notifications?limit=30", token);
      setNotifications(data);
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUnreadCount = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      const data = await apiFetch("/notifications/unread-count", token);
      setUnreadCount(data.count);
    } catch {
      // silent fail
    }
  }, []);

  const markRead = useCallback(async (id: string) => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      await apiFetch(`/notifications/${id}/read`, token, { method: "POST" });
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, status: "READ" } : n))
      );
      setUnreadCount((c) => Math.max(0, c - 1));
    } catch {
      // silent fail
    }
  }, []);

  const markAllRead = useCallback(async () => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      await apiFetch("/notifications/read-all", token, { method: "POST" });
      setNotifications((prev) => prev.map((n) => ({ ...n, status: "READ" })));
      setUnreadCount(0);
    } catch {
      // silent fail
    }
  }, []);

  const dismiss = useCallback(async (id: string) => {
    const token = await getAccessToken();
    if (!token) return;
    try {
      await apiFetch(`/notifications/${id}`, token, { method: "DELETE" });
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setUnreadCount((c) => Math.max(0, c - 1));
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
    fetchUnreadCount();

    // Poll every 60 seconds for new notifications
    const interval = setInterval(() => {
      fetchUnreadCount();
    }, 60_000);

    return () => clearInterval(interval);
  }, [fetchNotifications, fetchUnreadCount]);

  return {
    notifications,
    unreadCount,
    loading,
    refetch: fetchNotifications,
    markRead,
    markAllRead,
    dismiss,
  };
}
