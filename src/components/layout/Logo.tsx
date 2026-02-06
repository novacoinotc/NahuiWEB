import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 40, height = 40 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Nahui Labs"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
