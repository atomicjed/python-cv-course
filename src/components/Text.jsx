import { createElement } from "react";
import { cn } from "../lib/utils/className.utils.js";
import { cva } from "class-variance-authority";

const textVariants = cva(
  '',
  {
    variants: {
      variant: {
        h1: 'md:text-5xl text-3xl font-normal tracking-tight',
        h2: 'md:text-4xl sm:text-3xl text-2xl font-normal tracking-tight',
        h3: 'md:text-2xl text-lg font-normal tracking-tight',
        h4: 'text-lg font-normal tracking-tight',
        p: 'md:text-base text-sm',
        small: 'text-sm',
      },
    },
    defaultVariants: {
      variant: 'p',
    },
  },
);

export default function Text({
  variant = 'p',
  component = 'p',
  className,
  children,
  ...props
}) {
  return createElement(
    component,
    {
      className: cn(textVariants({ variant }), className),
      ...props,
    },
    children
  );
}