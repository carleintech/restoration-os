"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function Give() {
  const impactStats = [
    { number: "150+", label: "Families Served", icon: "👨‍👩‍👧‍👦" },
    { number: "12", label: "Outreach Programs", icon: "🤝" },
    { number: "8", label: "Mission Partners", icon: "🌍" },
    { number: "$50K+", label: "Annual Impact", icon: "💝" },
  ];

  const givingMethods = [
    {
      icon: "💳",
      title: "Online Giving",
      description: "Give securely online through our Church Center platform. One-time or recurring options available.",
      color: "from-teal-500 to-blue-600",
      link: "https://restorationlandstown.churchcenter.com/giving",
    },
    {
      icon: "📱",
      title: "Text to Give",
      description: "Text GIVE to (757) 301-4653 for a quick and easy way to support our mission on the go.",
      color: "from-purple-500 to-pink-600",
      link: "sms:+17573014653",
    },
    {
      icon: "✉️",
      title: "Mail a Check",
      description: "Send checks to 3220 Monet Drive, Virginia Beach, VA 23453. Make payable to Restoration Church.",
      color: "from-amber-500 to-orange-600",
      link: "#mail",
    },
  ];

  const impactStories = [
    {
      title: "Food Pantry Ministry",
      description: "Your giving provides groceries to 40+ families each week through our community food pantry, ensuring no one in our neighborhood goes hungry.",
      icon: "🍞",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Global Missions",
      description: "We support 8 missionary families serving in 6 countries, sharing the gospel and providing humanitarian aid to those in need.",
      icon: "🌍",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Youth Programs",
      description: "Scholarships and resources enable 50+ students to attend summer camps, conferences, and mission trips that transform their lives.",
      icon: "🎓",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <>
      <PageHero
        title="Generous Living"
        subtitle="Give Cheerfully"
        description="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. - 2 Corinthians 9:7"
        height="medium"
        primaryCta={{ text: "Give Now", href: "#give-online" }}
        secondaryCta={{ text: "See Impact", href: "#impact" }}
      />

      {/* IMPACT STATS */}
      <Section spacing="md" background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
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

      {/* WHY WE GIVE - SCRIPTURE FOCUS */}
      <Section spacing="lg" background="stone">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-semibold mb-6">
            <span>📖</span>
            <span>Biblical Foundation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Why We Give
          </h2>
          
          <p className="text-xl text-stone-600 leading-relaxed mb-8">
            Giving is an act of worship, a response to God's generosity, and a way to join in His work of transforming lives.
          </p>

          <div className="relative rounded-3xl bg-linear-to-br from-amber-50 to-orange-50 p-8 md:p-12 border-2 border-amber-200 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">✝️</div>
              <p className="text-2xl md:text-3xl font-serif text-stone-900 italic mb-4 leading-relaxed">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              </p>
              <p className="text-lg font-bold text-amber-700">
                - 2 Corinthians 9:7
              </p>
            </div>
          </div>
        </div>

        {/* IMPACT STORIES */}
        <SectionHeader
          title="Your Generosity in Action"
          description="See the real-world impact of your faithful giving in our community and beyond"
        />

        <div className="grid md:grid-cols-3 gap-8" id="impact">
          {impactStories.map((story, index) => (
            <div
              key={story.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${story.color} opacity-90`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {story.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4">{story.title}</h3>

                <p className="text-white/90 leading-relaxed flex-1">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* WAYS TO GIVE */}
      <Section spacing="lg" background="white" id="give-online">
        <SectionHeader
          badge="How to Give"
          title="Ways to Give"
          description="Choose the method that works best for you. Every gift makes a difference."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {givingMethods.map((method, index) => (
            <div
              key={method.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-90`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {method.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4">{method.title}</h3>

                <p className="text-white/90 leading-relaxed mb-8 flex-1">
                  {method.description}
                </p>

                {method.link.startsWith('http') ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white text-teal-600 rounded-xl hover:bg-white/90 transition-all font-bold text-center hover:scale-105 shadow-lg"
                  >
                    Get Started
                  </a>
                ) : (
                  <div className="w-full py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl border-2 border-white/30 font-bold text-center">
                    Available Now
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FEATURED ONLINE GIVING CTA */}
        <div
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-600 via-blue-600 to-purple-700 p-12 md:p-16 text-center shadow-2xl"
          // eslint-disable-next-line react/forbid-dom-props
          style={{ animation: "fadeInUp 0.5s ease-out 0.4s both" }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">💝</div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Give Online Now
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Securely give a one-time gift or set up recurring giving through our Church Center platform. Safe, simple, and tax-deductible.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://restorationlandstown.churchcenter.com/giving"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                <span>💳</span>
                <span>Give Online</span>
              </a>
              
              <a
                href="https://restorationlandstown.churchcenter.com/giving"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
              >
                <span>🔄</span>
                <span>Set Up Recurring</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Security icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium">Secure, encrypted transactions</span>
            </div>
          </div>
        </div>
      </Section>

      {/* OTHER GIVING OPTIONS */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="Additional Options"
          title="More Ways to Give"
          description="Explore additional giving methods that may work better for your situation"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            className="group rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-stone-200"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out both" }}
          >
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
              Stock & Securities
            </h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Donate appreciated stocks or securities for potential tax benefits. Contact our finance team for transfer instructions and personalized assistance.
            </p>
            <a
              href="mailto:finance@restorationlandstown.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all hover:scale-105"
            >
              <span>✉️</span>
              <span>Contact Finance Team</span>
            </a>
          </div>

          <div
            className="group rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-stone-200"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out 0.1s both" }}
          >
            <div className="text-5xl mb-4">🏛️</div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
              Legacy Giving
            </h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Include Restoration Church in your estate planning to leave a lasting impact for future generations. Build a legacy that continues advancing God's kingdom.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all hover:scale-105"
            >
              <span>📚</span>
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* TRANSPARENCY & ACCOUNTABILITY */}
      <Section spacing="lg" background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 font-semibold mb-6">
              <span>✓</span>
              <span>Trusted Stewardship</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Faithful Stewardship
            </h2>
            
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to using every dollar wisely. Our finances are overseen by a dedicated board, regularly audited, and aligned with our mission to honor God and serve people.
            </p>
          </div>

          {/* Budget Breakdown */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { percent: "75%", label: "Ministry & Programs", icon: "⛪", color: "from-teal-500 to-blue-600" },
              { percent: "15%", label: "Operations & Staff", icon: "👥", color: "from-purple-500 to-pink-600" },
              { percent: "10%", label: "Facility & Maintenance", icon: "🏗️", color: "from-amber-500 to-orange-600" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-90`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>

                {/* Content */}
                <div className="relative z-10 p-8 text-white text-center">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-5xl font-bold font-serif mb-2">{item.percent}</div>
                  <div className="text-lg font-semibold text-white/90">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Accountability Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "📊", title: "Annual Reports", desc: "Transparent financial reporting published yearly" },
              { icon: "🔍", title: "Independent Audits", desc: "Regular third-party financial audits" },
              { icon: "🤝", title: "Board Oversight", desc: "Dedicated financial accountability team" },
              { icon: "📱", title: "Real-Time Tracking", desc: "View your giving history anytime online" },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-teal-300 hover:shadow-lg transition-all"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${(index + 3) * 0.1}s both` }}
              >
                <div className="text-4xl shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-stone-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mt-12"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out 0.7s both" }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all hover:scale-105 shadow-lg"
            >
              <span>📄</span>
              <span>View Annual Report</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 rounded-xl font-bold hover:bg-teal-50 transition-all hover:scale-105"
            >
              <span>❓</span>
              <span>Financial FAQ</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
