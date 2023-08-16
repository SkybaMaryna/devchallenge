import React from "react";
import {
  StyledCode,
  StyledContainer,
  StyledTitle,
  StyledVariantContainer,
} from "./Inputs.styled";
import Input from "../../components/Input/Input";

const Inputs = () => {
  return (
    <StyledContainer>
      <StyledTitle>Buttons</StyledTitle>
      <StyledVariantContainer>
        <StyledCode>{`<Input />`}</StyledCode>
        <Input />
      </StyledVariantContainer>
    </StyledContainer>
  );
};

export default Inputs;
