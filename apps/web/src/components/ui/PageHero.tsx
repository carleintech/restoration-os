"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";
import { Button } from "./Button";

interface PageHeroProps {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  height?: "small" | "medium" | "large" | "full";
  overlay?: "light" | "medium" | "dark";
  className?: string;
  children?: ReactNode;
}

const heightClasses = {
  small: "h-[50vh] min-h-[400px]",
  medium: "h-[60vh] min-h-[500px]",
  large: "h-[70vh] min-h-[600px]",
  full: "h-screen min-h-[700px]",
};

const overlayClasses = {
  light: "bg-gradient-to-t from-black/50 via-black/30 to-black/20",
  medium: "bg-gradient-to-t from-black/70 via-black/50 to-black/30",
  dark: "bg-gradient-to-t from-black/90 via-black/70 to-black/50",
};

/**
 * Page hero component with parallax background and responsive heights
 * Enhanced version of the original Hero component
 */
export function PageHero({
  image = "/hero/hero.png",
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  height = "large",
  overlay = "medium",
  className,
  children,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        heightClasses[height],
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={cn("absolute inset-0", overlayClasses[overlay])} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container-default text-center px-6">
          <div className="animate-fade-in-up">
            {subtitle && (
              <p className="text-white/90 text-lg md:text-xl mb-4 font-medium">
                {subtitle}
              </p>
            )}

            <h1 className="text-display font-serif text-white mb-6">
              {title}
            </h1>

            {description && (
              <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    size="lg"
                  >
                    {primaryCta.text}
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  >
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
            )}

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
