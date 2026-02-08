"use client";

import { useEffect, useState } from "react";
import { getMe } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";

export default function Dashboard() {
  const r = useRouter();
  const [me, setMe] = useState<{ id: string; email?: string; role: string; name?: string } | null>(null);
  const [greeting, setGreeting] = useState("Welcome");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Peace be with you");

    (async () => {
      const m = await getMe();
      if (!m) return r.replace("/login");
      setMe(m);
    })();
  }, [r]);

  if (!me) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-teal-50/30 to-amber-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-teal-500/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-stone-600 font-medium">Loading your spiritual home...</p>
        </div>
      </div>
    );
  }

  const firstName = me.name?.split(' ')[0] || me.email?.split('@')[0] || 'Friend';

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-teal-50/30 to-amber-50/20">
        <div className="max-w-2xl mx-auto pb-24 px-4">
          {/* HEADER — Enhanced with gradient text */}
          <div
            className="mb-8 pt-6"
            style={{
              animation: mounted ? "fadeInUp 0.4s ease-out both" : "none",
              animationDelay: "0.1s"
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-stone-900 via-teal-900 to-stone-900 bg-clip-text text-transparent">
                  {greeting}, {firstName}
                </h1>
                <p className="text-sm text-stone-600 mt-2 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                  Your spiritual home for the week
                </p>
              </div>
              <Link
                href="/profile"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <span className="relative">👤</span>
              </Link>
            </div>

            {/* Quick Stats Bar */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-sm">
                <div className="text-2xl font-bold text-teal-600">5</div>
                <div className="text-xs text-stone-600">Days Strong</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-sm">
                <div className="text-2xl font-bold text-amber-600">12</div>
                <div className="text-xs text-stone-600">Prayers</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-sm">
                <div className="text-2xl font-bold text-stone-600">3</div>
                <div className="text-xs text-stone-600">Events</div>
              </div>
            </div>
          </div>

          {/* SUNDAY CARD — Premium redesign */}
          <Link
            href="/sunday"
            className="group block mb-6 rounded-3xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 p-1 shadow-2xl hover:shadow-teal-500/30 transition-all duration-500"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.2s"
            }}
          >
            <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 rounded-[22px] p-6 relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold border border-white/20">
                      <span className="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      This Sunday
                    </div>
                    <div className="px-3 py-1.5 bg-amber-500/90 backdrop-blur-md rounded-full text-xs font-bold text-white shadow-lg">
                      NEW
                    </div>
                  </div>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">⛪</div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                  Restoration & Hope
                </h2>
                <p className="text-white/90 font-medium mb-1">Pastor Erick Thompson</p>
                <p className="text-white/70 text-sm mb-4">Matthew 11:28-30</p>

                <div className="flex items-center gap-4 text-sm text-white/90 mb-5">
                  <span className="flex items-center gap-1.5">
                    <span className="text-lg">⏰</span>
                    <span className="font-medium">3 days away</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-lg">👥</span>
                    <span className="font-medium">127 preparing</span>
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-white/80 mb-2">
                    <span>Your preparation</span>
                    <span>40% complete</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="h-full bg-white rounded-full shadow-lg" style={{ width: '40%', transition: 'width 1s ease-out' }} />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" className="flex-1 px-4 py-3 bg-white text-teal-600 rounded-xl text-sm font-bold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    📖 Read Scripture
                  </button>
                  <button type="button" className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-md rounded-xl text-sm font-bold text-white hover:bg-white/30 transition-all duration-300 border border-white/20">
                    ✓ Mark Complete
                  </button>
                </div>
              </div>
            </div>
          </Link>

          {/* TODAY'S SCRIPTURE — Elevated design */}
          <Link
            href="/bible"
            className="group block mb-6 rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-stone-200/50 relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.3s"
            }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-transparent rounded-full blur-3xl opacity-50" />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    📖
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Today's Scripture</h3>
                    <p className="text-xs text-stone-600">Daily wisdom & reflection</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold">
                  Feb 7
                </div>
              </div>

              <blockquote className="relative pl-4 border-l-4 border-teal-500 mb-4">
                <p className="text-stone-800 leading-relaxed mb-2 italic">
                  "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you{' '}
                  <span className="bg-gradient-to-r from-amber-200 to-amber-100 px-1.5 py-0.5 rounded font-semibold not-italic">hope</span> and a future."
                </p>
                <cite className="text-sm text-stone-600 not-italic font-semibold">— Jeremiah 29:11</cite>
              </blockquote>

              <div className="flex gap-3">
                <button type="button" className="flex-1 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl text-sm font-bold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                  Continue Reading
                </button>
                <button type="button" className="px-4 py-2.5 bg-stone-100 text-stone-700 rounded-xl text-sm font-bold hover:bg-stone-200 transition-all duration-300">
                  🙏
                </button>
                <button type="button" className="px-4 py-2.5 bg-stone-100 text-stone-700 rounded-xl text-sm font-bold hover:bg-stone-200 transition-all duration-300">
                  ❤️
                </button>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 gap-6 mb-6">
            {/* BIRTHDAYS — Celebratory design */}
            <Link
              href="/birthdays"
              className="group rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-200/50 relative overflow-hidden"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
                animationDelay: "0.4s"
              }}
            >
              {/* Confetti effect */}
              <div className="absolute top-0 right-0 text-6xl opacity-10 transform rotate-12">🎉</div>
              <div className="absolute bottom-0 left-0 text-6xl opacity-10 transform -rotate-12">🎈</div>

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                      🎂
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900">Birthdays Today</h3>
                      <p className="text-xs text-stone-600">Celebrate together</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    2 today
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-stone-900">Sarah M.</p>
                      <p className="text-xs text-stone-600">Turning 28 today 🎉</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      J
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-stone-900">John D.</p>
                      <p className="text-xs text-stone-600">Celebrating 35 today 🎈</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" className="flex-1 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl text-sm font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg">
                    ✨ Send Blessings
                  </button>
                  <button type="button" className="px-4 py-2.5 bg-white text-stone-700 rounded-xl text-sm font-bold hover:bg-stone-50 transition-all duration-300 shadow-md">
                    🙏
                  </button>
                </div>
              </div>
            </Link>

            {/* COMMUNITY — Modern card design */}
            <div
              className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-stone-200/50"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
                animationDelay: "0.5s"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🤲
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Community</h3>
                    <p className="text-xs text-stone-600">Prayer & praise</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-stone-600">8 active now</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🙏</span>
                    <div className="flex-1">
                      <p className="text-sm text-stone-800 mb-2 leading-relaxed">
                        "Please pray for my family as we navigate this difficult season. Your support means everything..."
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <button type="button" className="flex items-center gap-1 text-teal-700 font-semibold hover:text-teal-800">
                          <span>🙏</span>
                          <span>12 prayed</span>
                        </button>
                        <button type="button" className="text-teal-600 font-medium hover:underline">
                          + I Prayed
                        </button>
                        <span className="text-stone-500">2 min ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-100">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌟</span>
                    <div className="flex-1">
                      <p className="text-sm text-stone-800 mb-2 leading-relaxed">
                        "God answered my prayer! After months of waiting, we finally got the news. Praise Him!"
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <button type="button" className="flex items-center gap-1 text-amber-700 font-semibold hover:text-amber-800">
                          <span>✨</span>
                          <span>24 amen</span>
                        </button>
                        <button type="button" className="text-amber-600 font-medium hover:underline">
                          + Amen
                        </button>
                        <span className="text-stone-500">15 min ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/community"
                className="block text-center py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              >
                View All Community Posts →
              </Link>
            </div>

            {/* UPCOMING EVENTS — Clean list design */}
            <div
              className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-stone-200/50"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
                animationDelay: "0.6s"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    📆
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">Upcoming Events</h3>
                    <p className="text-xs text-stone-600">Don't miss out</p>
                  </div>
                </div>
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                  This Week
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="group flex gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl hover:from-teal-100 hover:to-cyan-100 transition-all duration-300 cursor-pointer border border-teal-100">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    🎵
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-stone-900 mb-1">Worship Night</p>
                    <p className="text-sm text-stone-600 mb-2">Experience powerful praise & worship</p>
                    <div className="flex items-center gap-3 text-xs text-stone-600">
                      <span className="flex items-center gap-1">
                        <span>📅</span>
                        Friday, 7:00 PM
                      </span>
                      <span className="flex items-center gap-1">
                        <span>📍</span>
                        Main Sanctuary
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group flex gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl hover:from-amber-100 hover:to-orange-100 transition-all duration-300 cursor-pointer border border-amber-100">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    👨‍👩‍👧‍👦
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-stone-900 mb-1">Family Picnic</p>
                    <p className="text-sm text-stone-600 mb-2">Food, fun & fellowship for all ages</p>
                    <div className="flex items-center gap-3 text-xs text-stone-600">
                      <span className="flex items-center gap-1">
                        <span>📅</span>
                        Saturday, 12:00 PM
                      </span>
                      <span className="flex items-center gap-1">
                        <span>📍</span>
                        Heritage Park
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/events"
                className="block text-center py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl text-sm font-bold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
              >
                View All Events →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
