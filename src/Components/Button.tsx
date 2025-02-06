import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string
  onClick?: () => void | null;
}

const Button = ({ children, onClick, className, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`border rounded-md p-1 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
