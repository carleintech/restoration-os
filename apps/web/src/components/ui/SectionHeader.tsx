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
    <div className={cn("mb-12 max-w-3xl", alignClasses, className)}>
      {badge && (
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium uppercase tracking-wide">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-h2 font-serif mb-4 text-stone-900">
        {title}
      </h2>

      {subtitle && (
        <p className="text-body-lg text-teal-600 font-medium mb-4">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="text-body text-stone-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
