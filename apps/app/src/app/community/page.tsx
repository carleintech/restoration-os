"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import { apiFetch } from "@/lib/api";
import { getAccessToken } from "@/lib/auth";

type Tab = "prayer" | "praise" | "updates";

// Sample data
const prayerRequests = [
  {
    id: "1",
    author: "Sarah M.",
    text: "Please pray for my family as we navigate a difficult season. We need God's wisdom and peace.",
    category: "Family",
    timestamp: "2 hours ago",
    anonymous: false,
    prayedCount: 12,
  },
  {
    id: "2",
    author: "Anonymous",
    text: "Prayers needed for healing and strength during medical treatment.",
    category: "Health",
    timestamp: "5 hours ago",
    anonymous: true,
    prayedCount: 24,
  },
  {
    id: "3",
    author: "Michael D.",
    text: "Seeking guidance on a major life decision. Please pray for clarity and direction.",
    category: "Guidance",
    timestamp: "1 day ago",
    anonymous: false,
    prayedCount: 8,
  },
];

const praiseReports = [
  {
    id: "1",
    author: "Jennifer L.",
    text: "Thank God for answered prayer! My father has been healed and is recovering well. Grateful for our church family's prayers!",
    timestamp: "3 hours ago",
    amenCount: 32,
  },
  {
    id: "2",
    author: "David T.",
    text: "Grateful for the renewal I felt during worship this Sunday. God is so good!",
    timestamp: "1 day ago",
    amenCount: 18,
  },
];

const churchUpdates = [
  {
    id: "1",
    title: "Worship Night This Friday",
    content: "Join us for a special night of worship and prayer. 7:00 PM in the main sanctuary.",
    cta: "View Event",
    ctaLink: "/events",
    timestamp: "This morning",
  },
  {
    id: "2",
    title: "New Small Groups Starting",
    content: "We're launching new small groups this month! Find your community and grow together.",
    cta: "Explore Groups",
    ctaLink: "/groups",
    timestamp: "Yesterday",
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<Tab>("prayer");
  const [prayedFor, setPrayedFor] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handlePray(postId: string) {
    const token = await getAccessToken();
    if (token) {
      await apiFetch(`/community/${postId}/pray`, token, { method: "POST" });
    }
    setPrayedFor(prev => new Set(prev).add(postId));
  }

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-teal-50/30 to-cyan-50/20">
        <div className="max-w-2xl mx-auto px-4 pb-24">
          {/* Premium Header with Stats */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-teal-500 via-cyan-600 to-teal-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.1s both" : "none"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 mb-4 shadow-xl">
                <span className="text-3xl">🤝</span>
              </div>

              <h1 className="text-4xl font-bold mb-2">Community Hub</h1>
              <p className="text-white/90 text-lg mb-6">Share, pray, and celebrate together</p>

              {/* Community Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">142</div>
                  <div className="text-xs text-white/80">Active Prayers</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">68</div>
                  <div className="text-xs text-white/80">Praise Reports</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">324</div>
                  <div className="text-xs text-white/80">Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Tabs */}
          <div
            className="flex gap-2 mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border-2 border-stone-200/50"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.2s both" : "none"
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("prayer")}
              className={`flex-1 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "prayer"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg scale-105"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              🙏 Prayer
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("praise")}
              className={`flex-1 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "praise"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              🌟 Praise
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("updates")}
              className={`flex-1 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "updates"
                  ? "bg-gradient-to-r from-stone-700 to-stone-800 text-white shadow-lg scale-105"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              📢 Updates
            </button>
          </div>

          {/* Content */}
          <div>
            {/* 🙏 PRAYER REQUESTS TAB */}
            {activeTab === "prayer" && (
              <div
                style={{
                  animation: mounted ? "fadeInUp 0.3s ease-out both" : "none"
                }}
              >
                {/* Add Prayer Button */}
                <button
                  type="button"
                  className="w-full mb-6 px-6 py-4 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-600 hover:via-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                >
                  + Share Prayer Request
                </button>

                {/* Prayer Cards */}
                <div className="space-y-4">
                  {prayerRequests.map((prayer, index) => (
                    <div
                      key={prayer.id}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-stone-200/50 hover:shadow-2xl transition-all duration-300"
                      style={{
                        animation: mounted ? `fadeInUp 0.3s ease-out ${0.3 + index * 0.1}s both` : "none"
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-stone-900">
                            {prayer.anonymous ? "🙏 Anonymous" : `👤 ${prayer.author}`}
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs font-bold rounded-full border border-teal-200">
                            {prayer.category}
                          </span>
                        </div>
                        <span className="text-xs text-stone-500 font-medium">{prayer.timestamp}</span>
                      </div>

                      <p className="text-stone-800 mb-4 leading-relaxed">{prayer.text}</p>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handlePray(prayer.id)}
                          disabled={prayedFor.has(prayer.id)}
                          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                            prayedFor.has(prayer.id)
                              ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg cursor-default"
                              : "bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 hover:from-teal-100 hover:to-cyan-100 border-2 border-teal-200 shadow-md hover:shadow-lg"
                          }`}
                        >
                          {prayedFor.has(prayer.id) ? "✓ You Prayed" : "🙏 I Prayed"}
                        </button>
                        <span className="text-xs text-stone-600 font-semibold">
                          {prayer.prayedCount} {prayer.prayedCount === 1 ? 'person' : 'people'} prayed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 🌟 PRAISE REPORTS TAB */}
            {activeTab === "praise" && (
              <div
                style={{
                  animation: mounted ? "fadeInUp 0.3s ease-out both" : "none"
                }}
              >
                {/* Add Praise Button */}
                <button
                  type="button"
                  className="w-full mb-6 px-6 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:via-amber-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                >
                  + Share Praise Report
                </button>

                {/* Praise Cards */}
                <div className="space-y-4">
                  {praiseReports.map((praise, index) => (
                    <div
                      key={praise.id}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-stone-200/50 hover:shadow-2xl transition-all duration-300"
                      style={{
                        animation: mounted ? `fadeInUp 0.3s ease-out ${0.3 + index * 0.1}s both` : "none"
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-sm font-bold text-stone-900">
                          👤 {praise.author}
                        </span>
                        <span className="text-xs text-stone-500 font-medium">{praise.timestamp}</span>
                      </div>

                      <p className="text-stone-800 mb-4 leading-relaxed">{praise.text}</p>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          className="px-5 py-2.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 hover:from-amber-100 hover:to-orange-100 rounded-xl text-sm font-bold transition-all duration-300 border-2 border-amber-200 shadow-md hover:shadow-lg"
                        >
                          ✨ Amen
                        </button>
                        <span className="text-xs text-stone-600 font-semibold">
                          {praise.amenCount} amens
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 📢 CHURCH UPDATES TAB */}
            {activeTab === "updates" && (
              <div
                className="space-y-4"
                style={{
                  animation: mounted ? "fadeInUp 0.3s ease-out both" : "none"
                }}
              >
                {churchUpdates.map((update, index) => (
                  <div
                    key={update.id}
                    className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-stone-200/50 hover:shadow-2xl transition-all duration-300"
                    style={{
                      animation: mounted ? "fadeInUp 0.3s ease-out both" : "none",
                      animationDelay: `${0.3 + index * 0.1}s`
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-stone-900">{update.title}</h3>
                      <span className="text-xs text-stone-500 font-medium">{update.timestamp}</span>
                    </div>

                    <p className="text-stone-700 mb-4 leading-relaxed">{update.content}</p>

                    <a
                      href={update.ctaLink}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {update.cta} →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Premium Bottom Info */}
          <div
            className="mt-8 p-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 rounded-3xl border-2 border-teal-200 shadow-2xl"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.6s both" : "none"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                🤲
              </div>
              <div>
                <p className="text-base text-teal-900 font-bold mb-2">A Safe Space</p>
                <p className="text-sm text-teal-700 leading-relaxed">
                  This community is moderated with care. All posts are reviewed to ensure a respectful and sacred environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
