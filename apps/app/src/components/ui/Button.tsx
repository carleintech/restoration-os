import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-accent text-black",
    ghost: "bg-transparent hover:bg-muted/20",
  };

  return (
    <button
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-medium transition",
        styles[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
