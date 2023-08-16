import React from "react";
import {
  StiledLabel,
  StyledDiv,
  StyledHelperText,
  StyledInput,
  getStyledIcon,
} from "./Input.styled";
import { FaPhoneAlt } from "react-icons/fa";

const Input = ({
  label,
  placeholder,
  error = false,
  disabled = false,
  helperText,
  startIcon,
}) => {
  const StyledIconPhone = getStyledIcon(FaPhoneAlt);
  return (
    <StyledDiv>
      <StiledLabel label={label} error={error}>
        {label ? label : "Label"}
        <StyledInput
          placeholder={placeholder ? placeholder : "Placeholder"}
          error={error}
          disabled={disabled}
        />
        {startIcon && <StyledIconPhone />}
      </StiledLabel>
      {helperText && (
        <StyledHelperText error={error}>{helperText}</StyledHelperText>
      )}
    </StyledDiv>
  );
};

export default Input;
