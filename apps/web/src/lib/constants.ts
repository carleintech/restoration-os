/**
 * Central constants for Restoration Church
 * Ensures consistency across all pages
 */

export const CHURCH_INFO = {
  name: "Restoration Church",
  tagline: "Love God. Love People. Serve Our Community.",
  address: {
    street: "3220 Monet Drive",
    city: "Virginia Beach",
    state: "VA",
    zip: "23453",
    full: "3220 Monet Drive, Virginia Beach, VA 23453",
  },
  contact: {
    phone: "757-301-4653",
    email: "info@restorationlandstown.com",
  },
  serviceTimes: {
    sunday: {
      time: "10:00 AM",
      duration: "~90 minutes",
    },
  },
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
  },
  external: {
    churchCenter: "https://restorationlandstown.churchcenter.com",
    giving: "https://restorationlandstown.churchcenter.com/giving",
  },
} as const;

export const NAVIGATION_LINKS = [
  { href: "/about", label: "About" },
  { href: "/leaders", label: "Leaders" },
  { href: "/visit", label: "Visit" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
] as const;

export const CORE_VALUES = [
  {
    title: "Love",
    description: "Experience God's love through worship & fellowship.",
    icon: "heart",
  },
  {
    title: "Community",
    description: "Connect and grow through small groups and events.",
    icon: "people",
  },
  {
    title: "Worship",
    description: "Encounter God through powerful, Spirit-filled worship.",
    icon: "hands",
  },
] as const;

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
} as const;
