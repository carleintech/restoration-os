"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const stats = [
    { number: "2015", label: "Year Founded", icon: "📅" },
    { number: "500+", label: "Church Family", icon: "👨‍👩‍👧‍👦" },
    { number: "25+", label: "Ministries", icon: "🎯" },
    { number: "10+", label: "Years Serving", icon: "⭐" },
  ];

  const values = [
    {
      title: "Love God & Love People",
      subtitle: "Heart of Everything",
      description: "Love is our foundation. We love God wholeheartedly and extend His unconditional love to everyone we encounter, creating a welcoming space for all.",
      icon: "❤️",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      stats: ["First Priority", "Every Person Matters"],
    },
    {
      title: "Spirit-Filled Worship",
      subtitle: "Authentic Encounter",
      description: "We pursue God's presence through powerful worship, expecting the Holy Spirit to move, transform hearts, and bring heaven to earth in every gathering.",
      icon: "🔥",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      stats: ["Every Sunday", "Life-Changing"],
    },
    {
      title: "Biblical Teaching",
      subtitle: "Truth & Relevance",
      description: "God's Word guides everything we do. We teach Scripture with clarity, depth, and practical application for everyday life in today's world.",
      icon: "📖",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      stats: ["Scripture-Based", "Life Application"],
    },
    {
      title: "Authentic Community",
      subtitle: "Real Relationships",
      description: "Life change happens in community. We create spaces where genuine relationships flourish, people belong, and everyone finds their place to grow.",
      icon: "🤝",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      stats: ["Small Groups", "Deep Connections"],
    },
    {
      title: "Kingdom Impact",
      subtitle: "Local & Global",
      description: "We're called to make a difference. Through serving locally and partnering globally, we bring hope, help, and the gospel to those in need.",
      icon: "🌍",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      stats: ["Community Outreach", "Global Missions"],
    },
    {
      title: "Generational Legacy",
      subtitle: "Families & Future",
      description: "We invest in the next generation, empowering children, youth, and families to know Jesus and live out their faith with passion and purpose.",
      icon: "🌱",
      gradient: "from-lime-500 via-green-500 to-emerald-500",
      stats: ["Youth Ministry", "Kids Programs"],
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Church Founded",
      description: "God birthed a vision for Restoration Church to serve the Landstown community with authentic worship and biblical teaching.",
      icon: "🏛️",
    },
    {
      year: "2017",
      title: "First Building",
      description: "Moved into our current facility at 3220 Monet Drive, providing a permanent home for worship and ministry.",
      icon: "🏠",
    },
    {
      year: "2019",
      title: "Ministry Expansion",
      description: "Launched multiple ministries including youth, children's programs, and small groups to serve diverse needs.",
      icon: "🚀",
    },
    {
      year: "2021",
      title: "Community Impact",
      description: "Began serving our community through food drives, outreach programs, and partnership with local organizations.",
      icon: "💝",
    },
    {
      year: "2024",
      title: "Digital Growth",
      description: "Expanded our reach through online services and digital resources, touching lives beyond our local community.",
      icon: "🌐",
    },
    {
      year: "2026",
      title: "Vision Forward",
      description: "Continuing to grow, impact lives, and advance God's kingdom in Virginia Beach and beyond.",
      icon: "✨",
    },
  ];

  return (
    <>
      {/* HERO */}
      <PageHero
        title="Our Story, Your Journey"
        subtitle="About Restoration Church"
        description="A Spirit-led community where lives are transformed, purpose is discovered, and everyone belongs."
        height="medium"
        primaryCta={{ text: "Plan Your Visit", href: "/visit" }}
        secondaryCta={{ text: "Meet Our Team", href: "/leaders" }}
      />

      {/* STATS SECTION */}
      <Section spacing="md" background="white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-blue-50 p-8 text-center border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-200/30 rounded-full -translate-y-12 translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold font-serif text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-stone-700 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* OUR STORY */}
      <Section spacing="xl" background="stone">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8" style={{ animation: "fadeInUp 0.5s ease-out both" }}>
            <div>
              <span className="inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Our Story
              </span>
              <h2 className="text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                A Church Built on <span className="text-teal-600">Faith, Hope, and Love</span>
              </h2>
            </div>

            <p className="text-xl text-stone-700 leading-relaxed">
              Restoration Church was born from a simple yet powerful vision: to create a place where <strong>everyone belongs</strong>, where the lost find home, the broken find healing, and the searching find purpose.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
              Since 2015, we've been faithfully serving the Landstown community in Virginia Beach. What started as a small gathering has grown into a vibrant family of believers—united by our love for God and our commitment to making His love known.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
              We're not just a Sunday morning church. We're a community that walks together through every season of life—celebrating victories, supporting through challenges, and constantly pointing each other toward Jesus.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/ministries"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 hover:shadow-xl transition-all duration-300"
              >
                Explore Our Ministries
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/leaders"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-stone-200 text-stone-700 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-all duration-300"
              >
                Meet Our Leaders
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative" style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[600px]">
                <Image
                  src="/hero/community.png"
                  alt="Restoration Church community"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-2xl font-serif italic mb-2">
                    "A place where lives are transformed and purpose is discovered"
                  </p>
                  <p className="text-sm uppercase tracking-wider text-white/80">Restoration Church Family</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-4xl shadow-2xl animate-pulse">
              ✝️
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-5xl shadow-2xl">
              ❤️
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION & VISION - Interactive Tabs */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="Our Purpose"
          title="Mission & Vision"
          description="The driving force behind everything we do as a church community"
        />

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("mission")}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "mission"
                ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-2xl scale-105"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            ⚡ Our Mission
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("vision")}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              activeTab === "vision"
                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xl scale-105"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            👁️ Our Vision
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "mission" ? (
            <div
              className="relative rounded-3xl bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 p-12 border-2 border-teal-200 shadow-2xl"
              style={{ animation: "fadeInUp 0.3s ease-out both" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-200/30 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative z-10">
                <div className="text-7xl mb-8 text-center">⚡</div>
                <h3 className="text-4xl font-serif font-bold text-center text-stone-900 mb-8">
                  Our Mission
                </h3>
                <p className="text-2xl text-center text-stone-700 leading-relaxed mb-8">
                  To <strong className="text-teal-600">glorify God</strong> by making disciples, fostering spiritual growth, and serving our community with <strong className="text-teal-600">love, humility, and unwavering faith in Jesus Christ</strong>.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-teal-200">
                    <div className="text-4xl mb-3">🙏</div>
                    <h4 className="font-semibold text-stone-900 mb-2">Make Disciples</h4>
                    <p className="text-sm text-stone-600">Leading people to Christ</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-teal-200">
                    <div className="text-4xl mb-3">📈</div>
                    <h4 className="font-semibold text-stone-900 mb-2">Foster Growth</h4>
                    <p className="text-sm text-stone-600">Nurturing spiritual maturity</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-teal-200">
                    <div className="text-4xl mb-3">❤️</div>
                    <h4 className="font-semibold text-stone-900 mb-2">Serve with Love</h4>
                    <p className="text-sm text-stone-600">Impacting our community</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="relative rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-12 border-2 border-amber-200 shadow-2xl"
              style={{ animation: "fadeInUp 0.3s ease-out both" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/30 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-200/30 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative z-10">
                <div className="text-7xl mb-8 text-center">👁️</div>
                <h3 className="text-4xl font-serif font-bold text-center text-stone-900 mb-8">
                  Our Vision
                </h3>
                <p className="text-2xl text-center text-stone-700 leading-relaxed mb-8">
                  To be a <strong className="text-amber-600">Spirit-led church</strong> that reflects the love of Christ, strengthens families, transforms lives, and <strong className="text-amber-600">impacts our city and beyond for God's kingdom</strong>.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-amber-200">
                    <div className="text-4xl mb-3">🏠</div>
                    <h4 className="font-semibold text-stone-900 mb-2">Strengthen Families</h4>
                    <p className="text-sm text-stone-600">Building strong homes</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-amber-200">
                    <div className="text-4xl mb-3">✨</div>
                    <h4 className="font-semibold text-stone-900 mb-2">Transform Lives</h4>
                    <p className="text-sm text-stone-600">Bringing lasting change</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-amber-200">
                    <div className="text-4xl mb-3">🌍</div>
                    <h4 className="font-semibold text-stone-900 mb-2">Kingdom Impact</h4>
                    <p className="text-sm text-stone-600">Reaching our world</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* CORE VALUES - Enhanced Cards */}
      <Section spacing="xl" background="stone">
        <SectionHeader
          badge="What We Value"
          title="Our Core Values"
          description="These foundational principles guide every decision, ministry, and interaction at Restoration Church"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-90`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {value.icon}
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold mb-2">{value.title}</h3>
                  <p className="text-sm uppercase tracking-wider text-white/80 font-semibold">
                    {value.subtitle}
                  </p>
                </div>

                <p className="text-white/90 leading-relaxed mb-6 flex-1">
                  {value.description}
                </p>

                <div className="flex gap-3 pt-4 border-t border-white/20">
                  {value.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-semibold"
                    >
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section spacing="xl" background="white">
        <SectionHeader
          badge="Our Journey"
          title="The Restoration Story"
          description="Milestones and moments that shaped who we are today"
        />

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 via-blue-600 to-purple-600 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="inline-block">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100 border-2 border-stone-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{item.icon}</span>
                          <span className="text-3xl font-bold font-serif text-teal-600">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-serif font-semibold text-stone-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-teal-600 rounded-full shadow-lg z-10"></div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* LEADERSHIP TEASER */}
      <Section spacing="lg" background="stone">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative" style={{ animation: "fadeInUp 0.5s ease-out both" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                <div className="text-center text-stone-500">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-2xl font-serif font-semibold">Our Leadership Team</p>
                  <p className="text-sm mt-2">Passionate • Dedicated • Spirit-Led</p>
                </div>
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl">👨‍👩‍👧‍👦</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6" style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}>
            <div>
              <span className="inline-block px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Leadership
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Led by Faith, <span className="text-teal-600">Driven by Purpose</span>
              </h2>
            </div>

            <p className="text-xl text-stone-700 leading-relaxed">
              Our leadership team is passionate about <strong>God's Word</strong>, committed to <strong>prayer</strong>, and devoted to shepherding people with integrity, compassion, and genuine care.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
              Each leader brings unique gifts, diverse experiences, and a heart for service—ensuring that every person in our congregation receives the spiritual guidance and support they need to grow in their relationship with Christ.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-3xl">🙏</div>
                <div>
                  <div className="font-semibold text-stone-900">Prayer-Focused</div>
                  <div className="text-sm text-stone-600">Seeking God first</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-3xl">📖</div>
                <div>
                  <div className="font-semibold text-stone-900">Bible-Centered</div>
                  <div className="text-sm text-stone-600">Word-driven ministry</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-3xl">❤️</div>
                <div>
                  <div className="font-semibold text-stone-900">People-Oriented</div>
                  <div className="text-sm text-stone-600">Shepherding hearts</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-3xl">🔥</div>
                <div>
                  <div className="font-semibold text-stone-900">Spirit-Led</div>
                  <div className="text-sm text-stone-600">Following God's lead</div>
                </div>
              </div>
            </div>

            <Link
              href="/leaders"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 mt-6"
            >
              Meet Our Leadership Team
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section spacing="xl" background="white" className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 opacity-95"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 -translate-x-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <div className="text-7xl mb-8 animate-bounce">👋</div>
          
          <h2 className="text-5xl font-serif font-bold mb-6">
            You Belong Here
          </h2>

          <p className="text-2xl mb-12 text-white/90 leading-relaxed">
            Whether you're exploring faith for the first time, seeking a church home, or looking to grow deeper in your relationship with Jesus—<strong>there's a place for you at Restoration Church</strong>.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link
              href="/visit"
              className="px-10 py-5 bg-white text-teal-600 rounded-2xl font-bold text-lg hover:bg-stone-50 hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              Plan Your First Visit
            </Link>
            <Link
              href="/events"
              className="px-10 py-5 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              See What's Happening
            </Link>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-8 text-lg flex-wrap">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sundays at 10:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>3220 Monet Drive, Virginia Beach</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
