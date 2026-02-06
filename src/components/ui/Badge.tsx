interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "filled";
}

export default function Badge({ children, className = "", variant = "outline" }: BadgeProps) {
  const variants = {
    outline: "text-[#00E5FF] border border-[#00E5FF] bg-transparent",
    filled: "bg-gradient-to-l from-[#1f41bb] to-[#00E5FF] text-black border-none",
  };

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full font-body ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
