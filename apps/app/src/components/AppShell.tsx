"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { NotificationBell } from "./NotificationBell";
import { OfflineBanner } from "./OfflineBanner";

const nav = [
  { href: "/dashboard", label: "Home" },
  { href: "/bible", label: "Bible" },
  { href: "/sunday", label: "Sunday" },
  { href: "/community", label: "Community" },
  { href: "/plans", label: "Plans" },
  { href: "/birthdays", label: "Birthdays" },
  { href: "/trips", label: "Trips" },
  { href: "/journal", label: "Journal" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-surface p-4">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-semibold">Restoration</span>
          <NotificationBell />
        </div>

        <nav className="space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 text-sm ${
                path === item.href
                  ? "bg-accent/20 font-medium"
                  : "text-secondary hover:bg-muted/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-6">
        <OfflineBanner />
        {children}
      </main>

      {/* Mobile Nav */}
      <MobileNav />
    </>
  );
}
