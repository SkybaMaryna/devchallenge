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
      <StyledTitle>Inputs</StyledTitle>
      <StyledVariantContainer>
        <StyledCode>{`<Input />`}</StyledCode>
        <Input />
      </StyledVariantContainer>
      <StyledVariantContainer>
        <StyledCode>{`<Input error/>`}</StyledCode>
        <Input error/>
      </StyledVariantContainer>
      <StyledVariantContainer>
        <StyledCode>{`<Input disabled/>`}</StyledCode>
        <Input disabled/>
      </StyledVariantContainer>
      <StyledVariantContainer>
        <StyledCode>{`<Input disabled/>`}</StyledCode>
        <Input disabled/>
      </StyledVariantContainer>
    </StyledContainer>
  );
};

export default Inputs;
