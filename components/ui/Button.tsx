import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wide transition-all duration-300 px-8 py-3.5 focus:outline-none disabled:opacity-50",
          variant === "primary" && "bg-gradient-to-r from-gold via-yellow-400 to-gold-dark text-black hover:brightness-110 shadow-[0_4px_20px_rgba(212,175,55,0.3)]",
          variant === "outline" && "border border-gold text-gold hover:bg-gold hover:text-black",
          variant === "ghost" && "text-white hover:bg-neutral-900",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";