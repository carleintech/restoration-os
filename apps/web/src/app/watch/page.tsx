"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SermonCard } from "@/components/ui/SermonCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { cn } from "@/lib/cn";

// Mock sermon data
const sermonSeries = [
  {
    id: 1,
    title: "Faith Over Fear",
    description: "A powerful series exploring how to overcome anxiety and live in God's peace",
    thumbnail: "/hero/hero.png",
    episodeCount: 4,
    current: true,
  },
  {
    id: 2,
    title: "The Gospel of John",
    description: "Verse-by-verse study through the Gospel of John",
    thumbnail: "/hero/hero.png",
    episodeCount: 21,
    current: false,
  },
  {
    id: 3,
    title: "Kingdom Living",
    description: "Practical teachings on living as citizens of God's kingdom",
    thumbnail: "/hero/hero.png",
    episodeCount: 5,
    current: false,
  },
];

const recentSermons = [
  {
    title: "Faith in the Storm",
    speaker: "Pastor Ricardo Francois",
    date: "2026-02-07",
    series: "Faith Over Fear",
    scripture: "Matthew 14:22-33",
    duration: "42:15",
    thumbnail: "/hero/hero.png",
  },
  {
    title: "Perfect Love Casts Out Fear",
    speaker: "Pastor Ricardo Francois",
    date: "2026-01-31",
    series: "Faith Over Fear",
    scripture: "1 John 4:18",
    duration: "38:22",
    thumbnail: "/hero/hero.png",
  },
  {
    title: "Anxious for Nothing",
    speaker: "Pastor Kendra Francois",
    date: "2026-01-24",
    series: "Faith Over Fear",
    scripture: "Philippians 4:6-7",
    duration: "45:10",
    thumbnail: "/hero/hero.png",
  },
  {
    title: "Trust in the Lord",
    speaker: "Pastor Ricardo Francois",
    date: "2026-01-17",
    series: "Faith Over Fear",
    scripture: "Proverbs 3:5-6",
    duration: "40:55",
    thumbnail: "/hero/hero.png",
  },
  {
    title: "The Word Became Flesh",
    speaker: "Pastor Ricardo Francois",
    date: "2026-01-10",
    series: "The Gospel of John",
    scripture: "John 1:14",
    duration: "43:30",
    thumbnail: "/hero/hero.png",
  },
  {
    title: "In the Beginning Was the Word",
    speaker: "Pastor Ricardo Francois",
    date: "2026-01-03",
    series: "The Gospel of John",
    scripture: "John 1:1-5",
    duration: "41:18",
    thumbnail: "/hero/hero.png",
  },
];

export default function Watch() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Recent", "Series", "Topics"];

  return (
    <>
      <PageHero
        title="Watch & Listen"
        subtitle="Experience Worship"
        description="Join us online for powerful worship, inspiring messages, and authentic community from anywhere in the world."
        height="medium"
        primaryCta={{ text: "Watch Latest", href: "#latest-sermon" }}
        secondaryCta={{ text: "View Series", href: "#sermon-series" }}
      />

      {/* Live Stream Section */}
      <Section spacing="lg" background="stone">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500 text-white rounded-full mb-6 animate-pulse-slow">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            <span className="font-bold uppercase tracking-wide">Join us LIVE</span>
          </div>

          <h2 className="text-h2 font-serif mb-4 text-stone-900">
            Sunday Service - 10:00 AM EST
          </h2>

          <p className="text-body-lg text-stone-600 mb-8">
            Next service starts in: <span className="font-bold text-teal-600">2 days, 14 hours</span>
          </p>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-stone-900">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-xl font-medium">YouTube Live Stream</p>
              <p className="text-white/70 mt-2">Stream will begin shortly before service time</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Latest Sermon */}
      <Section spacing="lg" background="white" id="latest-sermon">
        <SectionHeader
          badge="Most Recent"
          title="Latest Message"
          description="Catch up on our most recent Sunday message"
        />

        <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src={recentSermons[0].thumbnail}
                alt={recentSermons[0].title}
                className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 smooth-transition">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 smooth-transition">
                  <svg className="w-10 h-10 text-teal-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4">
                {recentSermons[0].series}
              </div>

              <h3 className="text-h2 font-serif mb-4 text-stone-900">
                {recentSermons[0].title}
              </h3>

              <div className="flex flex-col gap-2 text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{recentSermons[0].speaker}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(recentSermons[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="font-medium text-teal-600">{recentSermons[0].scripture}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{recentSermons[0].duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Watch Now</Button>
                <Button variant="outline">Download Audio</Button>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Sermon Series */}
      <Section spacing="lg" background="stone" id="sermon-series">
        <SectionHeader
          badge="Teaching Series"
          title="Sermon Series"
          description="Explore our current and past teaching series"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {sermonSeries.map((series, index) => (
            <Card
              key={series.id}
              variant="elevated"
              padding="sm"
              hover
              className="overflow-hidden"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative aspect-video -m-4 mb-4">
                <img
                  src={series.thumbnail}
                  alt={series.title}
                  className="w-full h-full object-cover"
                />
                {series.current && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-teal-600 text-white rounded-full text-xs font-bold">
                    CURRENT
                  </div>
                )}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/80 text-white rounded-full text-xs font-medium">
                  {series.episodeCount} Messages
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  {series.title}
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  {series.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Series
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Recent Sermons Archive */}
      <Section spacing="lg" background="white">
        <SectionHeader
          title="Recent Messages"
          description="Browse our library of past messages"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentSermons.slice(1).map((sermon, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <SermonCard {...sermon} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Messages
          </Button>
        </div>
      </Section>

      {/* Podcast Integration */}
      <Section spacing="xl" background="gradient-primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-h2 font-serif mb-4">
            Listen on the Go
          </h2>

          <p className="text-body-lg mb-8 text-white/90">
            Subscribe to our podcast and never miss a message. Available on all major podcast platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="secondary" size="lg" className="bg-white text-teal-600 hover:bg-stone-50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 3v6.268l5.5 3.268.75-1.299L12 10.732V5h-1z"/>
              </svg>
              Apple Podcasts
            </Button>

            <Button variant="secondary" size="lg" className="bg-white text-teal-600 hover:bg-stone-50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </Button>

            <Button variant="secondary" size="lg" className="bg-white text-teal-600 hover:bg-stone-50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </Button>
          </div>

          <p className="text-sm text-white/80">
            Available wherever you get your podcasts
          </p>
        </div>
      </Section>
    </>
  );
}
