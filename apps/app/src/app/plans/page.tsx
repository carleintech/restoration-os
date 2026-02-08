"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";

// Sample reading plans data
const featuredPlan = {
  id: "1",
  title: "Gospel of John",
  description: "Discover Jesus through the eyes of His beloved disciple",
  duration: "21 days",
  difficulty: "Beginner",
  enrolled: 124,
  progress: 40,
  currentDay: 9,
  totalDays: 21,
  isActive: true,
};

const availablePlans = [
  {
    id: "2",
    title: "Psalms of Praise",
    description: "Journey through the songs and prayers of David",
    duration: "30 days",
    difficulty: "Beginner",
    enrolled: 89,
    category: "Worship",
  },
  {
    id: "3",
    title: "Sermon on the Mount",
    description: "Deep dive into Jesus' most famous teachings",
    duration: "14 days",
    difficulty: "Intermediate",
    enrolled: 156,
    category: "Teachings",
  },
  {
    id: "4",
    title: "Proverbs for Wisdom",
    description: "Daily wisdom from Solomon for modern life",
    duration: "31 days",
    difficulty: "Beginner",
    enrolled: 203,
    category: "Wisdom",
  },
  {
    id: "5",
    title: "Romans Study",
    description: "Understand Paul's letter to the church in Rome",
    duration: "28 days",
    difficulty: "Advanced",
    enrolled: 67,
    category: "Epistles",
  },
];

export default function PlansPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "from-green-500 to-emerald-500";
      case "Intermediate":
        return "from-amber-500 to-orange-500";
      case "Advanced":
        return "from-purple-500 to-pink-500";
      default:
        return "from-stone-500 to-stone-600";
    }
  };

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-4xl mx-auto px-4 pb-24">
          {/* Premium Header with Stats */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.1s both" : "none"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 mb-4 shadow-xl">
                <span className="text-3xl">📚</span>
              </div>

              <h1 className="text-4xl font-bold mb-2">Reading Plans</h1>
              <p className="text-white/90 text-lg mb-6">Grow deeper in God's Word through guided Bible reading</p>

              {/* Reading Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">2</div>
                  <div className="text-xs text-white/80">Active Plans</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">47</div>
                  <div className="text-xs text-white/80">Days Reading</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-xs text-white/80">Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Active Plan */}
          <div
            className="mb-8"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.2s both" : "none"
            }}
          >
            <h2 className="text-2xl font-bold text-stone-900 mb-4">📖 Continue Reading</h2>

            <div className="p-8 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3">
                      Day {featuredPlan.currentDay} of {featuredPlan.totalDays}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{featuredPlan.title}</h3>
                    <p className="text-white/90 text-lg">{featuredPlan.description}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-bold">{featuredPlan.progress}%</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full bg-white rounded-full shadow-lg transition-all duration-1000"
                      style={{ width: `${featuredPlan.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/bible"
                    className="flex-1 px-6 py-4 bg-white hover:bg-stone-50 text-teal-600 font-bold rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                  >
                    📖 Read Today's Chapter
                  </Link>
                  <button
                    type="button"
                    className="px-6 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white/30 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    ✓ Mark Complete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Available Plans */}
          <div
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.3s both" : "none"
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-stone-900">🌟 Discover Plans</h2>
              <select className="px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-stone-200 rounded-xl text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md">
                <option>All Categories</option>
                <option>Worship</option>
                <option>Teachings</option>
                <option>Wisdom</option>
                <option>Epistles</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availablePlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-stone-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                  style={{
                    animation: mounted ? `fadeInUp 0.3s ease-out ${0.4 + index * 0.1}s both` : "none"
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200 mb-2">
                        {plan.category}
                      </span>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{plan.title}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{plan.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-sm text-stone-600">
                    <div className="flex items-center gap-1">
                      <span>⏱</span>
                      <span className="font-semibold">{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span className="font-semibold">{plan.enrolled} enrolled</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(plan.difficulty)} text-white text-xs font-bold rounded-full shadow-md`}>
                      {plan.difficulty}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Plan
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div
            className="mt-8 p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-3xl border-2 border-blue-200 shadow-2xl"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.8s both" : "none"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                💡
              </div>
              <div>
                <p className="text-base text-blue-900 font-bold mb-2">Reading Together</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Join thousands of believers around the world reading God's Word together. Share your insights, pray for one another, and grow in community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
