"use client";

import { useEffect, useState } from "react";
import { BREAKPOINTS } from "@/lib/constants";

/**
 * Custom hook to detect if a media query matches
 *
 * @param query - CSS media query string
 * @returns boolean indicating if the query matches
 *
 * @example
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

/**
 * Responsive breakpoint hooks
 * Provides boolean values for each breakpoint
 */
export function useBreakpoints() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.tablet - 1}px)`);
  const isTablet = useMediaQuery(
    `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.laptop - 1}px)`
  );
  const isLaptop = useMediaQuery(
    `(min-width: ${BREAKPOINTS.laptop}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`
  );
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.desktop}px)`);
  const isWide = useMediaQuery(`(min-width: ${BREAKPOINTS.wide}px)`);

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isWide,
    isTabletOrLarger: !isMobile,
    isLaptopOrLarger: isLaptop || isDesktop || isWide,
    isDesktopOrLarger: isDesktop || isWide,
  };
}

/**
 * Get current breakpoint name
 * Useful for conditional rendering based on screen size
 */
export function useCurrentBreakpoint(): "mobile" | "tablet" | "laptop" | "desktop" | "wide" {
  const { isMobile, isTablet, isLaptop, isDesktop, isWide } = useBreakpoints();

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  if (isLaptop) return "laptop";
  if (isWide) return "wide";
  if (isDesktop) return "desktop";

  return "desktop"; // fallback
}
