"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Home", icon: "🏠" },
  { href: "/bible", label: "Bible", icon: "📖" },
  { href: "/community", label: "Community", icon: "🤲" },
  { href: "/groups", label: "Groups", icon: "👥" },
  { href: "/profile", label: "Profile", icon: "👤" },
];

export function MobileNav() {
  const path = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-white border-t border-stone-200 safe-area-bottom shadow-lg">
      {navItems.map((item) => {
        const isActive = path === item.href || path?.startsWith(`${item.href}/`);
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center py-2 px-3 min-w-[60px] relative group"
          >
            {/* Icon */}
            <span className={`text-2xl mb-1 transition-all duration-200 ${
              isActive ? 'scale-110' : 'grayscale group-hover:grayscale-0'
            }`}>
              {item.icon}
            </span>
            
            {/* Label */}
            <span className={`text-xs font-medium transition-colors duration-200 ${
              isActive ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-700'
            }`}>
              {item.label}
            </span>
            
            {/* Active indicator - Amber underline */}
            {isActive && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-amber-500 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
