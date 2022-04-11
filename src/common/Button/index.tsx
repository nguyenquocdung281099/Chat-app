import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styled";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "light" | string;
  fullWidth?: boolean;
  disabled?: boolean;
}
const Button: React.FC<IButtonProps> = ({
  onClick,
  color = "primary",
  fullWidth = false,
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <S.Button onClick={onClick} color={color} fullWidth={fullWidth} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
};
export default Button;
