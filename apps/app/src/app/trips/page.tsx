"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";

// Sample trips data
const upcomingTrips = [
  {
    id: "1",
    title: "Guatemala Mission Trip",
    location: "Antigua, Guatemala",
    date: "July 15-22, 2024",
    duration: "7 days",
    cost: "$1,800",
    spotsLeft: 8,
    totalSpots: 15,
    description: "Join us in building homes and serving communities in the beautiful highlands of Guatemala.",
    imageUrl: "/trips/guatemala.jpg",
    category: "Mission",
    difficulty: "Moderate",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Israel Holy Land Tour",
    location: "Jerusalem, Israel",
    date: "September 10-20, 2024",
    duration: "10 days",
    cost: "$3,500",
    spotsLeft: 12,
    totalSpots: 30,
    description: "Walk where Jesus walked. Experience the Bible coming to life on this transformative journey.",
    imageUrl: "/trips/israel.jpg",
    category: "Pilgrimage",
    difficulty: "Easy",
  },
  {
    id: "3",
    title: "Mexico Orphanage Outreach",
    location: "Tijuana, Mexico",
    date: "October 5-8, 2024",
    duration: "3 days",
    cost: "$600",
    spotsLeft: 5,
    totalSpots: 20,
    description: "Minister to orphaned children through VBS, games, and showing God's love in action.",
    imageUrl: "/trips/mexico.jpg",
    category: "Mission",
    difficulty: "Easy",
  },
];

const pastTrips = [
  {
    id: "p1",
    title: "Haiti Medical Mission",
    location: "Port-au-Prince, Haiti",
    date: "March 2024",
    participants: 18,
    impact: "Served 500+ patients",
  },
  {
    id: "p2",
    title: "Costa Rica Adventure Retreat",
    location: "San José, Costa Rica",
    date: "January 2024",
    participants: 25,
    impact: "Led 3 youth programs",
  },
  {
    id: "p3",
    title: "Peru Mountain Mission",
    location: "Cusco, Peru",
    date: "November 2023",
    participants: 12,
    impact: "Built 2 schools",
  },
];

export default function TripsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredTrip = upcomingTrips.find(trip => trip.isFeatured);
  const otherTrips = upcomingTrips.filter(trip => !trip.isFeatured);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "from-green-500 to-emerald-500";
      case "Moderate":
        return "from-amber-500 to-orange-500";
      case "Challenging":
        return "from-red-500 to-pink-500";
      default:
        return "from-stone-500 to-stone-600";
    }
  };

  return (
    <AppShell>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto px-4 pb-24">
          {/* Premium Header with Stats */}
          <div
            className="mb-8 p-8 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-600 rounded-3xl text-white shadow-2xl relative overflow-hidden"
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.1s both" : "none"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md border-2 border-white/30 mb-4 shadow-xl">
                <span className="text-3xl">✈️</span>
              </div>

              <h1 className="text-4xl font-bold mb-2">Mission Trips</h1>
              <p className="text-white/90 text-lg mb-6">Go and make disciples of all nations</p>

              {/* Trip Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">{upcomingTrips.length}</div>
                  <div className="text-xs text-white/80">Upcoming Trips</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">65</div>
                  <div className="text-xs text-white/80">Total Spots</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-xs text-white/80">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Trip */}
          {featuredTrip && (
            <div
              className="mb-8"
              style={{
                animation: mounted ? "fadeInUp 0.5s ease-out 0.2s both" : "none"
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                  ⭐
                </div>
                <h2 className="text-2xl font-bold text-stone-900">Featured Trip</h2>
              </div>

              <div className="p-8 bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-600 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-3 border border-white/30">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        {featuredTrip.category}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{featuredTrip.title}</h3>
                      <div className="flex items-center gap-3 text-white/90 mb-4">
                        <span className="flex items-center gap-1">
                          <span>📍</span>
                          <span>{featuredTrip.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span>📅</span>
                          <span>{featuredTrip.date}</span>
                        </span>
                      </div>
                      <p className="text-white/90 text-lg mb-6">{featuredTrip.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md border-4 border-white/30 flex flex-col items-center justify-center shadow-xl">
                        <span className="text-3xl font-bold">{featuredTrip.spotsLeft}</span>
                        <span className="text-xs">spots left</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-xs text-white/70 mb-1">Duration</div>
                      <div className="font-bold">{featuredTrip.duration}</div>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-xs text-white/70 mb-1">Cost</div>
                      <div className="font-bold">{featuredTrip.cost}</div>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="text-xs text-white/70 mb-1">Difficulty</div>
                      <div className="font-bold">{featuredTrip.difficulty}</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="flex-1 px-6 py-4 bg-white hover:bg-stone-50 text-indigo-600 font-bold rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                    >
                      ✈️ Register Now
                    </button>
                    <button
                      type="button"
                      className="px-6 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white/30 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming Trips */}
          <div
            style={{
              animation: mounted ? "fadeInUp 0.5s ease-out 0.3s both" : "none"
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-2xl shadow-lg">
                  🌍
                </div>
                <h2 className="text-2xl font-bold text-stone-900">Upcoming Opportunities</h2>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border-2 border-stone-200 rounded-xl text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
              >
                <option>All</option>
                <option>Mission</option>
                <option>Pilgrimage</option>
                <option>Retreat</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherTrips.map((trip, index) => (
                <div
                  key={trip.id}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-stone-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                  style={{
                    animation: mounted ? `fadeInUp 0.3s ease-out ${0.4 + index * 0.1}s both` : "none"
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200 mb-2">
                        {trip.category}
                      </span>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{trip.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-stone-600 mb-3">
                        <span className="flex items-center gap-1">
                          <span>📍</span>
                          <span>{trip.location}</span>
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed mb-4">{trip.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl">
                      <div className="text-xs text-stone-600 mb-1">📅 Date</div>
                      <div className="text-sm font-bold text-stone-900">{trip.date}</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl">
                      <div className="text-xs text-stone-600 mb-1">💰 Cost</div>
                      <div className="text-sm font-bold text-stone-900">{trip.cost}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(trip.difficulty)} text-white text-xs font-bold rounded-full shadow-md`}>
                      {trip.difficulty}
                    </span>
                    <span className="text-sm text-stone-600">
                      <span className="font-bold text-blue-600">{trip.spotsLeft}</span> of {trip.totalSpots} spots left
                    </span>
                  </div>

                  <button
                    type="button"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 hover:from-blue-600 hover:via-indigo-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Past Trips */}
          <div
            className="mt-8"
            style={{
              animation: mounted ? `fadeInUp 0.5s ease-out ${0.5 + otherTrips.length * 0.1}s both` : "none"
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center text-2xl shadow-lg">
                📸
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Past Trips</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pastTrips.map((trip, index) => (
                <div
                  key={trip.id}
                  className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-stone-200/50 hover:shadow-xl transition-all duration-300"
                  style={{
                    animation: mounted ? `fadeInUp 0.3s ease-out ${0.6 + otherTrips.length * 0.1 + index * 0.1}s both` : "none"
                  }}
                >
                  <h4 className="text-lg font-bold text-stone-900 mb-2">{trip.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-stone-600 mb-3">
                    <span>📍</span>
                    <span>{trip.location}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600">Date:</span>
                      <span className="font-semibold text-stone-900">{trip.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600">Team:</span>
                      <span className="font-semibold text-stone-900">{trip.participants} people</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200 mt-3">
                      <div className="text-xs text-teal-700 font-bold">{trip.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div
            className="mt-8 p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-3xl border-2 border-blue-200 shadow-2xl"
            style={{
              animation: mounted ? `fadeInUp 0.5s ease-out ${0.9 + otherTrips.length * 0.1 + pastTrips.length * 0.1}s both` : "none"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                💡
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">New to Mission Trips?</h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-4">
                  We'd love to help you take your first step! Mission trips are open to all ages and experience levels.
                  Financial assistance is available for those who need it.
                </p>
                <button
                  type="button"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Missions Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
