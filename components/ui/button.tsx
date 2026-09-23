import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-mono text-xs font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:opacity-90",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-card",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-card",
        accent: "bg-signal-blue text-white hover:opacity-90",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3.5 text-[11px]",
        lg: "h-12 px-6 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
