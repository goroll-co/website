// src/components/ui/Button.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
  onClick,
  href,
  target,
  rel,
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 bg-white",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md",
    ghost:
      "text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-lg",
  };

  const disabledClasses =
    disabled || loading
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "";
  const widthClasses = fullWidth ? "w-full" : "";
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;

  const renderIcon = (position: "left" | "right") => {
    if (!Icon || loading) return null;
    if (iconPosition !== position) return null;

    const iconClasses = position === "left" ? "mr-2" : "ml-2";
    return <Icon className={`w-5 h-5 ${iconClasses}`} />;
  };

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {renderIcon("left")}
      {children}
      {renderIcon("right")}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={allClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={allClasses}
    >
      {content}
    </button>
  );
}
