"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useNotifications, Notification } from "@/hooks/useNotifications";

const CATEGORY_ICONS: Record<string, string> = {
  SUNDAY_PREP: "⛪",
  BIBLE_DEVOTION: "📖",
  PRAYER_PRAISE: "🙏",
  BIRTHDAY: "🎂",
  GROUP: "👥",
  TRIP: "✈️",
  ADMIN: "📢",
};

const CATEGORY_COLORS: Record<string, string> = {
  SUNDAY_PREP: "from-teal-500 to-emerald-500",
  BIBLE_DEVOTION: "from-amber-500 to-orange-500",
  PRAYER_PRAISE: "from-purple-500 to-pink-500",
  BIRTHDAY: "from-rose-500 to-pink-500",
  GROUP: "from-blue-500 to-indigo-500",
  TRIP: "from-sky-500 to-blue-500",
  ADMIN: "from-stone-500 to-stone-600",
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function NotificationItem({
  notification,
  onRead,
  onDismiss,
}: {
  notification: Notification;
  onRead: (id: string) => void;
  onDismiss: (id: string) => void;
}) {
  const isUnread = notification.status !== "READ";
  const icon = CATEGORY_ICONS[notification.category] ?? "🔔";
  const gradient = CATEGORY_COLORS[notification.category] ?? "from-stone-500 to-stone-600";

  const content = (
    <div
      className={`p-4 rounded-2xl transition-all duration-200 cursor-pointer group ${
        isUnread
          ? "bg-white shadow-md border-2 border-stone-100 hover:border-stone-200"
          : "bg-stone-50 hover:bg-white"
      }`}
      onClick={() => isUnread && onRead(notification.id)}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-lg flex-shrink-0 shadow-sm`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className={`text-sm font-semibold leading-snug ${isUnread ? "text-stone-900" : "text-stone-600"}`}>
              {notification.title}
            </p>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onDismiss(notification.id); }}
              className="text-stone-300 hover:text-stone-500 transition-colors flex-shrink-0 mt-0.5"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-0.5 leading-relaxed line-clamp-2">
            {notification.body}
          </p>
          <p className="text-xs text-stone-400 mt-1 font-medium">
            {timeAgo(notification.createdAt)}
          </p>
        </div>
        {isUnread && (
          <div className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0 mt-2" />
        )}
      </div>
    </div>
  );

  if (notification.deepLink) {
    return <Link href={notification.deepLink}>{content}</Link>;
  }
  return content;
}

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { notifications, unreadCount, loading, markRead, markAllRead, dismiss } =
    useNotifications();

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="relative" ref={panelRef}>
      {/* Bell button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative w-10 h-10 rounded-xl bg-white/80 hover:bg-white border-2 border-stone-200 hover:border-stone-300 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
        aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ""}`}
      >
        <span className="text-lg">🔔</span>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="absolute right-0 top-12 w-[380px] max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-stone-200/50 overflow-hidden z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Notifications"
        >
          {/* Header */}
          <div className="p-4 border-b border-stone-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-stone-900">Notifications</h2>
              {unreadCount > 0 && (
                <p className="text-xs text-stone-500">{unreadCount} unread</p>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllRead}
                className="text-sm text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                Mark all read
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-[480px] overflow-y-auto p-3 space-y-2">
            {loading && notifications.length === 0 && (
              <div className="py-8 text-center text-stone-400">
                <div className="text-3xl mb-2">🔔</div>
                <p className="text-sm">Loading...</p>
              </div>
            )}

            {!loading && notifications.length === 0 && (
              <div className="py-8 text-center text-stone-400">
                <div className="text-4xl mb-2">✨</div>
                <p className="text-sm font-medium">You're all caught up!</p>
                <p className="text-xs text-stone-400 mt-1">
                  We'll let you know when something happens.
                </p>
              </div>
            )}

            {notifications.map((n) => (
              <NotificationItem
                key={n.id}
                notification={n}
                onRead={markRead}
                onDismiss={dismiss}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-stone-100">
            <Link
              href="/settings/notifications"
              className="block w-full text-center text-sm text-stone-500 hover:text-stone-700 font-medium py-2 rounded-xl hover:bg-stone-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              ⚙️ Notification Settings
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
