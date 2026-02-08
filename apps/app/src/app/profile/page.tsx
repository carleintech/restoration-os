"use client";

import { useEffect, useState } from "react";
import { getMe } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";

export default function ProfilePage() {
  const r = useRouter();
  const [me, setMe] = useState<{ id: string; email?: string; role: string; name?: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  // Birthday settings
  const [showBirthdayPublicly, setShowBirthdayPublicly] = useState(true);
  const [showAge, setShowAge] = useState(false);
  const [receiveBlessings, setReceiveBlessings] = useState(true);

  // Notification preferences
  const [sundayReminders, setSundayReminders] = useState(true);
  const [prayerRequests, setPrayerRequests] = useState(true);
  const [groupUpdates, setGroupUpdates] = useState(true);

  // Prayer privacy
  const [prayerPrivacy, setPrayerPrivacy] = useState<'public' | 'group' | 'private'>('public');

  useEffect(() => {
    setMounted(true);
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
          <p className="text-stone-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  const firstName = me.name?.split(' ')[0] || me.email?.split('@')[0] || 'Member';

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-teal-50/30 to-amber-50/20">
        <div className="max-w-2xl mx-auto pb-24 px-4">
          {/* Back Button */}
          <div
            className="pt-6 mb-4"
            style={{
              animation: mounted ? "fadeInUp 0.4s ease-out both" : "none",
              animationDelay: "0.05s"
            }}
          >
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              <span className="font-medium">Back to Dashboard</span>
            </Link>
          </div>

          {/* PROFILE HEADER CARD — Enhanced */}
          <div
            className="mb-6 rounded-3xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 p-1 shadow-2xl"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.1s"
            }}
          >
            <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 rounded-[22px] p-6 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center text-5xl shadow-2xl">
                      👤
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-teal-500 flex items-center justify-center text-sm shadow-lg">
                      ✨
                    </div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-sm">
                      {me.name || firstName}
                    </h1>
                    <p className="text-white/80 text-sm mb-3">{me.email}</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {me.role}
                      </span>
                      <span className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                        Member since 2024
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">28</div>
                    <div className="text-xs text-white/80">Days Active</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">42</div>
                    <div className="text-xs text-white/80">Prayers</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">15</div>
                    <div className="text-xs text-white/80">Blessings</div>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full px-4 py-3 bg-white text-teal-600 rounded-xl font-bold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  ✏️ Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* MINISTRY INVOLVEMENT — Enhanced */}
          <div
            className="mb-6 rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-stone-200/50 relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.2s"
            }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-50" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  ⭐
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Ministry Involvement</h3>
                  <p className="text-xs text-stone-600">Your areas of service</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-4 py-2.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-sm font-semibold rounded-xl border border-teal-100 shadow-sm">
                  🎵 Worship Team
                </span>
                <span className="px-4 py-2.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 text-sm font-semibold rounded-xl border border-amber-100 shadow-sm">
                  👥 Small Groups
                </span>
                <span className="px-4 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-sm font-semibold rounded-xl border border-purple-100 shadow-sm">
                  🙏 Prayer Team
                </span>
              </div>

              <button
                type="button"
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-sm font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              >
                + Add Ministry
              </button>
            </div>
          </div>

          {/* SETTINGS SECTIONS */}
          <div className="space-y-6">
            {/* Birthday Settings — Premium toggles */}
            <div
              className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-stone-200/50"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
                animationDelay: "0.3s"
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  🎂
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Birthday Settings</h3>
                  <p className="text-xs text-stone-600">Manage celebration preferences</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-2xl border border-pink-100/50">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Show birthday publicly</p>
                    <p className="text-xs text-stone-600">Let the community celebrate with you</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowBirthdayPublicly(!showBirthdayPublicly)}
                    aria-label="Toggle show birthday publicly"
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                      showBirthdayPublicly
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg'
                        : 'bg-stone-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                        showBirthdayPublicly ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-2xl border border-pink-100/50">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Show age</p>
                    <p className="text-xs text-stone-600">Display your age on your birthday</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAge(!showAge)}
                    aria-label="Toggle show age"
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                      showAge
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg'
                        : 'bg-stone-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                        showAge ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-2xl border border-pink-100/50">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Receive blessings</p>
                    <p className="text-xs text-stone-600">Allow others to send birthday wishes</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setReceiveBlessings(!receiveBlessings)}
                    aria-label="Toggle receive blessings"
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                      receiveBlessings
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg'
                        : 'bg-stone-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                        receiveBlessings ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div
              className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-stone-200/50"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
                animationDelay: "0.4s"
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  🔔
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Notifications</h3>
                  <p className="text-xs text-stone-600">Manage your alerts & reminders</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl border border-indigo-100/50">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Sunday reminders</p>
                    <p className="text-xs text-stone-600">Get notified about upcoming services</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSundayReminders(!sundayReminders)}
                    aria-label="Toggle Sunday reminders"
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                      sundayReminders
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg'
                        : 'bg-stone-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                        sundayReminders ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl border border-indigo-100/50">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Prayer requests</p>
                    <p className="text-xs text-stone-600">Alerts for new community prayers</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPrayerRequests(!prayerRequests)}
                    aria-label="Toggle prayer requests"
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                      prayerRequests
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg'
                        : 'bg-stone-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                        prayerRequests ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl border border-indigo-100/50">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Group updates</p>
                    <p className="text-xs text-stone-600">Stay informed about group activities</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGroupUpdates(!groupUpdates)}
                    aria-label="Toggle group updates"
                    className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                      groupUpdates
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg'
                        : 'bg-stone-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                        groupUpdates ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Prayer Privacy */}
            <div
              className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-stone-200/50"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
                animationDelay: "0.5s"
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  🙏
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Prayer Privacy</h3>
                  <p className="text-xs text-stone-600">Control who sees your prayers</p>
                </div>
              </div>

              <div className="space-y-3">
                <label
                  className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    prayerPrivacy === 'public'
                      ? 'bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-300 shadow-md'
                      : 'bg-white border-stone-200 hover:border-teal-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="prayer-privacy"
                    className="mt-1 w-5 h-5 text-teal-600 focus:ring-teal-500"
                    checked={prayerPrivacy === 'public'}
                    onChange={() => setPrayerPrivacy('public')}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-stone-900 mb-1">
                      🌍 Public prayer requests
                    </p>
                    <p className="text-xs text-stone-600">
                      Share with the entire community for maximum prayer support
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    prayerPrivacy === 'group'
                      ? 'bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-300 shadow-md'
                      : 'bg-white border-stone-200 hover:border-teal-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="prayer-privacy"
                    className="mt-1 w-5 h-5 text-teal-600 focus:ring-teal-500"
                    checked={prayerPrivacy === 'group'}
                    onChange={() => setPrayerPrivacy('group')}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-stone-900 mb-1">
                      👥 Group-only requests
                    </p>
                    <p className="text-xs text-stone-600">
                      Share only with your small groups and ministry teams
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    prayerPrivacy === 'private'
                      ? 'bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-300 shadow-md'
                      : 'bg-white border-stone-200 hover:border-teal-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="prayer-privacy"
                    className="mt-1 w-5 h-5 text-teal-600 focus:ring-teal-500"
                    checked={prayerPrivacy === 'private'}
                    onChange={() => setPrayerPrivacy('private')}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-stone-900 mb-1">
                      🔒 Private only
                    </p>
                    <p className="text-xs text-stone-600">
                      Keep all prayer requests completely private
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Sign Out Button — Enhanced */}
          <div
            className="mt-8"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.6s"
            }}
          >
            <button
              type="button"
              onClick={async () => {
                await supabase.auth.signOut();
                r.push("/login");
              }}
              className="w-full px-4 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-bold hover:from-red-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>🚪</span>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
