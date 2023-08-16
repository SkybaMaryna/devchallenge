import styled from "styled-components";

export const StyledDiv = styled.div``;
export const StiledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${(props) => {
    if (props.error) {
      return "#D32F2F";
    } else {
      return "#333";
    }
  }};
  font-family: "Noto Sans JP", sans-serif;
  font-size: 12px;
  font-weight: 400;
  transition: color 500ms ease;

  ${StyledDiv}:hover & {
    color: #333;
  }

  ${StyledDiv}:focus-within & {
    color: ${(props) => {
      if (props.error) {
        return "#D32F2F";
      } else {
        return "#2962ff";
      }
    }};
  }
`;
export const StyledInput = styled.input`
  width: 200px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${(props) => {
    if (props.error) {
      return "#D32F2F";
    } else if (props.disabled) {
      return "#E0E0E0";
    } else {
      return "#828282";
    }
  }};
  background-color: ${(props) => {
    if (props.disabled) {
      return "#F2F2F2";
    } else {
      return "transparent";
    }
  }};
  padding: 18px 12px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: border-color 500ms ease;

  &::placeholder {
    color: #828282;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    border-color: 
    ${(props) => {
      if (props.disabled) {
        return "#E0E0E0";
      } else {
        return "#333";
      }
    }};
  }
  &:focus {
    border-color: ${(props) => {
      if (props.error) {
        return "#D32F2F";
      } else {
        return "#2962ff";
      }
    }};
  }
`;
