"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function VisitPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What should I wear?",
      answer: "Come as you are! We have people in everything from jeans to dress clothes. The most important thing is that you're comfortable.",
    },
    {
      question: "What about my kids?",
      answer: "We love kids! We offer age-appropriate programs for children during our services. Our children's ministry team creates a safe, fun, and engaging environment where kids can learn about Jesus.",
    },
    {
      question: "Where do I park?",
      answer: "We have ample free parking available in our lot. Our parking team will be happy to help direct you to available spots.",
    },
    {
      question: "How long is the service?",
      answer: "Our Sunday service typically lasts about 90 minutes, including worship, announcements, and the message.",
    },
    {
      question: "What if I'm new to church?",
      answer: "Perfect! We're here to help. Our welcome team will greet you, answer questions, and help you feel at home. No pressure, just genuine hospitality.",
    },
  ];

  return (
    <>
      <PageHero
        title="We Can't Wait to Meet You"
        subtitle="Plan Your Visit"
        description="Join us for a Sunday service filled with authentic worship, practical teaching, and genuine community."
        height="medium"
        primaryCta={{ text: "Service Times", href: "#service-times" }}
        secondaryCta={{ text: "Get Directions", href: "#directions" }}
      />

      {/* QUICK INFO STATS */}
      <Section spacing="md" background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "⏰", label: "Service Time", value: "10:00 AM" },
            { icon: "📍", label: "Location", value: "Landstown" },
            { icon: "👨‍👩‍👧‍👦", label: "Kids Ministry", value: "All Ages" },
            { icon: "☕", label: "Free Coffee", value: "Always!" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-50 to-blue-50 p-6 text-center border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-200/30 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold font-serif text-teal-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICE TIMES */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="Service Times"
          title="Sunday Service"
          description="Join us every Sunday for worship, teaching, and community"
        />

        <div className="grid md:grid-cols-3 gap-8">
            {/* Service Time Card */}
            <div
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-600 to-teal-700 p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: "fadeInUp 0.5s ease-out both" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-2">Service Time</h3>
                <p className="text-4xl font-bold mb-2">10:00 AM</p>
                <p className="text-white/80">Every Sunday</p>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-500 to-amber-600 p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: "fadeInUp 0.5s ease-out 0.1s both" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-2">Location</h3>
                <p className="text-lg mb-1">3220 Monet Drive</p>
                <p className="text-white/80">Virginia Beach, VA 23453</p>
              </div>
            </div>

            {/* Duration Card */}
            <div
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-stone-700 to-stone-800 p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-2">Duration</h3>
                <p className="text-4xl font-bold mb-2">~90 min</p>
                <p className="text-white/80">Including worship</p>
              </div>
            </div>
        </div>
      </Section>

      {/* WHAT TO EXPECT */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="First Time?"
          title="What to Expect"
          description="Your first visit should be comfortable and welcoming. Here's what a typical Sunday looks like."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: "👋",
                title: "Warm Welcome",
                description: "Our greeting team will welcome you at the door with a smile and help you find your way around.",
                color: "from-teal-500 to-blue-600",
                step: "1",
              },
              {
                icon: "🎵",
                title: "Spirit-Filled Worship",
                description: "Experience powerful worship with contemporary music that creates an atmosphere for encountering God's presence.",
                color: "from-purple-500 to-pink-600",
                step: "2",
              },
              {
                icon: "📖",
                title: "Biblical Teaching",
                description: "Receive practical, relevant messages from God's Word that you can apply to your everyday life.",
                color: "from-amber-500 to-orange-600",
                step: "3",
              },
              {
                icon: "🤝",
                title: "Genuine Community",
                description: "Connect with friendly people who genuinely care. We're a church family that loves to welcome newcomers.",
                color: "from-green-500 to-emerald-600",
                step: "4",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-90`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>

                {/* Step Number */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 pt-20 text-white h-full flex flex-col">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>

                  <p className="text-white/90 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* First-Time Guest Benefits */}
        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl border-2 border-teal-200">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 font-semibold mb-4">
              <span>⭐</span>
              <span>First-Time Guests</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-3">
              We've Got You Covered
            </h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Your comfort is our priority. Here's what makes visiting Restoration Church easy and welcoming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎁",
                title: "Guest Gift",
                description: "Receive a special welcome gift when you visit for the first time",
              },
              {
                icon: "🅿️",
                title: "Reserved Parking",
                description: "Premium parking spots reserved just for first-time guests",
              },
              {
                icon: "ℹ️",
                title: "Info Center",
                description: "Stop by our Welcome Center for any questions or assistance",
              },
              {
                icon: "👶",
                title: "Kids Check-In",
                description: "Easy, secure check-in process for your children",
              },
              {
                icon: "☕",
                title: "Free Refreshments",
                description: "Enjoy complimentary coffee, tea, and snacks before service",
              },
              {
                icon: "📱",
                title: "No Pressure",
                description: "Feel free to observe - we won't put you on the spot",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="group p-6 rounded-2xl bg-linear-to-br from-stone-50 to-teal-50 hover:shadow-lg transition-all duration-300 border border-stone-200"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${(index + 4) * 0.1}s both` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-serif font-bold text-stone-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-stone-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* KIDS & FAMILIES */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="For Families"
          title="Kids Are Welcome Here"
          description="We create safe, engaging environments where children can encounter God's love"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out both" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-teal-600 to-purple-600 opacity-20"></div>
            <div className="relative p-12 text-center">
              <div className="text-8xl mb-6">🎨</div>
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                Age-Appropriate Programs
              </h3>
              <div className="space-y-4 text-left">
                {[
                  { age: "Nursery", range: "0-2 years", icon: "👶" },
                  { age: "Toddlers", range: "2-3 years", icon: "🧸" },
                  { age: "Preschool", range: "4-5 years", icon: "🎨" },
                  { age: "Elementary", range: "K-5th grade", icon: "📚" },
                ].map((program, index) => (
                  <div
                    key={program.age}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border border-stone-200"
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
                  >
                    <span className="text-3xl">{program.icon}</span>
                    <div>
                      <div className="font-bold text-stone-900">{program.age}</div>
                      <div className="text-sm text-stone-600">{program.range}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="space-y-6"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}
          >
            <div className="rounded-2xl bg-linear-to-br from-teal-50 to-blue-50 p-8 border-2 border-teal-200">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">Secure Check-In</h4>
              <p className="text-stone-700 leading-relaxed">
                Our secure check-in system ensures your children's safety. You'll receive a matching tag 
                for pick-up, and our trained staff maintains strict safety protocols.
              </p>
            </div>

            <div className="rounded-2xl bg-linear-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-200">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">Trained Leaders</h4>
              <p className="text-stone-700 leading-relaxed">
                All our children's ministry volunteers are background-checked and trained to create 
                a fun, safe environment where kids can learn about Jesus.
              </p>
            </div>

            <div className="rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 p-8 border-2 border-amber-200">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">Interactive Learning</h4>
              <p className="text-stone-700 leading-relaxed">
                Through games, worship, crafts, and Bible stories, we engage children in age-appropriate 
                ways that make learning about God exciting and memorable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* INTERACTIVE MAP & DIRECTIONS */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="Location"
          title="Find Us"
          description="We're located in the heart of Landstown, Virginia Beach"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-teal-200"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out both" }}
          >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.7707567892844!2d-76.0789!3d36.8129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzQ2LjQiTiA3NsKwMDQnNDQuMCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="500"
                title="Restoration Church Location Map"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
          </div>

          {/* Directions & Info */}
          <div
            className="space-y-6"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out 0.2s both" }}
          >
              <div className="rounded-3xl bg-linear-to-br from-teal-600 to-blue-600 p-8 text-white shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Address</h3>
                    <p className="text-xl text-white/90 mb-1">3220 Monet Drive</p>
                    <p className="text-lg text-white/80">Virginia Beach, VA 23453</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=3220+Monet+Drive+Virginia+Beach+VA+23453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-xl font-bold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
                >
                  <span>📍</span>
                  <span>Open in Google Maps</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border-2 border-stone-200 shadow-lg">
                  <div className="text-4xl mb-3">🅿️</div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Free Parking</h3>
                  <p className="text-stone-600 text-sm">
                    Ample parking with reserved spots for first-time guests
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 border-2 border-stone-200 shadow-lg">
                  <div className="text-4xl mb-3">⏰</div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Arrive Early</h3>
                  <p className="text-stone-600 text-sm">
                    We recommend arriving 10-15 minutes before service starts
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 border-2 border-stone-200 shadow-lg">
                  <div className="text-4xl mb-3">♿</div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Accessible</h3>
                  <p className="text-stone-600 text-sm">
                    Wheelchair accessible entrance and seating available
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 border-2 border-stone-200 shadow-lg">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Easy Access</h3>
                  <p className="text-stone-600 text-sm">
                    Located just off Independence Blvd with easy highway access
                  </p>
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Got questions? We've got answers that will help you feel prepared and welcomed."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div
                key={index}
                className="group rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-stone-200 hover:border-teal-300 overflow-hidden"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center text-teal-600 font-bold text-lg border-2 border-teal-200">
                      {index + 1}
                    </div>
                    <span className="text-xl font-serif font-bold text-stone-900">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-8 h-8 text-teal-600 transition-transform duration-300 shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-label="Toggle FAQ"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-22">
                    <p className="text-stone-600 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help */}
        <div
          className="mt-12 text-center max-w-2xl mx-auto rounded-3xl bg-linear-to-br from-amber-50 to-orange-50 p-8 border-2 border-amber-200"
          // eslint-disable-next-line react/forbid-dom-props
          style={{ animation: "fadeInUp 0.5s ease-out 0.6s both" }}
        >
          <div className="text-5xl mb-4">💬</div>
          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-stone-700 mb-6">
            We're here to help! Don't hesitate to reach out with any questions or concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all hover:scale-105 shadow-lg"
            >
              <span>📧</span>
              <span>Contact Us</span>
            </Link>
            <a
              href="tel:+17573014653"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-xl font-bold hover:bg-teal-50 transition-all hover:scale-105"
            >
              <span>📞</span>
              <span>(757) 301-4653</span>
            </a>
          </div>
        </div>
      </Section>

      {/* CONTACT CTA */}
      <Section spacing="lg" background="stone">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-600 via-blue-600 to-purple-700 p-12 md:p-16 text-center shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">🙌</div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Visit?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              We can't wait to meet you this Sunday! Experience authentic worship, 
              practical teaching, and genuine community at Restoration Church.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                <span>📅</span>
                <span>View Events</span>
              </Link>
              
              <a
                href="tel:+17573014653"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
              >
                <span>📞</span>
                <span>Call Us</span>
              </a>
              
              <a
                href="mailto:info@restorationchurch.org"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-xl font-bold text-lg hover:bg-amber-600 transition-all hover:scale-105 shadow-xl"
              >
                <span>✉️</span>
                <span>Email Us</span>
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Sunday 10:00 AM</span>
              </div>
              <span className="hidden md:block">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">3220 Monet Drive, Virginia Beach</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
