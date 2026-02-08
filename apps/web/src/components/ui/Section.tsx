import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
  background?: "white" | "stone" | "gradient-primary" | "gradient-warm" | "transparent";
  width?: "narrow" | "default" | "wide" | "full";
  id?: string;
}

const spacingClasses = {
  xs: "section-spacing-xs",
  sm: "section-spacing-sm",
  md: "section-spacing-md",
  lg: "section-spacing-lg",
  xl: "section-spacing-xl",
};

const backgroundClasses = {
  white: "bg-white",
  stone: "bg-stone-50",
  "gradient-primary": "bg-gradient-primary text-white",
  "gradient-warm": "bg-gradient-warm text-white",
  transparent: "bg-transparent",
};

const widthClasses = {
  narrow: "container-narrow",
  default: "container-default",
  wide: "container-wide",
  full: "container-full",
};

/**
 * Section component for consistent page sections
 * Provides standardized spacing, backgrounds, and container widths
 */
export function Section({
  children,
  className,
  spacing = "md",
  background = "transparent",
  width = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn(widthClasses[width], "mx-auto px-4 sm:px-6 lg:px-8")}>{children}</div>
    </section>
  );
}
