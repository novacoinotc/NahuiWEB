import { type LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  className?: string;
}

export default function IconBox({ icon: Icon, className = "" }: IconBoxProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <Icon className="w-10 h-10 text-[#00E5FF]" strokeWidth={1.5} />
    </div>
  );
}
