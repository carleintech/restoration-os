"use client";

import Hero from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

// Sample upcoming events (first 3)
const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "2026-02-14",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for powerful worship and inspiring messages every Sunday morning.",
    image: "/hero/hero.png",
    category: "Worship",
  },
  {
    title: "Wednesday Youth Group",
    date: "2026-02-17",
    time: "6:30 PM",
    location: "Youth Room",
    description: "Middle and high school students gather for games, worship, and community.",
    image: "/hero/hero.png",
    category: "Youth",
  },
  {
    title: "Monthly Prayer Meeting",
    date: "2026-02-21",
    time: "7:00 PM",
    location: "Prayer Chapel",
    description: "Join us as we seek God's face together in unified prayer.",
    image: "/hero/hero.png",
    category: "Community",
  },
];

// Latest sermons (first 3)
const latestSermons = [
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
];

export default function Home() {
  const stats = [
    { number: "500+", label: "Members", icon: "👨‍👩‍👧‍👦" },
    { number: "15+", label: "Ministries", icon: "🤝" },
    { number: "12", label: "Years Serving", icon: "⛪" },
    { number: "100%", label: "Jesus Focused", icon: "✝️" },
  ];

  return (
    <>
      <Hero />

      {/* STATS SECTION */}
      <Section spacing="md" background="white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-teal-50 to-blue-50 p-4 sm:p-6 md:p-8 text-center border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-teal-200/30 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-teal-600 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-stone-700 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VALUES */}
      <Section spacing="lg" background="stone">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-100 rounded-full text-teal-700 text-sm sm:text-base font-semibold mb-4 sm:mb-6">
            <span>💡</span>
            <span>Our Values</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 sm:mb-6 px-4">
            What We Believe
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed px-4">
            Restoration Church exists to love God, love people, and serve our community with excellence and authenticity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Love",
              text: "Experience God's unconditional love through worship, fellowship, and authentic community.",
              icon: "❤️",
              color: "from-red-500 to-pink-600",
            },
            {
              title: "Community",
              text: "Connect and grow through small groups, events, and meaningful relationships.",
              icon: "👥",
              color: "from-teal-500 to-blue-600",
            },
            {
              title: "Worship",
              text: "Encounter God through powerful, Spirit-filled worship that transforms lives.",
              icon: "🙏",
              color: "from-purple-500 to-indigo-600",
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
              <div className="relative z-10 p-6 sm:p-8 text-white h-full flex flex-col">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {value.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">{value.title}</h3>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed flex-1">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* UPCOMING EVENTS */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="What's Happening"
          title="Upcoming Events"
          description="Join us for these upcoming opportunities to connect, worship, and grow together"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.title}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Category Badge */}
              <div className="relative p-4 sm:p-6 pb-0">
                <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-3 sm:mb-4">
                  {event.category}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-stone-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 text-stone-600">
                    <span className="text-base sm:text-xl">📅</span>
                    <span className="text-xs sm:text-sm font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <span className="text-base sm:text-xl">⏰</span>
                    <span className="text-xs sm:text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-600">
                    <span className="text-base sm:text-xl">📍</span>
                    <span className="text-xs sm:text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-stone-600 mb-4 sm:mb-6">
                  {event.description}
                </p>

                <Link
                  href="/events"
                  className="w-full block py-2.5 sm:py-3 bg-teal-600 text-white text-center rounded-xl font-bold text-sm sm:text-base hover:bg-teal-700 transition-all hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-teal-700 transition-all hover:scale-105 shadow-xl"
          >
            <span>📅</span>
            <span>View All Events</span>
          </Link>
        </div>
      </Section>

      {/* LATEST SERMONS */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="Watch & Listen"
          title="Latest Messages"
          description="Catch up on our recent Sunday messages and dive deeper into God's Word"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestSermons.map((sermon, index) => (
            <div
              key={sermon.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center overflow-hidden">
                <div className="text-8xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  🎥
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm font-semibold rounded-lg">
                  {sermon.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-3">
                  {sermon.series}
                </div>

                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {sermon.title}
                </h3>

                <p className="text-sm text-stone-600 mb-2">{sermon.speaker}</p>
                <p className="text-sm text-stone-500 mb-4">{sermon.scripture}</p>

                <Link
                  href="/watch"
                  className="w-full block py-3 bg-teal-600 text-white text-center rounded-xl font-bold hover:bg-teal-700 transition-all hover:scale-105"
                >
                  Watch Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/watch"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-all hover:scale-105 shadow-xl"
          >
            <span>🎬</span>
            <span>Watch All Messages</span>
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section spacing="lg" background="white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-semibold mb-6">
            <span>💬</span>
            <span>Testimonies</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Lives Transformed
          </h2>
          
          <p className="text-xl text-stone-600 leading-relaxed">
            Hear from our community about how God is working in their lives through Restoration Church.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah M.",
              quote: "I came to Restoration feeling lost and alone. Through small groups and caring community, I've found hope, purpose, and a church family that feels like home.",
              emoji: "🌟",
            },
            {
              name: "Michael T.",
              quote: "The youth ministry here changed my son's life. He went from struggling with identity to becoming a leader who loves Jesus and serves others with passion.",
              emoji: "🙌",
            },
            {
              name: "Jennifer & David R.",
              quote: "After years of searching, we finally found a church that teaches the Bible faithfully and creates authentic community. This is where we belong.",
              emoji: "❤️",
            },
          ].map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-stone-50 rounded-3xl p-8 border-2 border-stone-200 hover:border-teal-300 hover:shadow-xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                {testimonial.emoji}
              </div>
              <p className="text-lg text-stone-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-bold text-teal-600">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NEXT STEPS */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="New Here?"
          title="Your Next Steps"
          description="We're so glad you're here! Here's how to get connected and make Restoration your church home"
        />

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Plan a Visit",
              description: "Join us Sunday at 9:00 AM or 11:00 AM. We'd love to meet you!",
              icon: "🏠",
              link: "/visit",
              color: "from-teal-500 to-blue-600",
            },
            {
              step: "2",
              title: "Connect",
              description: "Find a small group or ministry that fits your interests and passions.",
              icon: "👥",
              link: "/ministries",
              color: "from-purple-500 to-pink-600",
            },
            {
              step: "3",
              title: "Grow",
              description: "Deepen your faith through Bible studies, conferences, and discipleship.",
              icon: "📖",
              link: "/about",
              color: "from-green-500 to-emerald-600",
            },
            {
              step: "4",
              title: "Serve",
              description: "Use your gifts to make a difference in our community and beyond.",
              icon: "❤️",
              link: "/ministries",
              color: "from-amber-500 to-orange-600",
            },
          ].map((step, index) => (
            <Link
              key={step.title}
              href={step.link}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-90`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white text-center h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                  {step.step}
                </div>
                
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>

                <p className="text-white/90 leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section spacing="lg" background="white">
        <div
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-600 via-blue-600 to-purple-700 p-12 md:p-16 text-center shadow-2xl"
          // eslint-disable-next-line react/forbid-dom-props
          style={{ animation: "fadeInUp 0.5s ease-out both" }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">⛪</div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Take the Next Step?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're visiting for the first time or looking to get more involved, we'd love to connect with you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                <span>🏠</span>
                <span>Plan Your Visit</span>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
              >
                <span>💬</span>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
