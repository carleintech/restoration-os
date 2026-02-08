"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";

type Month = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";

// Sample birthday data
const birthdayData = [
  { id: 1, name: "Sarah M.", day: 7, month: "February", ministry: "Worship Team", isToday: true },
  { id: 2, name: "John D.", day: 7, month: "February", ministry: "Youth Ministry", isToday: true },
  { id: 3, name: "Michael T.", day: 12, month: "February", ministry: "Small Groups" },
  { id: 4, name: "Jennifer L.", day: 15, month: "February", ministry: "Prayer Team" },
  { id: 5, name: "David K.", day: 20, month: "February" },
  { id: 6, name: "Emily R.", day: 25, month: "February", ministry: "Kids Ministry" },
];

export default function BirthdaysPage() {
  const [showBlessingModal, setShowBlessingModal] = useState<number | null>(null);
  const [blessing, setBlessing] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [sentBlessings, setSentBlessings] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentMonth: Month = "February";
  const todayBirthdays = birthdayData.filter(b => b.isToday);

  const handleSendBlessing = (userId: number) => {
    setSentBlessings(prev => new Set(prev).add(userId));
    setShowBlessingModal(null);
    setBlessing("");
    setIsAnonymous(false);
  };

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20">
        <div className="max-w-2xl mx-auto px-4 pb-24">
          {/* Premium Header with Stats */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.1s both" : "none"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 mb-4 shadow-xl">
                <span className="text-3xl">🎂</span>
              </div>

              <h1 className="text-4xl font-bold mb-2">Birthday Wall</h1>
              <p className="text-white/90 text-lg mb-6">Celebrate, bless, and pray for our church family</p>

              {/* Birthday Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">{todayBirthdays.length}</div>
                  <div className="text-xs text-white/80">Today</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">{birthdayData.length}</div>
                  <div className="text-xs text-white/80">This Month</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">{sentBlessings.size}</div>
                  <div className="text-xs text-white/80">Blessings Sent</div>
                </div>
              </div>
            </div>
          </div>

          {/* Month Badge */}
          <div
            className="mb-8 flex items-center justify-center"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.2s both" : "none"
            }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full border-2 border-amber-200 shadow-lg">
              <span className="text-2xl">📅</span>
              <span className="text-lg font-bold">{currentMonth} Birthdays</span>
            </div>
          </div>

          {/* Today's Birthdays Section */}
          {todayBirthdays.length > 0 && (
            <div
              className="mb-8"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out 0.3s both" : "none"
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                  🎉
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Today's Celebrations</h3>
              </div>

              <div className="space-y-4">
                {todayBirthdays.map((person, index) => (
                  <div
                    key={person.id}
                    className="relative p-8 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 rounded-3xl shadow-2xl border-2 border-amber-200/50 overflow-hidden hover:shadow-3xl transition-all duration-300"
                    style={{
                      animation: mounted ? `fadeInUp 0.3s ease-out ${0.4 + index * 0.1}s both` : "none"
                    }}
                  >
                    {/* Decorative celebration element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-40" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-40" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            TODAY'S BIRTHDAY
                          </div>
                          <h4 className="text-3xl font-bold text-stone-900 mb-2">{person.name}</h4>
                          {person.ministry && (
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-sm font-semibold rounded-full border border-teal-200">
                              <span>🎯</span>
                              <span>{person.ministry}</span>
                            </div>
                          )}
                        </div>
                        <div className="text-6xl">🎂</div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowBlessingModal(person.id)}
                          disabled={sentBlessings.has(person.id)}
                          className={`flex-1 px-6 py-4 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                            sentBlessings.has(person.id)
                              ? "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 cursor-default"
                              : "bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:via-amber-700 hover:to-orange-700 text-white hover:scale-[1.02]"
                          }`}
                        >
                          {sentBlessings.has(person.id) ? "✓ Blessing Sent" : "✨ Send Blessing"}
                        </button>
                        <button
                          type="button"
                          className="px-6 py-4 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 border-2 border-teal-200 text-teal-700 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          🙏 Pray
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Birthdays This Month */}
          <div
            style={{
              animation: mounted ? `fadeInUp 0.5s ease-out ${todayBirthdays.length > 0 ? '0.7' : '0.3'}s both` : "none"
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center text-2xl shadow-lg">
                📅
              </div>
              <h3 className="text-2xl font-bold text-stone-900">This Month</h3>
            </div>

            <div className="grid gap-4">
              {birthdayData.map((person, index) => (
                <div
                  key={person.id}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    person.isToday
                      ? "bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-300"
                      : "bg-white/80 backdrop-blur-sm border-2 border-stone-200/50 hover:shadow-xl hover:scale-[1.01]"
                  }`}
                  style={{
                    animation: mounted ? `fadeInUp 0.3s ease-out ${(todayBirthdays.length > 0 ? 0.8 : 0.4) + index * 0.1}s both` : "none"
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
                        person.isToday
                          ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white"
                          : "bg-gradient-to-br from-stone-100 to-stone-200"
                      }`}>
                        🎂
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-lg font-bold text-stone-900">
                            {person.name}
                          </p>
                          {person.isToday && (
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                              Today
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-stone-600">
                          <span className="font-semibold">{person.month} {person.day}</span>
                          {person.ministry && (
                            <>
                              <span>•</span>
                              <span>{person.ministry}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {!person.isToday && (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setShowBlessingModal(person.id)}
                          disabled={sentBlessings.has(person.id)}
                          className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg ${
                            sentBlessings.has(person.id)
                              ? "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 cursor-default"
                              : "bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 text-amber-700 border-2 border-amber-200"
                          }`}
                        >
                          {sentBlessings.has(person.id) ? "✓ Sent" : "✨ Bless"}
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2.5 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 border-2 border-teal-200 text-teal-700 text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          🙏
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blessing Modal */}
          {showBlessingModal !== null && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setShowBlessingModal(null)}
              onKeyDown={(e) => e.key === 'Escape' && setShowBlessingModal(null)}
            >
              <div
                role="document"
                className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-stone-200"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                style={{ animation: "fadeInUp 0.3s both" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                      ✨
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">Send a Blessing</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowBlessingModal(null)}
                    className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 mb-6">
                  <p className="text-sm text-amber-900 font-medium">
                    Write a short prayer or blessing for{" "}
                    <span className="font-bold">{birthdayData.find(b => b.id === showBlessingModal)?.name}</span>
                  </p>
                </div>

                <textarea
                  value={blessing}
                  onChange={(e) => setBlessing(e.target.value)}
                  placeholder="May God bless you with..."
                  className="w-full p-4 border-2 border-stone-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 mb-4 transition-all"
                  rows={4}
                />

                <label className="flex items-center gap-3 p-4 bg-stone-50 rounded-2xl mb-6 cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5 text-amber-500 rounded"
                  />
                  <span className="text-sm text-stone-700 font-medium">Send anonymously</span>
                </label>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleSendBlessing(showBlessingModal)}
                    disabled={!blessing.trim()}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:via-amber-700 hover:to-orange-700 disabled:from-stone-300 disabled:via-stone-300 disabled:to-stone-300 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    Send Blessing
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBlessingModal(null)}
                    className="px-6 py-4 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-2xl transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-xs text-stone-500 mt-4 text-center">
                  Blessings are shared privately and respectfully
                </p>
              </div>
            </div>
          )}

          {/* Bottom Info */}
          <div
            className="mt-8 p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl border-2 border-amber-200 shadow-2xl"
            style={{
              animation: mounted ? `fadeInUp 0.5s ease-out ${0.8 + birthdayData.length * 0.1}s both` : "none"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                🎁
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Privacy Matters</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  All birthday settings can be managed in your profile. You control what's shared
                  and who can send you blessings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
