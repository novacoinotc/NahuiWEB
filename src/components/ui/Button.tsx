"use client";

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  href?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", children, href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0E14] disabled:opacity-50 disabled:cursor-not-allowed font-body cursor-pointer";

    const variants = {
      primary:
        "bg-gradient-to-l from-[#1f41bb] to-[#00E5FF] text-black hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,229,255,0.3),0_0_60px_rgba(31,65,187,0.2)]",
      secondary:
        "bg-transparent text-white border border-white/20 hover:border-[#00E5FF] hover:text-[#00E5FF]",
      outline:
        "bg-transparent text-[#00E5FF] border border-[#00E5FF] hover:bg-gradient-to-l hover:from-[#1f41bb] hover:to-[#00E5FF] hover:text-black hover:border-transparent",
    };

    const sizes = {
      default: "px-8 py-4 text-base",
      large: "px-12 py-5 text-lg",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
