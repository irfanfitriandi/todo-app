import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  color?: string;
}

const Button: FC<ButtonProps> = ({ label, color, ...props }) => {
  return (
    <button
      className={`${color} text-white font-medium text-lg py-3 px-8 rounded-full`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
