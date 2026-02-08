"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Overview" },
  { href: "/sunday", label: "Sunday" },
  { href: "/sunday/new", label: "+ New Sunday" },
  { href: "/community", label: "Community" },
  { href: "/trips", label: "Trips" },
  { href: "/trips/new", label: "+ New Trip" },
  { href: "/analytics", label: "Analytics" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div className="min-h-screen flex bg-[#FAFAF9] text-[#1C1917]">
      <aside className="w-64 border-r bg-white p-4 hidden md:block">
        <h1 className="mb-6 text-lg font-semibold">Restoration Admin</h1>
        <nav className="space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 text-sm ${
                path === item.href
                  ? "bg-amber-100 font-medium"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}
