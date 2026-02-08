"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";

// Sample journal data
const recentEntries = [
  {
    id: "1",
    title: "God's Faithfulness in Hard Times",
    excerpt: "Today I was reminded of God's faithfulness even in the midst of uncertainty. Reading Psalm 23 brought such peace...",
    date: "February 7, 2024",
    scripture: "Psalm 23:1-4",
    tags: ["Faith", "Comfort"],
    mood: "Peaceful",
  },
  {
    id: "2",
    title: "Prayer for Guidance",
    excerpt: "I'm facing a big decision and need God's wisdom. Praying through James 1:5 - if any of you lacks wisdom...",
    date: "February 6, 2024",
    scripture: "James 1:5",
    tags: ["Prayer", "Guidance"],
    mood: "Hopeful",
  },
  {
    id: "3",
    title: "Grateful Heart",
    excerpt: "So much to be thankful for today. The Lord has been so good. Counting my blessings and praising His name...",
    date: "February 5, 2024",
    scripture: "1 Thessalonians 5:18",
    tags: ["Gratitude", "Worship"],
    mood: "Joyful",
  },
  {
    id: "4",
    title: "Learning to Trust",
    excerpt: "Trusting God's timing is hard, but I'm learning to surrender my plans to Him. Proverbs 3:5-6 has become my anchor...",
    date: "February 4, 2024",
    scripture: "Proverbs 3:5-6",
    tags: ["Trust", "Surrender"],
    mood: "Reflective",
  },
];

const highlights = [
  {
    id: "h1",
    verse: "For I know the plans I have for you, declares the LORD...",
    reference: "Jeremiah 29:11",
    note: "This verse brought me so much hope during a difficult week. God's plans are always good!",
    date: "February 6, 2024",
  },
  {
    id: "h2",
    verse: "The LORD is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
    note: "Perfect reminder that God provides everything I need.",
    date: "February 5, 2024",
  },
  {
    id: "h3",
    verse: "Trust in the LORD with all your heart...",
    reference: "Proverbs 3:5",
    note: "Learning to trust God's wisdom over my own understanding.",
    date: "February 4, 2024",
  },
];

const prompts = [
  "What is God teaching me this season?",
  "How have I seen God's faithfulness recently?",
  "What am I grateful for today?",
  "Where do I need God's help right now?",
  "What Scripture is speaking to my heart?",
];

export default function JournalPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"entries" | "highlights">("entries");

  useEffect(() => {
    setMounted(true);
  }, []);

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case "Joyful":
        return "from-amber-500 to-yellow-500";
      case "Peaceful":
        return "from-teal-500 to-cyan-500";
      case "Hopeful":
        return "from-blue-500 to-indigo-500";
      case "Reflective":
        return "from-purple-500 to-pink-500";
      default:
        return "from-stone-500 to-stone-600";
    }
  };

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-purple-50/30 to-pink-50/20">
        <div className="max-w-4xl mx-auto px-4 pb-24">
          {/* Premium Header with Stats */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-purple-500 via-pink-600 to-purple-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.1s both" : "none"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 mb-4 shadow-xl">
                <span className="text-3xl">📓</span>
              </div>

              <h1 className="text-4xl font-bold mb-2">My Journal</h1>
              <p className="text-white/90 text-lg mb-6">Document your spiritual journey with God</p>

              {/* Journal Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">{recentEntries.length}</div>
                  <div className="text-xs text-white/80">This Month</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">{highlights.length}</div>
                  <div className="text-xs text-white/80">Highlights</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">47</div>
                  <div className="text-xs text-white/80">Days Active</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div
            className="mb-8 grid grid-cols-2 gap-4"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.2s both" : "none"
            }}
          >
            <button
              type="button"
              className="p-6 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 hover:from-purple-600 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">✍️</span>
                <h3 className="text-xl font-bold">New Entry</h3>
              </div>
              <p className="text-white/90 text-sm">Write your thoughts and reflections</p>
            </button>
            <button
              type="button"
              className="p-6 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-600 hover:via-teal-700 hover:to-cyan-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🖍</span>
                <h3 className="text-xl font-bold">Add Highlight</h3>
              </div>
              <p className="text-white/90 text-sm">Save meaningful verses and notes</p>
            </button>
          </div>

          {/* Premium Tabs */}
          <div
            className="flex gap-2 mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border-2 border-stone-200/50"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.3s both" : "none"
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("entries")}
              className={`flex-1 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "entries"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              📓 Entries
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("highlights")}
              className={`flex-1 px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === "highlights"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg scale-105"
                  : "text-stone-700 hover:bg-stone-50"
              }`}
            >
              🖍 Highlights
            </button>
          </div>

          {/* Content */}
          <div>
            {/* ENTRIES TAB */}
            {activeTab === "entries" && (
              <div>
                <div
                  className="flex items-center justify-between mb-6"
                  style={{
                    animation: mounted ? "fadeInUp 0.3s ease-out 0.4s both" : "none"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                      📖
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900">Recent Entries</h2>
                  </div>
                  <select className="px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-stone-200 rounded-xl text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md">
                    <option>All Time</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>This Year</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentEntries.map((entry, index) => (
                    <div
                      key={entry.id}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-stone-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                      style={{
                        animation: mounted ? `fadeInUp 0.3s ease-out ${0.5 + index * 0.1}s both` : "none"
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-stone-900 mb-2 line-clamp-1">{entry.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-stone-600 mb-3">
                            <span>📅</span>
                            <span>{entry.date}</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 bg-gradient-to-r ${getMoodColor(entry.mood)} text-white text-xs font-bold rounded-full shadow-md`}>
                          {entry.mood}
                        </div>
                      </div>

                      <p className="text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">{entry.excerpt}</p>

                      {entry.scripture && (
                        <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 mb-4">
                          <div className="flex items-center gap-2 text-xs font-semibold text-purple-700">
                            <span>📖</span>
                            <span>{entry.scripture}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-stone-100 text-stone-700 text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* HIGHLIGHTS TAB */}
            {activeTab === "highlights" && (
              <div>
                <div
                  className="flex items-center gap-3 mb-6"
                  style={{
                    animation: mounted ? "fadeInUp 0.3s ease-out 0.4s both" : "none"
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
                    🖍
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Saved Highlights</h2>
                </div>

                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={highlight.id}
                      className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-stone-200/50 hover:shadow-2xl transition-all duration-300"
                      style={{
                        animation: mounted ? `fadeInUp 0.3s ease-out ${0.5 + index * 0.1}s both` : "none"
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                          📖
                        </div>
                        <div className="flex-1">
                          <div className="p-4 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 rounded-xl border-l-4 border-teal-500 mb-3">
                            <p className="text-base text-stone-800 italic mb-2 leading-relaxed">"{highlight.verse}"</p>
                            <p className="text-sm font-bold text-teal-700">{highlight.reference}</p>
                          </div>
                          {highlight.note && (
                            <p className="text-sm text-stone-600 leading-relaxed mb-3">{highlight.note}</p>
                          )}
                          <div className="flex items-center gap-3 text-xs text-stone-500">
                            <span>📅 {highlight.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Writing Prompts */}
          <div
            className="mt-8 p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 shadow-2xl"
            style={{
              animation: mounted ? `fadeInUp 0.5s ease-out ${0.6 + (activeTab === "entries" ? recentEntries.length : highlights.length) * 0.1}s both` : "none"
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg">
                💭
              </div>
              <h3 className="text-2xl font-bold text-purple-900">Writing Prompts</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {prompts.map((prompt, index) => (
                <button
                  key={index}
                  type="button"
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-purple-200/50 hover:border-purple-400 hover:bg-white text-left text-sm text-purple-900 font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <span className="mr-2">💡</span>
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div
            className="mt-8 p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-3xl border-2 border-purple-200 shadow-2xl"
            style={{
              animation: mounted ? `fadeInUp 0.5s ease-out ${0.7 + (activeTab === "entries" ? recentEntries.length : highlights.length) * 0.1 + prompts.length * 0.05}s both` : "none"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                🔒
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Your Thoughts Are Private</h3>
                <p className="text-sm text-purple-800 leading-relaxed">
                  Your journal entries are completely private and only visible to you. Share your heart freely
                  with God in this sacred space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
