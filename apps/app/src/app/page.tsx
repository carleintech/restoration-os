"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Church icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-500 to-teal-600 text-white text-4xl mb-6">
            ⛪
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Restoration Church
          </h1>
          <p className="text-xl text-stone-600 mb-2">Member Web App</p>
          
          {/* Description */}
          <p className="text-stone-600 mb-8 max-w-lg mx-auto">
            Your spiritual control center for Sunday preparation, Scripture reading, 
            community prayer, groups, and staying connected throughout the week.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/login"
              className="px-8 py-4 bg-linear-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white border-2 border-stone-300 hover:border-teal-500 text-stone-700 font-semibold rounded-full transition-all duration-300"
            >
              View Dashboard
            </Link>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            <div className="p-4 bg-stone-50 rounded-xl">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-sm font-semibold text-stone-900">Smart Bible</div>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <div className="text-3xl mb-2">⛪</div>
              <div className="text-sm font-semibold text-stone-900">Sunday Prep</div>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <div className="text-3xl mb-2">🤲</div>
              <div className="text-sm font-semibold text-stone-900">Prayer</div>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-sm font-semibold text-stone-900">Groups</div>
            </div>
          </div>
        </div>

        {/* Footer link */}
        <div className="text-center mt-6">
          <a
            href="http://localhost:3000"
            className="text-stone-600 hover:text-teal-600 transition-colors text-sm"
          >
            ← Back to Main Website
          </a>
        </div>
      </div>
    </div>
  );
}
