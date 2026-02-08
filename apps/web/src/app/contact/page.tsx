"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["3220 Monet Drive", "Virginia Beach, VA 23453"],
      color: "from-teal-500 to-blue-600",
      link: "https://maps.google.com/?q=3220+Monet+Drive+Virginia+Beach+VA+23453",
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["info@restorationlandstown.com"],
      color: "from-purple-500 to-pink-600",
      link: "mailto:info@restorationlandstown.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["(757) 301-4653"],
      color: "from-amber-500 to-orange-600",
      link: "tel:+17573014653",
    },
    {
      icon: "⏰",
      title: "Service Times",
      details: ["Sundays at 9:00 AM", "Sundays at 11:00 AM"],
      color: "from-green-500 to-emerald-600",
      link: "/visit",
    },
  ];

  const departments = [
    { icon: "⛪", name: "General Inquiry", value: "general" },
    { icon: "🙏", name: "Prayer Request", value: "prayer" },
    { icon: "👨‍👩‍👧‍👦", name: "Connect Groups", value: "groups" },
    { icon: "🎤", name: "Worship & Media", value: "worship" },
    { icon: "👶", name: "Kids Ministry", value: "kids" },
    { icon: "🎓", name: "Youth Ministry", value: "youth" },
    { icon: "💼", name: "Careers", value: "careers" },
    { icon: "🤝", name: "Volunteer", value: "volunteer" },
  ];

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We'd Love to Hear From You"
        description="Have a question? Want to learn more about Restoration Church? We're here to help and would love to connect with you!"
        height="medium"
        primaryCta={{ text: "Send Message", href: "#contact-form" }}
        secondaryCta={{ text: "Visit Us", href: "#location" }}
      />

      {/* CONTACT INFO CARDS */}
      <Section spacing="lg" background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={info.title}
              href={info.link}
              target={info.link.startsWith('http') ? "_blank" : undefined}
              rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${info.color} opacity-90`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white text-center">
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-white/90 text-sm">{detail}</p>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section spacing="lg" background="stone" id="contact-form">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Send a Message"
            title="Contact Form"
            description="Fill out the form below and we'll get back to you as soon as possible"
          />

          <div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            // eslint-disable-next-line react/forbid-dom-props
            style={{ animation: "fadeInUp 0.5s ease-out both" }}
          >
            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-8xl mb-6">✅</div>
                  <h3 className="text-3xl font-serif font-bold text-teal-600 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xl text-stone-600">
                    Thank you for reaching out. We'll respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-stone-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-stone-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-stone-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                        placeholder="(757) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-stone-900 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                      >
                        <option value="">Select a topic...</option>
                        {departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.icon} {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-stone-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-all hover:scale-105 shadow-xl"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-stone-500 text-center">
                    * Required fields. We typically respond within 24-48 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* QUICK LINKS */}
      <Section spacing="lg" background="white">
        <SectionHeader
          badge="Quick Access"
          title="Need Something Specific?"
          description="Jump directly to the information you're looking for"
        />

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: "🙏", title: "Prayer Request", desc: "Submit a prayer request", link: "#contact-form" },
            { icon: "🎉", title: "Plan a Visit", desc: "First time here? Start here", link: "/visit" },
            { icon: "👥", title: "Join a Group", desc: "Find community", link: "/ministries" },
            { icon: "🤝", title: "Get Involved", desc: "Volunteer opportunities", link: "/ministries" },
          ].map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className="group p-6 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-teal-300 hover:shadow-lg transition-all hover:scale-105"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
              <p className="text-sm text-stone-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* MAP LOCATION */}
      <Section spacing="lg" background="stone" id="location">
        <SectionHeader
          badge="Find Us"
          title="Our Location"
          description="We're located in the heart of Landstown, Virginia Beach"
        />

        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          // eslint-disable-next-line react/forbid-dom-props
          style={{ animation: "fadeInUp 0.5s ease-out both" }}
        >
          {/* Map Placeholder */}
          <div className="aspect-video bg-linear-to-br from-teal-100 to-blue-100 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-8xl mb-6">📍</div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                3220 Monet Drive, Virginia Beach, VA 23453
              </h3>
              <a
                href="https://maps.google.com/?q=3220+Monet+Drive+Virginia+Beach+VA+23453"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all hover:scale-105"
              >
                <span>🗺️</span>
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Directions Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { icon: "🚗", title: "By Car", desc: "Plenty of free parking available in our lot" },
            { icon: "🚌", title: "Public Transit", desc: "Bus routes 20 and 23 stop nearby" },
            { icon: "♿", title: "Accessibility", desc: "Wheelchair accessible entrance and seating" },
          ].map((item, index) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl bg-white border-2 border-stone-200"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: `fadeInUp 0.5s ease-out ${(index + 1) * 0.1}s both` }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
              <p className="text-sm text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
