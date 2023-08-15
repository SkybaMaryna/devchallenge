import React from "react";
import { StyledButton } from "./Button.styled";
import Icon from "../Icons/Icons";

const Button = ({
  variant,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size,
  color
}) => {
  let buttonText = "Default"
  if (disabled) buttonText = "Disabled"
  if (color === "secondary") buttonText = "Secondary"
  if (color === "danger") buttonText = "Danger"
    
  return (
    <StyledButton
      $variant={variant}
      $disableShadow={disableShadow}
      disabled={disabled}
      $startIcon={startIcon}
      $endIcon={endIcon}
      size={size}
      color={color}
    >
      {startIcon && <Icon name={startIcon} />}
      {buttonText}
      {endIcon && <Icon name={endIcon} />}
    </StyledButton>
  );
};

export default Button;
