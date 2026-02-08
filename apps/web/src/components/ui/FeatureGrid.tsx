"use client";

import { cn } from "@/lib/cn";
import { Card } from "./Card";
import { ReactNode } from "react";
import { getFadeInUpStyle } from "@/lib/animations";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
  animated?: boolean;
}

const columnClasses = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

/**
 * Feature grid component for displaying icon + title + description cards
 * Supports 2, 3, or 4 column layouts with scroll animations
 */
export function FeatureGrid({
  features,
  columns = 3,
  className,
  animated = true,
}: FeatureGridProps) {
  return (
    <div className={cn("grid gap-6", columnClasses[columns], className)}>
      {features.map((feature, index) => (
        <Card
          key={index}
          variant="default"
          padding="lg"
          className="text-center"
          style={animated ? getFadeInUpStyle(index, 0.5, 0.1) : undefined}
        >
          <div className="mb-5 flex justify-center">{feature.icon}</div>
          <h3 className="text-h3 font-semibold mb-3 text-stone-900">
            {feature.title}
          </h3>
          <p className="text-body text-stone-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
