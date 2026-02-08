"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/leaders", label: "Leaders" },
    { href: "/visit", label: "Visit" },
    { href: "/ministries", label: "Ministries" },
    { href: "/events", label: "Events" },
    { href: "/give", label: "Give" },
    { href: "/watch", label: "Watch" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/10 border-b border-white/20"
            : "bg-white/5 backdrop-blur-sm border-b border-white/10"
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(56,189,248,0.08) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(56,189,248,0.05) 100%)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
            : '0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-3 group relative z-50"
        >
          <div className={`transition-all duration-700 ${scrolled ? "scale-100" : "scale-110"}`}>
            <Image
              src="/hero/logo.png"
              alt="Restoration Church"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
              style={{
                filter: scrolled ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
              }}
            />
          </div>
          <span
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all duration-700 ${
              scrolled ? "text-stone-900" : "text-stone-800"
            } group-hover:text-teal-600`}
            style={{
              textShadow: scrolled ? '0 1px 2px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            <span className="hidden sm:inline">Restoration Church</span>
            <span className="sm:hidden">Restoration</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center text-sm xl:text-base">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-all duration-500 group px-3 py-2 rounded-lg ${
                pathname === link.href
                  ? "text-teal-600 font-medium"
                  : scrolled ? "text-stone-800 hover:text-teal-600" : "text-stone-700 hover:text-stone-900"
              }`}
              style={{
                animation: scrolled ? `fadeInDown 0.4s ease-out ${index * 0.05}s both` : "none",
                background: pathname === link.href
                  ? 'linear-gradient(135deg, rgba(56,189,248,0.1) 0%, rgba(56,189,248,0.05) 100%)'
                  : 'transparent',
                backdropFilter: 'blur(10px)',
                border: pathname === link.href ? '1px solid rgba(56,189,248,0.2)' : '1px solid transparent',
                boxShadow: pathname === link.href ? '0 4px 12px rgba(56,189,248,0.15)' : 'none',
              }}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-linear-to-r from-teal-500 to-blue-500 transition-all duration-500 rounded-full ${
                  pathname === link.href ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/app"
            className="px-5 py-2.5 rounded-xl font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group"
            style={{
              animation: scrolled ? "fadeInDown 0.4s ease-out 0.3s both" : "none",
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #f59e0b 100%)',
              boxShadow: '0 4px 16px rgba(245,158,11,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span className="relative z-10 text-white">Become Member</span>
            <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-stone-900 hover:text-teal-600 transition-colors relative z-[110] p-2 rounded-lg"
          aria-label="Toggle mobile menu"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <svg
            className={`w-7 h-7 transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </header>

      {/* Mobile Menu - Outside header for proper z-index */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-700 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: "56px",
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}
      >
        <nav className="flex flex-col items-center justify-start pt-6 pb-6 h-full gap-3 text-base overflow-y-auto">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-6 py-2.5 rounded-xl transition-all duration-300 w-[90%] text-center font-medium ${
                pathname === link.href
                  ? "text-white bg-teal-600"
                  : "text-stone-900 hover:text-teal-600 hover:bg-stone-50"
              }`}
              style={{
                animation: mobileMenuOpen
                  ? `fadeInUp 0.4s ease-out ${index * 0.08}s both`
                  : "none",
                boxShadow: pathname === link.href ? '0 2px 8px rgba(20,184,166,0.3)' : 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/app"
            onClick={() => setMobileMenuOpen(false)}
            className="px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-amber-500 hover:bg-amber-600 text-white w-[90%] text-center shadow-lg"
            style={{
              animation: mobileMenuOpen ? "fadeInUp 0.4s ease-out 0.5s both" : "none",
            }}
          >
            Become Member
          </Link>
        </nav>
      </div>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />

        <main>{children}</main>

        <footer className="bg-stone-900 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="text-center text-xs sm:text-sm text-stone-400">
              © {new Date().getFullYear()} Restoration Church · Landstown
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
