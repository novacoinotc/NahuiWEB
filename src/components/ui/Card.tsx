interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-[#1C1F26] border border-white/5 p-8 rounded-2xl transition-all duration-300 ${
        hover ? "hover:border-[#00E5FF]/30" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
