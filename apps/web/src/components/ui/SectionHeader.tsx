import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Section header component for consistent page section titles
 * Includes optional badge, subtitle, and description
 */
export function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("mb-8 sm:mb-12 max-w-3xl px-4", alignClasses, className)}>
      {badge && (
        <div className="mb-3 sm:mb-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-50 text-teal-700 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wide">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4 text-stone-900 font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-teal-600 font-medium mb-3 sm:mb-4">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
