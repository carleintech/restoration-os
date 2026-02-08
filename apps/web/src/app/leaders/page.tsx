"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function LeadersPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const leaders = [
    {
      name: "Pastors Ricardo & Kendra Francois",
      title: "Senior Pastors",
      bio: "Ricardo Francois serves as Senior Pastor of Restoration Church At Landstown in Virginia Beach, VA and oversees a Network of Churches and a Bible Training Ministry School in Haiti. Pastor Ricardo has been serving the body of Christ since 2000 and has been in full-time pastoral ministry since 2010. Born in Haiti, he served as a worship leader and cell group leader at his church, Legliz Kay an Kay (House to House Church). Ricardo met his wife, Kendra, in Haiti at his father-in-law's Bible Training Ministry School. He studied at Rhema Bible School, Cornerstone Bible Institute and The School Of Ministry. Pastor Ricardo is widely known for his practical and dynamic teaching style which helps people apply the timeless truths of Scripture to their everyday lives. He is passionate for the Word of God, the presence of the Holy Spirit through worship and an atmosphere where the Holy Spirit can move. Married since 1999, Ricardo and Kendra are the proud parents of three children.",
      image: "/leader/Pastor.jpg",
      email: "pastor@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Preaching", "Worship", "Leadership", "Bible Teaching"],
      verse: "2 Timothy 2:15",
      category: "pastoral",
      icon: "👨‍👩‍👧‍👦",
      gradient: "from-teal-600 via-blue-600 to-purple-600",
      featured: true,
    },
    {
      name: "Kathy Plank",
      title: "Church Administrator",
      bio: "Kathy serves as our Church Administrator, ensuring that everything runs smoothly behind the scenes. Her dedication to excellence and her servant's heart make her an invaluable part of our leadership team, supporting the vision and day-to-day operations of Restoration Church.",
      image: "/leader/KPlank.jpeg",
      email: "admin@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Administration", "Operations", "Organization"],
      verse: "Colossians 3:23",
      category: "administration",
      icon: "📋",
      gradient: "from-amber-500 to-orange-600",
      featured: false,
    },
    {
      name: "Lari & Sam Howard",
      title: "Support Team",
      bio: "Lari and Sam serve on our Support Team, bringing their gifts and passion for ministry to support the vision of Restoration Church. Their faithful service and commitment to the body of Christ make a significant impact in our church family.",
      image: "/leader/Lari & Sam Howard.jpg",
      email: "info@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Support Ministry", "Service", "Community"],
      verse: "Galatians 5:13",
      category: "support",
      icon: "🤝",
      gradient: "from-green-500 to-emerald-600",
      featured: false,
    },
    {
      name: "Aaron & Angie Plank",
      title: "Support Team",
      bio: "Aaron and Angie serve faithfully on our Support Team, using their gifts to strengthen and encourage our church family. Their dedication and servant hearts exemplify what it means to serve the body of Christ with excellence.",
      image: "/leader/Aaron & Angie Plank.jpeg",
      email: "info@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Support Ministry", "Service", "Hospitality"],
      verse: "1 Peter 4:10",
      category: "support",
      icon: "💝",
      gradient: "from-rose-500 to-pink-600",
      featured: false,
    },
    {
      name: "Felix & Betty Soto",
      title: "Children's Ministry",
      bio: "Felix and Betty serve in our Children's Ministry, investing in the next generation by creating meaningful experiences where children can encounter God's love. Their passion for kids and heart for ministry make our children's programs vibrant and engaging.",
      image: "/leader/Felix & Betty Soto.jpeg",
      email: "children@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Children's Ministry", "Family Ministry", "Teaching"],
      verse: "Mark 10:14",
      category: "children",
      icon: "🎨",
      gradient: "from-blue-500 to-cyan-600",
      featured: false,
    },
    {
      name: "Kellie Cass",
      title: "Children's Ministry Coordinator",
      bio: "Kellie coordinates our Children's Ministry with excellence and creativity. Her organizational skills and love for children ensure that every child who walks through our doors experiences the love of Jesus in age-appropriate and engaging ways.",
      image: "/leader/Kellie Cass.jpeg",
      email: "children@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Children's Ministry", "Coordination", "Early Education"],
      verse: "Proverbs 22:6",
      category: "children",
      icon: "🌈",
      gradient: "from-purple-500 to-indigo-600",
      featured: false,
    },
    {
      name: "Mary Cass",
      title: "Children's Ministry",
      bio: "Mary serves in our Children's Ministry with dedication and joy. Her heart for children and commitment to creating a safe, loving environment where kids can learn about Jesus makes her an essential part of our children's ministry team.",
      image: "/leader/Mary cass.jpeg",
      email: "children@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Children's Ministry", "Care", "Teaching"],
      verse: "Matthew 19:14",
      category: "children",
      icon: "🎈",
      gradient: "from-yellow-500 to-amber-600",
      featured: false,
    },
    {
      name: "Julia & Josh Secrest",
      title: "Middle School Ministry",
      bio: "Julia and Josh lead our Middle School Ministry with passion and purpose. They are dedicated to mentoring middle schoolers through the challenges of adolescence while helping them develop a genuine, lasting relationship with Jesus Christ.",
      image: "/hero/logo.png",
      email: "youth@restorationchurch.org",
      phone: "(757) 301-4653",
      specialties: ["Middle School Ministry", "Youth Discipleship", "Mentoring"],
      verse: "Jeremiah 29:11",
      category: "youth",
      icon: "🎮",
      gradient: "from-violet-500 to-purple-600",
      featured: false,
    },
  ];

  const stats = [
    { number: "8", label: "Leadership Team", icon: "👥" },
    { number: "25+", label: "Years Combined", icon: "⭐" },
    { number: "5", label: "Ministry Areas", icon: "🎯" },
    { number: "100%", label: "Servant Hearts", icon: "❤️" },
  ];

  const categories = [
    { id: "all", label: "All Leaders", icon: "👥", count: leaders.length },
    { id: "pastoral", label: "Pastoral", icon: "👨‍👩‍👧‍👦", count: leaders.filter(l => l.category === "pastoral").length },
    { id: "administration", label: "Administration", icon: "📋", count: leaders.filter(l => l.category === "administration").length },
    { id: "children", label: "Children", icon: "🎨", count: leaders.filter(l => l.category === "children").length },
    { id: "youth", label: "Youth", icon: "🎮", count: leaders.filter(l => l.category === "youth").length },
    { id: "support", label: "Support", icon: "🤝", count: leaders.filter(l => l.category === "support").length },
  ];

  const values = [
    {
      title: "Shepherd's Heart",
      description: "We lead with compassion, caring deeply for each person God has entrusted to us",
      icon: "🐑",
      color: "from-teal-500 to-blue-600",
    },
    {
      title: "Biblical Integrity",
      description: "God's Word guides our decisions, teaching, and ministry approach",
      icon: "📖",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Spirit-Led",
      description: "We depend on the Holy Spirit's wisdom and power in all we do",
      icon: "🔥",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Servant Leadership",
      description: "Following Jesus' example, we lead by serving and empowering others",
      icon: "🙏",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const filteredLeaders = activeFilter === "all" 
    ? leaders 
    : leaders.filter(leader => leader.category === activeFilter);

  const teamLeaders = filteredLeaders.filter(l => !l.featured);

  return (
    <>
      {/* HERO */}
      <PageHero
        title="Meet Our Leaders"
        subtitle="Leadership Team"
        description="Dedicated servants of God who lead with wisdom, compassion, and unwavering faith to shepherd our church family."
        height="medium"
        primaryCta={{ text: "Get Connected", href: "#team" }}
        secondaryCta={{ text: "Plan a Visit", href: "/visit" }}
      />

      {/* STATS SECTION */}
      <Section spacing="md" background="white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
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

      {/* LEADERSHIP VALUES */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          badge="Our Approach"
          title="Leadership Values"
          description="The principles that guide how we lead and serve our church family"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
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

      {/* CATEGORY FILTER */}
      <Section spacing="md" background="white">
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-lg py-6 rounded-2xl border border-stone-200 shadow-lg">
          <div className="flex items-center justify-between mb-4 px-6">
            <h3 className="text-lg font-serif font-semibold text-stone-900">Filter by Ministry</h3>
          </div>

          <div className="flex flex-wrap gap-3 px-6">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-label={`Filter by ${category.label}`}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-linear-to-r from-teal-600 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200 hover:scale-105"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${
                    activeFilter === category.id
                      ? "bg-white/20"
                      : "bg-stone-200 text-stone-600"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* LEADERS GRID */}
      <Section spacing="lg" background="stone">
        <SectionHeader
          title="Our Leadership Team"
          description="Meet the dedicated servants who shepherd our church family with love and faith"
        />

        {/* FEATURED PASTORS */}
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div className="mb-20" style={{ animation: 'fadeInUp 0.5s ease-out both' }}>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-linear-to-br from-teal-600 via-blue-600 to-purple-700">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 md:flex items-center">
              {/* Image Section */}
              <div className="md:w-2/5 relative">
                <div className="relative group">
                  <Image
                    src="/leader/ricardo-kendra.jpg"
                    alt="Pastor Ricardo & Kendra Francois"
                    width={600}
                    height={600}
                    className="w-full h-100 md:h-150 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-teal-900/50 to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-12 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                  <span>👑</span>
                  <span>Senior Pastors</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Pastor Ricardo & Kendra Francois
                </h2>

                <div className="space-y-4 text-white/90 text-lg leading-relaxed mb-8">
                  <p>
                    Ricardo & Kendra Francois are the visionary leaders who founded Restoration 
                    Church in 2015. Together with their sons, Tyler and Noah, they live out their 
                    calling to love God and love people.
                  </p>
                  <p>
                    Pastor Ricardo serves as the Overseer for Restoration Network International, 
                    providing apostolic guidance to churches across multiple nations. His teaching 
                    ministry has impacted thousands through clarity, wisdom, and practical application 
                    of God's Word.
                  </p>
                  <p>
                    First Lady Kendra leads with prophetic insight and compassionate care, overseeing 
                    key ministry areas including worship, children's ministry, and women's ministry. 
                    Her heart for discipleship and community creates an atmosphere where people encounter 
                    God's presence and grow in their faith.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
                  >
                    <span>📧</span>
                    <span>Contact Pastors</span>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all hover:scale-105"
                  >
                    <span>📖</span>
                    <span>Our Story</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MINISTRY LEADERS */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-center mb-4">Ministry Leaders</h3>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            A passionate team dedicated to serving our church family with excellence and love
          </p>
        </div>

        {teamLeaders.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamLeaders.map((leader, index) => (
              <div
                key={leader.name}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                {/* Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                  
                  {/* Name/Role Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-1">{leader.name}</h3>
                    <p className="text-teal-300 font-medium">{leader.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-stone-700 leading-relaxed mb-4">{leader.bio}</p>
                  
                  {leader.specialties && leader.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {leader.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-linear-to-r from-teal-50 to-blue-50 text-teal-700 text-sm rounded-full font-medium border border-teal-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {leader.verse && (
                    <div className="relative p-4 bg-linear-to-br from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500">
                      <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 font-semibold">Life Verse</p>
                      <p className="text-sm text-amber-700 font-bold italic">
                        {leader.verse}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-stone-600 font-medium">No leaders found in this category</p>
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all hover:scale-105"
            >
              View All Leaders
            </button>
          </div>
        )}

        {/* Oversight Note */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-6 bg-white rounded-3xl border-2 border-teal-200 shadow-xl">
            <p className="text-stone-700 text-lg">
              <span className="text-2xl mr-2">🌍</span>
              Oversight provided by{" "}
              <span className="font-bold text-teal-600">Restoration Network International</span>
            </p>
          </div>
        </div>
      </Section>

      {/* CALL TO ACTION */}
      <Section spacing="lg" background="white">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-teal-600 via-blue-600 to-purple-700 p-12 md:p-16 text-center shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">✨</div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Connect?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Have questions about our church or want to get involved? 
              We'd love to hear from you and help you take your next step.
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
                href="/ministries"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all hover:scale-105"
              >
                <span>🎯</span>
                <span>Explore Ministries</span>
              </Link>
              
              <Link
                href="/give"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-xl font-bold text-lg hover:bg-amber-600 transition-all hover:scale-105 shadow-xl"
              >
                <span>💝</span>
                <span>Give Online</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}