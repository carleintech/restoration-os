"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function MinistriesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const ministries = [
    {
      name: "Children's Ministry",
      category: "family",
      tagline: "Building a Foundation of Faith",
      description: "Our Children's Ministry provides a safe, fun, and engaging environment where kids can learn about Jesus through age-appropriate lessons, creative activities, and meaningful relationships. We're committed to partnering with parents to raise the next generation of Christ-followers.",
      ageGroup: "Birth - 5th Grade",
      meetingTime: "Sundays during service",
      leader: "Kellie Cass",
      image: "/hero/community.png",
      color: "from-blue-500 to-cyan-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: "Youth Ministry",
      category: "family",
      tagline: "Raising Up the Next Generation",
      description: "Our Youth Ministry is dedicated to helping middle and high school students develop authentic relationships with Jesus and each other. Through dynamic worship, relevant teaching, and fun activities, we create a space where teens can belong, grow, and discover God's purpose for their lives.",
      ageGroup: "6th - 12th Grade",
      meetingTime: "Wednesdays 7:00 PM",
      leader: "Julia & Josh Secrest",
      image: "/hero/community.png",
      color: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: "Worship Ministry",
      category: "spiritual",
      tagline: "Creating an Atmosphere for His Presence",
      description: "Our Worship Ministry is passionate about creating an environment where people can encounter God's presence through Spirit-filled worship. Whether you're a musician, vocalist, or tech team member, there's a place for you to use your gifts to glorify God and minister to His people.",
      ageGroup: "All Ages",
      meetingTime: "Sundays & Practice Times",
      leader: "Worship Team",
      image: "/hero/hero.png",
      color: "from-amber-500 to-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      name: "Small Groups",
      category: "community",
      tagline: "Life Change Happens in Community",
      description: "Small Groups are the heartbeat of our church community. These intimate gatherings provide a space to build authentic relationships, study God's Word together, pray for one another, and support each other through life's journey. Join a group and experience the power of biblical community.",
      ageGroup: "Adults",
      meetingTime: "Various times & locations",
      leader: "Lari & Sam Howard",
      image: "/hero/community.png",
      color: "from-teal-500 to-green-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: "Outreach & Missions",
      category: "service",
      tagline: "Serving Our Community & Beyond",
      description: "We believe the church exists not just for ourselves but to serve others. Our Outreach and Missions ministry connects our congregation with local and global opportunities to share God's love through practical service, community partnerships, and mission trips that make a tangible difference.",
      ageGroup: "All Ages",
      meetingTime: "Various service projects",
      leader: "Outreach Team",
      image: "/hero/hero.png",
      color: "from-red-500 to-rose-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: "Men's Ministry",
      category: "community",
      tagline: "Building Men of God",
      description: "Our Men's Ministry provides opportunities for men to grow spiritually, build brotherhood, and become the leaders God has called them to be. Through Bible studies, accountability groups, and fellowship events, we challenge men to live out their faith authentically in every area of life.",
      ageGroup: "Men 18+",
      meetingTime: "Monthly gatherings",
      leader: "Men's Leadership Team",
      image: "/hero/church.png",
      color: "from-slate-600 to-slate-800",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "Women's Ministry",
      category: "community",
      tagline: "Empowering Women of Faith",
      description: "Women's Ministry creates a welcoming space for women to connect, grow, and encourage one another in their faith journey. Through Bible studies, prayer groups, special events, and mentorship opportunities, we help women discover their God-given purpose and live it out with confidence.",
      ageGroup: "Women 18+",
      meetingTime: "Monthly gatherings",
      leader: "Women's Leadership Team",
      image: "/hero/community.png",
      color: "from-pink-500 to-purple-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: "Prayer Ministry",
      category: "spiritual",
      tagline: "The Power of United Prayer",
      description: "Prayer is the foundation of everything we do. Our Prayer Ministry provides opportunities for corporate prayer, intercessory prayer teams, and prayer support for our congregation. We believe in the power of prayer to transform lives, families, and our community.",
      ageGroup: "All Ages",
      meetingTime: "Ongoing & Special Events",
      leader: "Prayer Team",
      image: "/hero/church.png",
      color: "from-indigo-500 to-blue-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const categories = [
    { id: "all", label: "All Ministries", icon: "🏛️" },
    { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
    { id: "spiritual", label: "Spiritual Growth", icon: "✝️" },
    { id: "community", label: "Community", icon: "🤝" },
    { id: "service", label: "Service", icon: "💖" },
  ];

  const filteredMinistries =
    activeCategory === "all"
      ? ministries
      : ministries.filter((m) => m.category === activeCategory);

  return (
    <>
      <PageHero
        title="Find Your Place to Grow & Serve"
        subtitle="Our Ministries"
        description="Every person has gifts, passions, and a purpose. Discover where you belong in our church family and how you can make a difference."
        height="medium"
        primaryCta={{ text: "Explore Ministries", href: "#ministries" }}
        secondaryCta={{ text: "Volunteer", href: "#volunteer" }}
      />

      {/* MINISTRY STATS */}
      <Section spacing="md" background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🎯", number: "8+", label: "Active Ministries" },
            { icon: "👥", number: "200+", label: "Volunteers Serving" },
            { icon: "❤️", number: "1000+", label: "Lives Impacted" },
            { icon: "🌟", number: "∞", label: "Opportunities" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-50 to-blue-50 p-8 text-center border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
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

      {/* MINISTRY VALUES */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="Our Mission"
          title="Why Ministries Matter"
          description="Every ministry exists to help you grow in your faith and make a difference in the world"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🌱",
              title: "Grow Together",
              description: "Deepen your relationship with God and others through authentic community and biblical teaching",
              color: "from-green-500 to-emerald-600",
            },
            {
              icon: "🎁",
              title: "Use Your Gifts",
              description: "Discover and develop your God-given talents by serving in areas that match your passions",
              color: "from-purple-500 to-pink-600",
            },
            {
              icon: "💡",
              title: "Make an Impact",
              description: "Change lives and advance God's kingdom through practical service and genuine love",
              color: "from-amber-500 to-orange-600",
            },
          ].map((value, index) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-90`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>

                <p className="text-white/90 leading-relaxed flex-1">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CATEGORY FILTERS */}
      <Section spacing="md" background="white">
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-lg py-6 rounded-2xl border border-stone-200 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-serif font-semibold text-stone-900">Filter by Category</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-linear-to-r from-teal-600 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200 hover:scale-105"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* MINISTRIES GRID */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          title="Our Ministries"
          description="Find your place to connect, grow, and make a difference in our church family"
        />

        <div className="grid gap-8 md:grid-cols-2">
            {filteredMinistries.map((ministry, index) => (
              <div
                key={ministry.name}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={ministry.image}
                    alt={ministry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${ministry.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {ministry.icon}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 -translate-x-16"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 translate-x-12"></div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{ministry.name}</h3>
                    <p className="text-white/90 text-lg font-medium italic">{ministry.tagline}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-stone-700 text-lg leading-relaxed mb-6">
                    {ministry.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-2xl bg-linear-to-br from-teal-50 to-blue-50 p-4 border-2 border-teal-200">
                      <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">
                        Age Group
                      </p>
                      <p className="text-stone-900 font-semibold">{ministry.ageGroup}</p>
                    </div>
                    <div className="rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 p-4 border-2 border-purple-200">
                      <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
                        Meeting Time
                      </p>
                      <p className="text-stone-900 font-semibold">{ministry.meetingTime}</p>
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-linear-to-r from-stone-50 to-teal-50 border-2 border-stone-200 hover:border-teal-300 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {ministry.leader.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs text-teal-600 uppercase tracking-wider font-bold">Led By</p>
                        <p className="text-stone-900 font-semibold">{ministry.leader}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all font-bold text-sm hover:scale-105 shadow-lg"
                    >
                      Get Involved
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {filteredMinistries.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-stone-600 font-medium">No ministries found in this category</p>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all hover:scale-105"
            >
              View All Ministries
            </button>
          </div>
        )}
      </Section>

      {/* VOLUNTEER OPPORTUNITIES */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="Serve"
          title="Volunteer Opportunities"
          description="Use your gifts to serve others and grow in your faith journey"
        />

        <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunday Service Team",
                roles: ["Greeters", "Ushers", "Coffee & Hospitality"],
                icon: "👋",
                color: "from-teal-500 to-blue-600",
              },
              {
                title: "Technical Team",
                roles: ["Sound", "Lights", "Video Production"],
                icon: "🎛️",
                color: "from-purple-500 to-pink-600",
              },
              {
                title: "Connection Team",
                roles: ["First Impressions", "Follow-Up", "New Members"],
                icon: "💬",
                color: "from-amber-500 to-orange-600",
              },
            ].map((opp, index) => (
              <div
                key={opp.title}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${opp.color} opacity-90`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                {/* Content */}
                <div className="relative z-10 p-8 text-white h-full flex flex-col">
                  <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {opp.icon}
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-6">{opp.title}</h3>

                  <ul className="space-y-3 mb-8 flex-1">
                    {opp.roles.map((role) => (
                      <li key={role} className="flex items-center gap-3 text-white/90 text-lg">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {role}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="w-full py-3 bg-white text-teal-600 rounded-xl hover:bg-white/90 transition-all font-bold text-center hover:scale-105 shadow-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* Additional Opportunities */}
        <div
          className="mt-12 rounded-3xl bg-linear-to-br from-stone-50 to-teal-50 p-8 md:p-12 border-2 border-teal-200"
          // eslint-disable-next-line react/forbid-dom-props
          style={{ animation: "fadeInUp 0.5s ease-out 0.4s both" }}
        >
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-3">
              More Ways to Serve
            </h3>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Don't see your area of interest? We have many other ways to get involved!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🎓", label: "Teaching", desc: "Share your knowledge" },
              { icon: "💻", label: "Digital", desc: "Tech & online ministry" },
              { icon: "🎨", label: "Creative", desc: "Arts & design" },
              { icon: "🤝", label: "Support", desc: "Behind the scenes" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-stone-200 text-center"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${(index + 5) * 0.1}s both` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-stone-900 mb-1">{item.label}</div>
                <div className="text-sm text-stone-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* JOIN A MINISTRY CTA */}
      <Section spacing="lg" background="stone">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-600 via-blue-600 to-purple-700 p-12 md:p-16 text-center shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">🚀</div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Get Involved?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're exploring for the first time or ready to serve, 
              we're here to help you find your place in our church family.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                <span>🏠</span>
                <span>Plan a Visit</span>
              </Link>
              
              <Link
                href="/leaders"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
              >
                <span>👥</span>
                <span>Contact a Leader</span>
              </Link>
              
              <a
                href="mailto:info@restorationchurch.org"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-xl font-bold text-lg hover:bg-amber-600 transition-all hover:scale-105 shadow-xl"
              >
                <span>💬</span>
                <span>Ask Questions</span>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
