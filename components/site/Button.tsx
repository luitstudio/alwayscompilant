import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonTone = "default" | "compact";

function buttonClasses(variant: ButtonVariant = "primary", tone: ButtonTone = "default", className = "") {
  return ["ac-button", `ac-button-${variant}`, tone === "compact" ? "ac-button-compact" : "", className].filter(Boolean).join(" ");
}

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "className"> & {
    children: ReactNode;
    className?: string;
    tone?: ButtonTone;
    variant?: ButtonVariant;
  };

export function ButtonLink({ children, className, tone, variant = "primary", ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, tone, className)} {...props}>{children}</Link>;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ButtonTone;
  variant?: ButtonVariant;
};

export function Button({ children, className, tone, variant = "primary", ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, tone, className)} {...props}>{children}</button>;
}

