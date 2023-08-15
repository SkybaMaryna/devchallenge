import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: ${(props) => {
    if (props.$variant) {
      return "88px";
    } else if (props.$startIcon || props.$endIcon) {
      return "105px";
    } else if (props.size === "sm") {
      return "73px";
    } else if (props.size === "lg") {
      return "93px";
    } else if (props.color === "secondary") {
      return "104px";
    } else {
      return "81px";
    }
  }};
  height: ${(props) => {
    if (props.size === "sm") {
      return "32px";
    } else if (props.size === "lg") {
      return "42px";
    } else {
      return "36px";
    }
  }};
  border-radius: 6px;
  background-color: ${(props) => {
    if (props.$variant) {
      return "transparent";
    } else if (props.$disableShadow) {
      return "#3D5AFE";
    } else if (
      props.$startIcon ||
      props.$endIcon ||
      props.size ||
      props.color === "primary"
    ) {
      return "#2962FF";
    } else if (props.color === "secondary") {
      return "#455A64";
    } else if (props.color === "danger") {
      return "#D32F2F";
    } else {
      return "#e0e0e0";
    }
  }};

  box-shadow: ${(props) => {
    if (props.$variant || props.$disableShadow || props.disabled) {
      return "none";
    } else if (props.$startIcon || props.$endIcon || props.size) {
      return "0px 2px 3px 0px rgba(0, 49, 202, 0.20)";
    } else if (props.color === "primary") {
      return "0px 2px 3px 0px rgba(41, 98, 255, 0.20)";
    } else if (props.color === "secondary") {
      return "0px 2px 3px 0px rgba(69, 90, 100, 0.20)";
    } else if (props.color === "danger") {
      return "0px 2px 3px 0px rgba(211, 47, 47, 0.20)";
    } else {
      return "0px 2px 3px 0px rgba(51, 51, 51, 0.2)";
    }
  }};

  outline: none;
  border: ${(props) =>
    props.$variant === "outline" ? "1px solid #3D5AFE" : "none"};

  color: ${(props) => {
    if (props.disabled && props.$variant === "text") {
      return "#9E9E9E";
    } else if (props.$variant) {
      return "#3D5AFE";
    } else if (
      props.$disableShadow ||
      props.$startIcon ||
      props.$endIcon ||
      props.size ||
      props.color !== "default"
    ) {
      return "#fff";
    } else if (props.disabled) {
      return "#9E9E9E";
    } else {
      return "#3f3f3f";
    }
  }};
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 14px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: ${(props) => {
      if (props.$variant) {
        return "rgba(41, 98, 255, 0.10)";
      } else if (props.$disableShadow) {
        return "#2962FF1A";
      } else if (props.color === "primary") {
        return "#0039CB";
      } else if (props.color === "secondary") {
        return "#1C313A";
      } else if (props.color === "danger") {
        return "#9A0007";
      } else {
        return "#aeaeae";
      }
    }};
    color: ${(props) => {
      if (props.$disableShadow) {
        return "#3D5AFE";
      }
    }};
  }
`;