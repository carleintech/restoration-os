"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Enhanced event data with more details
const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2026-02-08",
    time: "10:00 AM - 11:30 AM",
    location: "Main Sanctuary",
    description: "Join us every Sunday for powerful worship, inspiring messages, and authentic community. Experience the presence of God with us!",
    category: "Worship",
    featured: false,
    spots: "Unlimited",
    color: "from-teal-600 to-blue-600",
    icon: "🙏",
  },
  {
    id: 2,
    title: "Easter Celebration Service",
    date: "2026-04-12",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    description: "Celebrate the resurrection of Jesus Christ! Two services with special music, drama, and a powerful message of hope. Invite your friends and family!",
    category: "Special",
    featured: true,
    spots: "500 Available",
    color: "from-amber-500 to-orange-600",
    icon: "✝️",
  },
  {
    id: 3,
    title: "Wednesday Youth Night",
    date: "2026-02-10",
    time: "6:30 PM - 8:30 PM",
    location: "Youth Center",
    description: "Middle and high school students! Join us for games, worship, small groups, and real conversations. Dinner at 6:00 PM.",
    category: "Youth",
    featured: false,
    spots: "75 Spots",
    color: "from-purple-600 to-pink-600",
    icon: "🎮",
  },
  {
    id: 4,
    title: "Prayer & Worship Night",
    date: "2026-02-14",
    time: "7:00 PM - 9:00 PM",
    location: "Prayer Chapel",
    description: "A special evening dedicated to intimate worship and powerful prayer. Experience God's presence as we seek His face together.",
    category: "Prayer",
    featured: false,
    spots: "Open to All",
    color: "from-indigo-600 to-purple-600",
    icon: "🕊️",
  },
  {
    id: 5,
    title: "Men's Breakfast & Fellowship",
    date: "2026-02-28",
    time: "8:00 AM - 10:00 AM",
    location: "Fellowship Hall",
    description: "Brothers, join us for a hearty breakfast, powerful testimonies, and authentic fellowship. Guest speaker: Coach Mike Thompson.",
    category: "Community",
    featured: false,
    spots: "50 Seats",
    color: "from-stone-700 to-stone-900",
    icon: "👔",
  },
  {
    id: 6,
    title: "Women's Bible Study",
    date: "2026-03-05",
    time: "10:00 AM - 11:30 AM",
    location: "Room 201",
    description: "Join us for an uplifting study on the book of Ruth. Coffee, fellowship, and childcare provided. All women welcome!",
    category: "Community",
    featured: false,
    spots: "40 Seats",
    color: "from-rose-500 to-pink-600",
    icon: "📖",
  },
  {
    id: 7,
    title: "Kids Adventure VBS",
    date: "2026-07-14",
    time: "9:00 AM - 12:00 PM",
    location: "Entire Campus",
    description: "Ages 4-12! Five days of adventure with games, crafts, songs, and Bible stories. Theme: 'Jungle Expedition'. Register now!",
    category: "Kids",
    featured: false,
    spots: "150 Kids",
    color: "from-green-500 to-emerald-600",
    icon: "🎨",
  },
  {
    id: 8,
    title: "Community Serve Day",
    date: "2026-03-20",
    time: "9:00 AM - 3:00 PM",
    location: "Various Sites",
    description: "Let's be the hands and feet of Jesus! Projects include food bank, park cleanup, home repairs. Lunch provided.",
    category: "Service",
    featured: false,
    spots: "100 Volunteers",
    color: "from-cyan-600 to-blue-600",
    icon: "🤝",
  },
  {
    id: 9,
    title: "Marriage Enrichment Retreat",
    date: "2026-05-15",
    time: "Friday 6PM - Sunday 2PM",
    location: "Mountain Retreat Center",
    description: "Invest in your marriage! Weekend getaway with workshops, worship, and quality time together. Includes meals and lodging.",
    category: "Special",
    featured: false,
    spots: "20 Couples",
    color: "from-red-500 to-rose-600",
    icon: "💑",
  },
  {
    id: 10,
    title: "Christmas Eve Candlelight",
    date: "2026-12-24",
    time: "5:00 PM & 7:00 PM",
    location: "Main Sanctuary",
    description: "Celebrate the birth of our Savior with carols, communion, and candlelight. Beautiful music and a message of hope.",
    category: "Special",
    featured: false,
    spots: "Unlimited",
    color: "from-emerald-600 to-teal-700",
    icon: "🕯️",
  },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "calendar">("grid");

  const categories = [
    { id: "all", label: "All Events", icon: "📅", count: events.length },
    { id: "worship", label: "Worship", icon: "🙏", count: events.filter(e => e.category === "Worship").length },
    { id: "community", label: "Community", icon: "👥", count: events.filter(e => e.category === "Community").length },
    { id: "kids", label: "Kids", icon: "🎨", count: events.filter(e => e.category === "Kids").length },
    { id: "youth", label: "Youth", icon: "🎮", count: events.filter(e => e.category === "Youth").length },
    { id: "prayer", label: "Prayer", icon: "🕊️", count: events.filter(e => e.category === "Prayer").length },
    { id: "service", label: "Service", icon: "🤝", count: events.filter(e => e.category === "Service").length },
    { id: "special", label: "Special", icon: "✨", count: events.filter(e => e.category === "Special").length },
  ];

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(event => event.category.toLowerCase() === activeCategory);

  const featuredEvent = events.find(e => e.featured);
  const upcomingEvents = filteredEvents.filter(e => !e.featured).sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
      day: date.getDate(),
      weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
      full: date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    };
  };

  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        title="Join Us for Our Upcoming Events"
        subtitle="Events & Gatherings"
        description="Experience community,  grow in faith, and make lasting connections through our diverse events and gatherings."
        height="medium"
        primaryCta={{ text: "View Calendar", href: "#events" }}
      />

      {/* FEATURED EVENT */}
      {featuredEvent && activeCategory === "all" && (
        <Section spacing="xl" background="white">
          <div className="mb-6 inline-block">
            <span className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg animate-pulse">
              ⭐ Featured Event
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6" style={{ animation: "fadeInUp 0.5s ease-out both" }}>
              <div className="flex items-center gap-3">
                <span className="text-6xl">{featuredEvent.icon}</span>
                <span className={`px-4 py-2 bg-gradient-to-r ${featuredEvent.color} text-white rounded-xl text-sm font-semibold uppercase`}>
                  {featuredEvent.category}
                </span>
              </div>

              <h2 className="text-5xl font-serif font-bold text-stone-900 leading-tight">
                {featuredEvent.title}
              </h2>

              <p className="text-xl text-stone-600 leading-relaxed">
                {featuredEvent.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <svg className="w-6 h-6 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-xs text-stone-500 uppercase font-semibold">Date</div>
                    <div className="text-sm font-medium text-stone-900">{formatDate(featuredEvent.date).full}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <svg className="w-6 h-6 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-xs text-stone-500 uppercase font-semibold">Time</div>
                    <div className="text-sm font-medium text-stone-900">{featuredEvent.time}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <svg className="w-6 h-6 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-xs text-stone-500 uppercase font-semibold">Location</div>
                    <div className="text-sm font-medium text-stone-900">{featuredEvent.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <svg className="w-6 h-6 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <div className="text-xs text-stone-500 uppercase font-semibold">Capacity</div>
                    <div className="text-sm font-medium text-stone-900">{featuredEvent.spots}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="#register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Register Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                <button
                  type="button"
                  aria-label="Add to calendar"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-stone-200 text-stone-700 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Calendar
                </button>
              </div>
            </div>

            {/* Visual */}
            <div
              className={`relative h-[500px] rounded-3xl bg-gradient-to-br ${featuredEvent.color} p-1 shadow-2xl overflow-hidden group`}
              style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-12 text-center">
                <div className="text-8xl mb-8 animate-bounce">{featuredEvent.icon}</div>
                <div className="text-6xl font-serif font-bold mb-4">{formatDate(featuredEvent.date).day}</div>
                <div className="text-3xl font-semibold uppercase tracking-wider">{formatDate(featuredEvent.date).month}</div>
                <div className="mt-8 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-lg font-medium">
                  {formatDate(featuredEvent.date).weekday}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            </div>
          </div>
        </Section>
      )}

      {/* CATEGORY FILTER */}
      <Section spacing="md" background="stone" id="events">
        <div className="sticky top-20 z-30 bg-stone-50/95 backdrop-blur-lg py-6 rounded-2xl border border-stone-200 shadow-lg">
          <div className="flex items-center justify-between mb-4 px-6">
            <h3 className="text-lg font-serif font-semibold text-stone-900">Filter by Category</h3>
            
            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-white rounded-xl p-1 border border-stone-200">
              <button
                type="button"
                aria-label="Grid view"
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-teal-600 text-white"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Calendar view"
                onClick={() => setViewMode("calendar")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "calendar"
                    ? "bg-teal-600 text-white"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 px-6">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-label={`Filter by ${category.label}`}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-stone-700 border border-stone-200 hover:border-teal-500 hover:text-teal-600 hover:scale-105"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? "bg-white/20"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* EVENTS GRID/CALENDAR */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="Upcoming"
          title={activeCategory === "all" ? "All Events" : categories.find(c => c.id === activeCategory)?.label || "Events"}
          description="Join us for these exciting opportunities to connect, grow, and serve together"
        />

        {upcomingEvents.length > 0 ? (
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6 max-w-4xl mx-auto"}>
            {upcomingEvents.map((event, index) => {
              const dateInfo = formatDate(event.date);
              
              if (viewMode === "calendar") {
                // List/Calendar View
                return (
                  <div
                    key={event.id}
                    className="group flex gap-6 p-6 rounded-2xl bg-white border-2 border-stone-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300"
                    style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both` }}
                  >
                    {/* Date Block */}
                    <div className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${event.color} text-white flex flex-col items-center justify-center shadow-lg`}>
                      <div className="text-sm font-semibold uppercase">{dateInfo.month}</div>
                      <div className="text-3xl font-bold">{dateInfo.day}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{event.icon}</span>
                            <span className={`px-3 py-1 bg-gradient-to-r ${event.color} text-white rounded-lg text-xs font-semibold uppercase`}>
                              {event.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-serif font-semibold text-stone-900 group-hover:text-teal-600 transition-colors">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-teal-600 font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {event.spots}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <Link
                        href="#register"
                        className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 text-center"
                      >
                        Register
                      </Link>
                      <button
                        type="button"
                        aria-label="Add to calendar"
                        className="px-4 py-2 border-2 border-stone-200 text-stone-600 rounded-lg text-sm font-semibold hover:border-teal-600 hover:text-teal-600 transition-all duration-300"
                      >
                        + Calendar
                      </button>
                    </div>
                  </div>
                );
              }

              // Grid View
              return (
                <div
                  key={event.id}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
                >
                  {/* Card Background with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-90`}></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  {/* Content */}
                  <div className="relative z-10 p-8 text-white h-full flex flex-col">
                    {/* Date Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl">
                        <div className="text-xs font-semibold uppercase">{dateInfo.month}</div>
                        <div className="text-3xl font-bold">{dateInfo.day}</div>
                      </div>
                      
                      <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                        {event.icon}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="inline-flex self-start px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-wider mb-4">
                      {event.category}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-serif font-bold mb-3 leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-white/90 text-sm mb-6 line-clamp-3 flex-1">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{event.spots}</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href="#register"
                        className="flex-1 text-center px-6 py-3 bg-white text-stone-900 rounded-xl font-semibold hover:bg-stone-100 transition-all duration-300"
                      >
                        Register
                      </Link>
                      <button
                        type="button"
                        aria-label="Share event"
                        className="px-4 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-xl transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📅</div>
            <p className="text-xl text-stone-600">
              No events found in this category.
            </p>
            <p className="text-stone-500 mt-2">
              Check back soon or explore other categories!
            </p>
          </div>
        )}
      </Section>

      {/* QUICK ACTIONS */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="Stay Connected"
          title="Never Miss an Event"
          description="Get notified about upcoming events and add them directly to your calendar"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="group p-8 rounded-3xl bg-white border-2 border-stone-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300"
            style={{ animation: "fadeInUp 0.5s ease-out both" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-3">Event Reminders</h3>
            <p className="text-stone-600 mb-6">Get notified 24 hours before events you've registered for.</p>
            <button
              type="button"
              aria-label="Enable notifications"
              className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2 group/btn"
            >
              Enable Notifications
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          <div
            className="group p-8 rounded-3xl bg-white border-2 border-stone-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300"
            style={{ animation: "fadeInUp 0.5s ease-out 0.1s both" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-3">Export Calendar</h3>
            <p className="text-stone-600 mb-6">Download our events calendar to sync with Google, Apple, or Outlook.</p>
            <button
              type="button"
              aria-label="Download calendar"
              className="text-amber-600 font-semibold hover:text-amber-700 flex items-center gap-2 group/btn"
            >
              Download .ics File
              <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </button>
          </div>

          <div
            className="group p-8 rounded-3xl bg-white border-2 border-stone-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300"
            style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-stone-900 mb-3">Share Events</h3>
            <p className="text-stone-600 mb-6">Invite friends and family to join you at our upcoming events.</p>
            <button
              type="button"
              aria-label="Share on social media"
              className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2 group/btn"
            >
              Share on Social Media
              <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
          </div>
        </div>
      </Section>

      {/* NEWSLETTER CTA */}
      <Section spacing="xl" background="white" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 opacity-95"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 -translate-x-40"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
          <div className="text-6xl mb-6 animate-bounce">📬</div>
          
          <h2 className="text-5xl font-serif font-bold mb-6">
            Stay in the Loop
          </h2>

          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Subscribe to our event newsletter and get weekly updates about upcoming services, special events, and community gatherings delivered straight to your inbox.
          </p>

          <form id="register" className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-stone-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold text-lg hover:bg-stone-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Subscribe Now
            </button>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No spam, ever
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Unsubscribe anytime
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
