"use client";

import Link from "next/link";

export default function AppRedirectPage() {
  const memberAppUrl = "http://localhost:3001";

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"
          style={{ animation: "fadeInUp 0.8s both" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          style={{ animation: "fadeInUp 1s both" }}
        />
      </div>

      {/* Main content */}
      <div className="relative max-w-2xl w-full">
        <div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          style={{ animation: "fadeInUp 0.5s both" }}
        >
          {/* Church icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-500 to-teal-600 text-white text-4xl mb-6">
            ⛪
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Entering Member Portal
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-lg mx-auto">
            Access your spiritual control center — where Sunday preparation, Scripture, prayer, and community come together.
          </p>

          {/* Open App Button */}
          <a
            href={memberAppUrl}
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Open Member App →
          </a>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="p-4 bg-stone-50 rounded-xl">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-sm font-semibold text-stone-900">
                Smart Bible
              </div>
              <div className="text-xs text-stone-600">
                Church-aware Scripture
              </div>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <div className="text-3xl mb-2">🤲</div>
              <div className="text-sm font-semibold text-stone-900">
                Community
              </div>
              <div className="text-xs text-stone-600">
                Prayer & Praise
              </div>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-sm font-semibold text-stone-900">
                Groups
              </div>
              <div className="text-xs text-stone-600">
                Fellowship & Growth
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-stone-600 hover:text-teal-600 transition-colors text-sm"
          >
            ← Back to Main Site
          </Link>
        </div>
      </div>
    </div>
  );
}
