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
        <Input error />
      </StyledVariantContainer>
      <StyledVariantContainer>
        <StyledCode>{`<Input disabled/>`}</StyledCode>
        <Input disabled />
      </StyledVariantContainer>
      <StyledVariantContainer
        style={{ display: "flex", flexDirection: "row", gap: "80px" }}
      >
        <div>
          <StyledCode>{`<Input helperText="Some interesting text"/>`}</StyledCode>
          <Input helperText="Some interesting text" />
        </div>
        <div>
          <StyledCode>{`<Input helperText="Some interesting text" error/>`}</StyledCode>
          <Input helperText="Some interesting text" error />
        </div>
      </StyledVariantContainer>
      <StyledVariantContainer
        style={{ display: "flex", flexDirection: "row", gap: "80px" }}
      >
        <div>
          <StyledCode>{`<Input startIcon/>`}</StyledCode>
          <Input startIcon />
        </div>
        <div>
          <StyledCode>{`<Input endIcon/>`}</StyledCode>
          <Input endIcon />
        </div>
      </StyledVariantContainer>
    </StyledContainer>
  );
};

export default Inputs;
