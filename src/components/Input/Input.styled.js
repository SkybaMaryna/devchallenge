import styled from "styled-components";

export const StyledDiv = styled.div``;
export const StiledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  margin-bottom: 4px;
  color: ${(props) => {
    if (props.$error) {
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
      if (props.$error) {
        return "#D32F2F";
      } else {
        return "#2962ff";
      }
    }};
  }
`;
export const StyledInput = styled.textarea`
  resize: none;
  width: ${(props) => {
    if (props.$fullWidth) {
      return "100%";
    } else {
      return "200px";
    }
  }};
  /* height: ${(props) => {
    if (props.size === "sm") {
      return "40px";
    } else {
      return "56px";
    }
  }}; */
  border-radius: 8px;
  border: 1px solid;
  border-color: ${(props) => {
    if (props.$error) {
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

  padding-top: ${(props) => {
    if (props.size === "sm") {
      return "10px";
    } else {
      return "18px";
    }
  }};
  padding-bottom: ${(props) => {
    if (props.size === "sm") {
      return "10px";
    } else {
      return "18px";
    }
  }};
  padding-right: ${(props) => {
    if (props.$endIcon) {
      return "45px";
    } else {
      return "12px";
    }
  }};
  padding-left: ${(props) => {
    if (props.$startIcon) {
      return "45px";
    } else {
      return "12px";
    }
  }};
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: border-color 500ms ease;

  color: #333;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 14px;
  font-weight: 500;

  &::placeholder {
    color: #828282;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    border-color: ${(props) => {
      if (props.disabled) {
        return "#E0E0E0";
      } else {
        return "#333";
      }
    }};
  }
  &:focus {
    border-color: ${(props) => {
      if (props.$error) {
        return "#D32F2F";
      } else {
        return "#2962ff";
      }
    }};
  }
`;

export const StyledHelperText = styled.p`
  color: ${(props) => {
    if (props.$error) {
      return "#D32F2F";
    } else {
      return "#828282";
    }
  }};
  font-family: "Noto Sans JP", sans-serif;
  font-size: 10px;
  font-weight: 400;
  transition: color 500ms ease;

  ${StyledDiv}:hover & {
    color: #333;
  }
  ${StyledDiv}:focus-within & {
    color: ${(props) => {
      if (props.$error) {
        return "#D32F2F";
      } else {
        return "#2962ff";
      }
    }};
  }
`;

export const getStyledIcon = (component) => styled(component)`
  width: 18px;
  height: 18px;
  fill: #828282;
  position: absolute;
`;
