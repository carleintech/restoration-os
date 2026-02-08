"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";

export default function SundayPage() {
  const [daysUntilSunday, setDaysUntilSunday] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysLeft = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    setDaysUntilSunday(daysLeft);
  }, []);

  const isToday = daysUntilSunday === 0;

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-teal-50/30 to-purple-50/20">
        <div className="max-w-2xl mx-auto px-4 pb-24">
          {/* Premium Hero Header with Countdown */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.1s both" : "none"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 mb-4 shadow-xl">
                <span className="text-4xl">{isToday ? "🎉" : "⛪"}</span>
              </div>

              <h1 className="text-5xl font-bold mb-4 leading-tight">
                {isToday ? "Today's Message" : "Sunday Is Coming"}
              </h1>

              {!isToday && (
                <div className="inline-flex flex-col items-center gap-2 px-8 py-5 bg-white/20 backdrop-blur-md rounded-2xl border-2 border-white/30 shadow-xl">
                  <span className="text-6xl font-bold tracking-tight">{daysUntilSunday}</span>
                  <span className="text-sm font-semibold uppercase tracking-wider">days away</span>
                </div>
              )}

              {isToday && (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 shadow-xl animate-pulse">
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                  <span className="text-sm font-bold">Service starts at 10:00 AM</span>
                </div>
              )}
            </div>
          </div>

          {/* Premium Message Overview */}
          <div
            className="mb-8 p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-stone-200/50"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.2s both" : "none"
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-sm font-bold rounded-full border-2 border-teal-200 shadow-md">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                {isToday ? "Today at 10:00 AM" : "This Sunday"}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">
                📖
              </div>
            </div>

            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Restoration & Hope
            </h2>
            <p className="text-stone-700 mb-6 leading-relaxed text-lg">
              Join us as we explore God's promise of restoration and the hope we have in Christ.
              This message will encourage us to trust in God's timing and faithfulness.
            </p>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                👤
              </div>
              <div>
                <p className="font-bold text-stone-900 text-lg">Pastor Erick Thompson</p>
                <p className="text-sm text-teal-700 font-semibold">Lead Pastor</p>
              </div>
            </div>
          </div>

          {/* Premium Scripture Selection */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-amber-50 via-orange-50/30 to-white rounded-3xl shadow-2xl border-2 border-amber-200/50"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.3s both" : "none"
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Key Scriptures
              </h3>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                📖
              </div>
            </div>

            <div className="space-y-4">
              {/* Primary Passage */}
              <Link
                href="/bible"
                className="block p-5 bg-white hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 rounded-2xl border-2 border-stone-200 hover:border-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                    PRIMARY PASSAGE
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📖</span>
                </div>
                <p className="font-serif text-xl text-stone-900 font-bold mb-2">Jeremiah 29:11</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you..."
                </p>
              </Link>

              {/* Supporting Verses */}
              <Link
                href="/bible"
                className="block p-5 bg-white hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-2xl border-2 border-stone-200 hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                    SUPPORTING
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📖</span>
                </div>
                <p className="font-serif text-xl text-stone-900 font-bold mb-2">Romans 8:28</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  And we know that in all things God works for the good of those who love Him...
                </p>
              </Link>

              <Link
                href="/bible"
                className="block p-5 bg-white hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-2xl border-2 border-stone-200 hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                    SUPPORTING
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📖</span>
                </div>
                <p className="font-serif text-xl text-stone-900 font-bold mb-2">Isaiah 43:18-19</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  "Forget the former things; do not dwell on the past. See, I am doing a new thing..."
                </p>
              </Link>
            </div>
          </div>

          {/* Premium Reflection Prompt */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-purple-50 via-pink-50/30 to-white rounded-3xl shadow-2xl border-2 border-purple-200/50"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.4s both" : "none"
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                💭
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Reflection Question
              </h3>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-purple-100 mb-6 shadow-md">
              <p className="text-xl text-stone-800 font-bold italic text-center leading-relaxed">
                "What does restoration mean in your life right now?"
              </p>
            </div>

            <p className="text-sm text-stone-700 mb-6 leading-relaxed">
              Take time this week to sit with this question. You can write your thoughts privately
              or share them with your small group for deeper fellowship and prayer.
            </p>

            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 hover:from-purple-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                ✍️ Write Private Note
              </button>
              <button
                type="button"
                className="flex-1 px-6 py-4 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-purple-300 hover:border-purple-400 text-purple-700 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                👥 Share to Group
              </button>
            </div>
          </div>

          {/* Premium Pastor's Note */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 rounded-3xl border-2 border-teal-200 shadow-2xl"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.5s both" : "none"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                ✉️
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-teal-900 mb-4">From Pastor Erick</h3>
                <div className="p-5 bg-white rounded-2xl border border-teal-100 shadow-md">
                  <p className="text-base text-teal-900 leading-relaxed italic">
                    "As we prepare for Sunday, take time to sit with these passages. God is always at work,
                    even when we can't see it. His plans for us are rooted in hope and His unfailing love.
                    I'm excited to explore this together as a church family."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Call to Action */}
          <div
            className="p-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.6s both" : "none"
            }}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 mb-6 shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>

              <h3 className="text-3xl font-bold mb-3">Ready for Sunday?</h3>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Join us in person or online as we worship together and hear God's word.
              </p>

              <div className="flex gap-4">
                <Link
                  href="/visit"
                  className="flex-1 px-6 py-4 bg-white hover:bg-stone-50 text-stone-900 font-bold rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                >
                  📍 Plan to Visit
                </Link>
                <Link
                  href="/watch"
                  className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                >
                  📺 Watch Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
