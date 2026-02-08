"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";

// Sample scripture data
const sampleVerses = [
  {
    number: 1,
    text: "In the beginning God created the heavens and the earth.",
    highlighted: false,
  },
  {
    number: 2,
    text: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
    highlighted: false,
  },
  {
    number: 3,
    text: "And God said, \"Let there be light,\" and there was light.",
    highlighted: true,
    highlightType: "sunday-message",
  },
  {
    number: 4,
    text: "God saw that the light was good, and he separated the light from the darkness.",
    highlighted: true,
    highlightType: "sunday-message",
  },
  {
    number: 5,
    text: "God called the light \"day,\" and the darkness he called \"night.\" And there was evening, and there was morning—the first day.",
    highlighted: false,
  },
];

export default function BiblePage() {
  const [selectedBook, setSelectedBook] = useState("Genesis");
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [verses, setVerses] = useState(sampleVerses);
  const [showActions, setShowActions] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleVerseClick = (verseNumber: number) => {
    setShowActions(showActions === verseNumber ? null : verseNumber);
  };

  const highlightVerse = (verseNumber: number) => {
    setVerses(verses.map(v =>
      v.number === verseNumber
        ? { ...v, highlighted: !v.highlighted, highlightType: v.highlighted ? undefined : 'reflection' }
        : v
    ));
    setShowActions(null);
  };

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-teal-50/20">
        <div className="max-w-3xl mx-auto px-4 pb-24">
          {/* 📊 PREMIUM STATS HEADER */}
          <div
            className="mb-6 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-6 shadow-2xl"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.1s"
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center text-2xl shadow-lg">
                📖
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Holy Bible</h1>
                <p className="text-sm text-white/80">New International Version</p>
              </div>
            </div>

            {/* Reading Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-xs text-white/80">Days Reading</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-white">38</div>
                <div className="text-xs text-white/80">Verses Noted</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-xs text-white/80">Bookmarks</div>
              </div>
            </div>
          </div>

          {/* 📖 PREMIUM BOOK & CHAPTER SELECTOR */}
          <div
            className="mb-6 flex gap-3"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.2s"
            }}
          >
            <select
              className="flex-1 px-5 py-4 bg-white/60 backdrop-blur-sm border-2 border-stone-200 rounded-2xl text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-lg transition-all duration-300"
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option>Genesis</option>
              <option>Exodus</option>
              <option>Psalms</option>
              <option>Proverbs</option>
              <option>John</option>
              <option>Romans</option>
              <option>Revelation</option>
            </select>

            <select
              className="w-28 px-5 py-4 bg-white/60 backdrop-blur-sm border-2 border-stone-200 rounded-2xl text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-lg transition-all duration-300"
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(Number(e.target.value))}
            >
              {[...Array(50)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          {/* Premium Sunday Message Banner */}
          <div
            className="mb-6 p-5 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 border-2 border-teal-200 rounded-2xl shadow-lg"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.3s"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
                ⛪
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-teal-900 mb-1">Sunday's Message Connection</p>
                <p className="text-sm text-teal-700">
                  Verses highlighted in teal are part of this Sunday's message: <span className="font-semibold">"Restoration & Hope"</span>
                </p>
              </div>
            </div>
          </div>

          {/* 📖 PREMIUM SCRIPTURE TEXT AREA */}
          <div
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-stone-200/50 min-h-[600px]"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.4s"
            }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-serif font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {selectedBook} {selectedChapter}
              </h1>
              <p className="text-sm font-medium text-stone-600">
                New International Version (NIV)
              </p>
            </div>

            <div className="scripture-text space-y-3">
              {verses.map((verse, index) => (
                <div
                  key={verse.number}
                  className="relative"
                  style={{
                    animation: mounted ? "fadeInUp 0.3s ease-out both" : "none",
                    animationDelay: `${0.5 + index * 0.05}s`
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleVerseClick(verse.number)}
                    className={`w-full text-left group rounded-2xl p-4 transition-all duration-300 ${
                      verse.highlighted
                        ? verse.highlightType === 'sunday-message'
                          ? 'bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 border-l-4 border-teal-500 shadow-md'
                          : 'bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-l-4 border-amber-500 shadow-md'
                        : 'hover:bg-stone-50/80 hover:shadow-sm'
                    }`}
                  >
                    <span className="inline-block min-w-[2rem] text-sm text-stone-500 font-bold mr-3">
                      {verse.number}
                    </span>
                    <span className="text-base text-stone-900 leading-relaxed">
                      {verse.text}
                    </span>

                    {/* Premium Sunday message tag */}
                    {verse.highlightType === 'sunday-message' && (
                      <span className="ml-2 inline-block px-3 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        ⛪ Sunday's Message
                      </span>
                    )}
                  </button>

                  {/* 🧩 PREMIUM MARGIN ACTIONS */}
                  {showActions === verse.number && (
                    <div
                      className="mt-3 p-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-stone-200"
                      style={{ animation: "fadeInUp 0.2s both" }}
                    >
                      <p className="text-xs font-semibold text-stone-600 mb-4">Verse {verse.number} actions:</p>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-stone-50 to-stone-100 hover:from-stone-100 hover:to-stone-200 rounded-xl text-sm font-semibold text-stone-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <span className="text-lg">🔖</span>
                          <span>Bookmark</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => highlightVerse(verse.number)}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-xl text-sm font-semibold text-amber-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <span className="text-lg">🖍</span>
                          <span>Highlight</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl text-sm font-semibold text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <span className="text-lg">✍️</span>
                          <span>Add Note</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 rounded-xl text-sm font-semibold text-teal-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <span className="text-lg">🙏</span>
                          <span>Pray</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl text-sm font-semibold text-purple-700 transition-all duration-300 shadow-sm hover:shadow-md col-span-2"
                        >
                          <span className="text-lg">👥</span>
                          <span>Share to Group</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Premium Bottom Actions */}
            <div className="mt-10 pt-8 border-t-2 border-stone-200 flex gap-4">
              <button
                type="button"
                className="flex-1 px-6 py-4 bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-600 hover:via-teal-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                Continue Reading →
              </button>
              <button
                type="button"
                className="px-6 py-4 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-stone-300 hover:border-teal-400 text-stone-700 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                📝 My Notes
              </button>
            </div>
          </div>

          {/* Premium Quick Links */}
          <div
            className="mt-8 grid grid-cols-3 gap-4"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out both" : "none",
              animationDelay: "0.6s"
            }}
          >
            <button
              type="button"
              className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">📚</div>
              <div className="text-sm font-bold text-blue-900">Reading Plan</div>
              <div className="text-xs text-blue-700 mt-1">14 days streak</div>
            </button>
            <button
              type="button"
              className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-200 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🔖</div>
              <div className="text-sm font-bold text-amber-900">Bookmarks</div>
              <div className="text-xs text-amber-700 mt-1">7 saved</div>
            </button>
            <button
              type="button"
              className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-teal-100 hover:border-teal-200 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">✍️</div>
              <div className="text-sm font-bold text-teal-900">My Notes</div>
              <div className="text-xs text-teal-700 mt-1">38 entries</div>
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
