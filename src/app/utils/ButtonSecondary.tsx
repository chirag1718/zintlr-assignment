import React, { MouseEventHandler } from "react";

interface ButtonSecondaryProps {
  /**
   * The text content of the button.
   */
  text: string;
  /**
   * On Click mouse handleer
   */
  onClick?: MouseEventHandler;
}

/**
 * Reusable secondary button component with customizable text.
 * @param {ButtonSecondaryProps} props - The properties to configure the button.
 * @returns {JSX.Element} The rendered ButtonSecondary component.
 */
const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ text, onClick }: ButtonSecondaryProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="w-[105px] h-auto p-1 text-base font-normal hover:font-bold active:font-bold border-2 border-transparent transition-all duration-100 ease-linear text-text-light-black hover:text-bright-blue active:text-bright-blue hover:border-b-bright-blue active:border-b-bright-blue"
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
