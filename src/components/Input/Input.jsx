import React from "react";
import { StiledLabel, StyledDiv, StyledInput } from "./Input.styled";

const Input = ({ label, placeholder, error = false, disabled = false }) => {
  return (
    <StyledDiv>
      <StiledLabel label={label} error={error}>
        {label ? label : "Label"}
        <StyledInput
          placeholder={placeholder ? placeholder : "Placeholder"}
          error={error}
          disabled={disabled}
        />
      </StiledLabel>
    </StyledDiv>
  );
};

export default Input;
