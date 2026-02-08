import { cn } from "@/lib/cn";
import { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const variantClasses = {
  default: "bg-white border border-stone-100 shadow-sm",
  elevated: "bg-white shadow-lg",
  outlined: "bg-white border-2 border-stone-200",
  glass: "glass shadow-lg",
};

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/**
 * Card component for consistent card layouts
 * Provides multiple variants with hover effects
 */
export function Card({
  children,
  className,
  variant = "default",
  padding = "md",
  hover = false,
  onClick,
  style,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={cn(
        "rounded-2xl smooth-transition",
        variantClasses[variant],
        paddingClasses[padding],
        hover && "hover-lift cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
