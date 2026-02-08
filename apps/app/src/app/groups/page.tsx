"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";

const myGroups = [
  {
    id: 1,
    name: "Young Adults Bible Study",
    type: "Small Group",
    meeting: "Wednesdays 7:00 PM",
    leader: "Sarah Johnson",
    image: "👥",
    color: "from-teal-500 to-teal-600",
  },
  {
    id: 2,
    name: "Men's Prayer Group",
    type: "Prayer Group",
    meeting: "Saturdays 8:00 AM",
    leader: "Michael Davis",
    image: "🙏",
    color: "from-amber-500 to-amber-600",
  },
];

const availableGroups = [
  {
    id: 3,
    name: "Women's Fellowship",
    type: "Fellowship",
    meeting: "Thursdays 6:30 PM",
    leader: "Jennifer Smith",
    status: "Open",
    image: "☕",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    name: "Worship Team",
    type: "Ministry",
    meeting: "Sundays 8:00 AM",
    leader: "David Thompson",
    status: "Open",
    image: "🎵",
    color: "from-green-500 to-green-600",
  },
  {
    id: 5,
    name: "Youth Ministry",
    type: "Ministry",
    meeting: "Fridays 7:00 PM",
    leader: "Emily Rodriguez",
    status: "Open",
    image: "🌟",
    color: "from-blue-500 to-blue-600",
  },
];

export default function GroupsPage() {
  const [filter, setFilter] = useState<"all" | "small-group" | "ministry" | "fellowship">("all");

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto pb-24">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Groups</h1>
          <p className="text-stone-600">Where do you belong right now?</p>
        </div>

        {/* 👥 YOUR GROUPS */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Your Groups</h2>
          
          <div className="space-y-3">
            {myGroups.map((group) => (
              <Link
                key={group.id}
                href={`/groups/${group.id}`}
                className="block rounded-2xl bg-gradient-to-br p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                className={`block rounded-2xl bg-gradient-to-br ${group.color} p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      {group.type}
                    </div>
                    <h3 className="text-xl font-bold">{group.name}</h3>
                  </div>
                  <div className="text-4xl">{group.image}</div>
                </div>
                
                <div className="space-y-1 text-sm text-white/90">
                  <p>👤 Led by {group.leader}</p>
                  <p>📅 {group.meeting}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 🔍 DISCOVER GROUPS */}
        <div>
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Discover Groups</h2>
          
          {/* Filters */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {["all", "small-group", "ministry", "fellowship"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as typeof filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === f
                    ? "bg-teal-500 text-white"
                    : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
                }`}
              >
                {f === "all" ? "All Groups" : f.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
              </button>
            ))}
          </div>

          {/* Available Groups */}
          <div className="space-y-3">
            {availableGroups.map((group) => (
              <div
                key={group.id}
                className="p-4 bg-white rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                    {group.image}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900">{group.name}</h3>
                        <p className="text-sm text-stone-600">{group.type}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        {group.status}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm text-stone-600 mb-3">
                      <p>👤 {group.leader}</p>
                      <p>📅 {group.meeting}</p>
                    </div>

                    <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors">
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-6 bg-stone-50 rounded-2xl border border-stone-200">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Need help finding the right group?</h3>
              <p className="text-sm text-stone-600 mb-3">
                We'd love to help you connect with the perfect community for your journey.
              </p>
              <Link 
                href="/contact"
                className="inline-block px-4 py-2 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-sm font-medium rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
