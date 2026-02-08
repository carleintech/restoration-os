export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-surface shadow-soft p-4 ${className}`}>
      {children}
    </div>
  );
}
