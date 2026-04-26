import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "blue" | "green" | "light" | "outline" | "outlineLight";
};

const variants = {
  blue: "bg-ca-blue text-white hover:bg-ca-blue/92",
  green: "bg-ca-green text-white hover:bg-ca-green/92",
  light: "bg-white text-ca-blue hover:bg-ca-cream",
  outline:
    "border border-ca-blue/20 bg-white text-ca-blue hover:border-ca-green hover:text-ca-green",
  outlineLight:
    "border border-white/40 bg-white/8 text-white hover:bg-white/16"
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "blue",
  ...props
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-extrabold shadow-card transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ca-turquoise/40 ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
