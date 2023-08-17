import React from "react";
import {
  StiledLabel,
  StyledDiv,
  StyledHelperText,
  StyledInput,
  getStyledIcon,
} from "./Input.styled";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const StyledIconPhone = getStyledIcon(FaPhoneAlt);
const StyledIconLock = getStyledIcon(IoMdLock);

const Input = ({
  label,
  placeholder,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
}) => {
  return (
    <StyledDiv>
      <StiledLabel label={label} $error={error}>
        {label ? label : "Label"}
        <StyledInput
          placeholder={placeholder ? placeholder : "Placeholder"}
          $error={error}
          disabled={disabled}
          $startIcon={startIcon}
          $endIcon={endIcon}
          defaultValue={value ? value[0]?.toUpperCase() + value?.slice(1) : ""}
        />
        {startIcon && <StyledIconPhone style={{ top: "35px", left: "12px" }} />}
        {endIcon && <StyledIconLock style={{ top: "35px", right: "12px" }} />}
      </StiledLabel>
      {helperText && (
        <StyledHelperText $error={error}>{helperText}</StyledHelperText>
      )}
    </StyledDiv>
  );
};

export default Input;
