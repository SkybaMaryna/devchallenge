import React from "react";
import {
  StyledCode,
  StyledContainer,
  StyledVariantContainer,
  StyledTitle,
} from "./Buttons.styled";
import Button from "../../components/Button/Button";

const Buttons = () => {
  return (
    <StyledContainer>
      <StyledTitle>Buttons</StyledTitle>
      <StyledVariantContainer>
        <StyledCode>{`<Button />`}</StyledCode>
        <Button />
      </StyledVariantContainer>
      <StyledVariantContainer>
        <StyledCode>{`<Button variant="outline"/>`}</StyledCode>
        <Button variant="outline" />
      </StyledVariantContainer>
      <StyledVariantContainer>
        <StyledCode>{`<Button variant="text"/>`}</StyledCode>
        <Button variant="text" />
      </StyledVariantContainer>
      <StyledVariantContainer>
        <StyledCode>{`<Button disableShadow"/>`}</StyledCode>
        <Button disableShadow />
      </StyledVariantContainer>
      <StyledVariantContainer
        style={{ display: "flex", flexDirection: "row", gap: "125px" }}
      >
        <div>
          <StyledCode>{`<Button disabled"/>`}</StyledCode>
          <Button disabled />
        </div>
        <div>
          <StyledCode>{`<Button variant="text" disabled"/>`}</StyledCode>
          <Button variant="text" disabled />
        </div>
      </StyledVariantContainer>
      <StyledVariantContainer
        style={{ display: "flex", flexDirection: "row", gap: "80px" }}
      >
        <div>
          <StyledCode>{`<Button startIcon="local_grocery_store" />`}</StyledCode>
          <Button startIcon="local_grocery_store" />
        </div>
        <div>
          <StyledCode>{`<Button endIcon="local_grocery_store" />`}</StyledCode>
          <Button endIcon="local_grocery_store" />
        </div>
      </StyledVariantContainer>
      <StyledVariantContainer
        style={{ display: "flex", flexDirection: "row", gap: "80px" }}
      >
        <div>
          <StyledCode>{`<Button size="sm"/>`}</StyledCode>
          <Button size="sm" />
        </div>
        <div>
          <StyledCode>{`<Button size="md"/>`}</StyledCode>
          <Button size="md" />
        </div>
        <div>
          <StyledCode>{`<Button size="lg"/>`}</StyledCode>
          <Button size="lg" />
        </div>
      </StyledVariantContainer>
      <StyledVariantContainer
        style={{ display: "flex", flexDirection: "row", gap: "80px" }}
      >
        <div>
          <StyledCode>{`<Button color="default" />`}</StyledCode>
          <Button color="default" />
        </div>
        <div>
          <StyledCode>{`<Button color="primary" />`}</StyledCode>
          <Button color="primary" />
        </div>
        <div>
          <StyledCode>{`<Button color="secondary" />`}</StyledCode>
          <Button color="secondary" />
        </div>
        <div>
          <StyledCode>{`<Button color="danger" />`}</StyledCode>
          <Button color="danger" />
        </div>
      </StyledVariantContainer>
      <p>created by MarynaSkyba - devChallenges.io</p>
    </StyledContainer>
  );
};

export default Buttons;
