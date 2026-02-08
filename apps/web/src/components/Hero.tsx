"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="/hero/church.png"
          alt="Restoration Church building"
          fill
          priority
          className="object-cover scale-105"
        />
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <div className="max-w-3xl space-y-8 text-white">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: "fadeInUp 0.5s ease-out both" }}
            >
              <span className="text-2xl">⛪</span>
              <span className="font-semibold text-white/90">Welcome to Restoration Church</span>
            </div>

            {/* Heading */}
            <h1
              className="text-5xl md:text-7xl font-serif font-bold leading-tight"
              // eslint-disable-next-line react/forbid-dom-props
              style={{
                animation: "fadeInUp 0.5s ease-out 0.1s both",
                textShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              A Place to Belong.<br />
              A Place to Grow.
            </h1>

            {/* Subheading */}
            <p
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
              // eslint-disable-next-line react/forbid-dom-props
              style={{
                animation: "fadeInUp 0.5s ease-out 0.2s both",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Restoration Church is a welcoming community in Landstown, where faith, family, and purpose come together.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-4"
              // eslint-disable-next-line react/forbid-dom-props
              style={{ animation: "fadeInUp 0.5s ease-out 0.3s both" }}
            >
              <Link
                href="/visit"
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl"
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #0891b2 100%)',
                  boxShadow: '0 8px 24px rgba(8,145,178,0.4)',
                }}
              >
                <span className="relative z-10 text-white">Plan Your Visit</span>
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <Link
                href="/watch"
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl backdrop-blur-md border-2 border-white/30"
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                  background: 'rgba(255,255,255,0.1)',
                }}
              >
                <span className="relative z-10 text-white">Watch Online</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        // eslint-disable-next-line react/forbid-dom-props
        style={{ animation: "fadeInUp 0.5s ease-out 0.5s both" }}
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
