import { cn } from "@/lib/cn";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses = {
  primary:
    "bg-gradient-primary text-white shadow-lg hover:shadow-xl border border-white/10",
  secondary:
    "bg-stone-800 text-white hover:bg-stone-900 shadow-md hover:shadow-lg",
  outline:
    "bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-50",
  ghost: "bg-transparent text-stone-700 hover:bg-stone-100",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * Button component with multiple variants and sizes
 * Supports both button and link functionality
 */
export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium smooth-transition-fast hover:scale-105 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
