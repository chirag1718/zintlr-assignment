import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  /**
   * Optional icon element to be displayed before the text.
   */
  icon?: ReactNode;

  /**
   * The text content of the button.
   */
  text: string;

  /**
   * Specifies if the button has a light theme.
   */
  light?: boolean;

  /**
   * Additional CSS classes for customization.
   */
  className?: string;

  /**
   * The height of the button. Use this prop to adjust the height according to your needs.
   */
  height?: number;

  /**
   * The width of the button. Use this prop to adjust the width according to your needs.
   */
  width?: number;

  /**
   * Click event handler for the button.
   */
  onClick?: MouseEventHandler;
  /**
   * Specifies the position of the icon relative to the text.
   * Set to 'before' to place the icon before the text,
   * or 'after' to place it after the text.
   */
  iconPosition?: "before" | "after";
}

/**
 * Custom button component with optional icon, text, and customizable styles.
 * @param {ButtonProps} props - The properties to configure the button.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  light,
  className,
  onClick,
  height,
  width,
  iconPosition = "before",
}) => {
  // General button class
  const buttonClasses = `flex items-center justify-center ${
    icon && `gap-2`
  } px-[10px] py-[5px] rounded border ${
    light
      ? "bg-white border-border-light-black text-text-light-black"
      : "bg-bg-secondary-light-black border-border-light-black text-white"
  } ${
    iconPosition === "before" ? "flex-row" : "flex-row-reverse"
  }  ${className}`;
  // hover styles only apply if icon is not present in the button
  const hoverStyles = !icon
    ? light
      ? "hover:bg-bg-secondary-light-black hover:border-border-light-black hover:text-white transition-all duration-100"
      : "hover:bg-white hover:border-border-light-black hover:text-text-light-black transition-all duration-100"
    : "";
  // active styles only apply if icon is not present in the button
  const activeStyles = !icon
    ? light
      ? "active:bg-bg-secondary-light-black active:border-border-light-black active:text-white transition-all duration-100"
      : "active:bg-white active:border-border-light-black active:text-text-light-black transition-all duration-100"
    : "";
  return (
    <button
      onClick={onClick}
      style={{ height: height, width: width }}
      className={`${buttonClasses} ${hoverStyles} ${activeStyles}`}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default Button;
