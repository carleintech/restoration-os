/**
 * Animation utilities and helpers
 * Provides consistent animation patterns across the application
 */

export const ANIMATION_DURATIONS = {
  fast: 150,
  base: 300,
  slow: 500,
  verySlow: 700,
} as const;

export const ANIMATION_EASINGS = {
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
} as const;

/**
 * Calculate stagger delay for animating lists of items
 * @param index - Index of the item in the list
 * @param baseDelay - Base delay in seconds (default: 0.1)
 * @returns Delay in seconds as a string
 */
export function getStaggerDelay(index: number, baseDelay: number = 0.1): string {
  return `${index * baseDelay}s`;
}

/**
 * Generate animation style for fade-in-up with stagger
 * @param index - Index of the item
 * @param duration - Duration in seconds (default: 0.5)
 * @param baseDelay - Base stagger delay (default: 0.1)
 * @returns React style object
 */
export function getFadeInUpStyle(
  index: number,
  duration: number = 0.5,
  baseDelay: number = 0.1
): React.CSSProperties {
  return {
    animation: `fadeInUp ${duration}s ease-out ${getStaggerDelay(index, baseDelay)} both`,
  };
}

/**
 * Generate animation style for fade-in-down with stagger
 * @param index - Index of the item
 * @param duration - Duration in seconds (default: 0.5)
 * @param baseDelay - Base stagger delay (default: 0.1)
 * @returns React style object
 */
export function getFadeInDownStyle(
  index: number,
  duration: number = 0.5,
  baseDelay: number = 0.1
): React.CSSProperties {
  return {
    animation: `fadeInDown ${duration}s ease-out ${getStaggerDelay(index, baseDelay)} both`,
  };
}

/**
 * Generate animation style for slide-in-left with stagger
 * @param index - Index of the item
 * @param duration - Duration in seconds (default: 0.5)
 * @param baseDelay - Base stagger delay (default: 0.1)
 * @returns React style object
 */
export function getSlideInLeftStyle(
  index: number,
  duration: number = 0.5,
  baseDelay: number = 0.1
): React.CSSProperties {
  return {
    animation: `slideInLeft ${duration}s ease-out ${getStaggerDelay(index, baseDelay)} both`,
  };
}

/**
 * Generate animation style for slide-in-right with stagger
 * @param index - Index of the item
 * @param duration - Duration in seconds (default: 0.5)
 * @param baseDelay - Base stagger delay (default: 0.1)
 * @returns React style object
 */
export function getSlideInRightStyle(
  index: number,
  duration: number = 0.5,
  baseDelay: number = 0.1
): React.CSSProperties {
  return {
    animation: `slideInRight ${duration}s ease-out ${getStaggerDelay(index, baseDelay)} both`,
  };
}

/**
 * Generate animation style for scale-in with stagger
 * @param index - Index of the item
 * @param duration - Duration in seconds (default: 0.4)
 * @param baseDelay - Base stagger delay (default: 0.1)
 * @returns React style object
 */
export function getScaleInStyle(
  index: number,
  duration: number = 0.4,
  baseDelay: number = 0.1
): React.CSSProperties {
  return {
    animation: `scaleIn ${duration}s ease-out ${getStaggerDelay(index, baseDelay)} both`,
  };
}
