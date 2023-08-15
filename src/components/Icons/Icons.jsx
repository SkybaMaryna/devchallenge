import React from "react";
import { ReactComponent as IconCart } from "../../images/local_grocery_store.svg";
import { getStyledIcon } from "./Icons.styled";
const StyledIconCart = getStyledIcon(IconCart);

const Icon = ({ name }) => {
  switch (name) {
    case "local_grocery_store":
      return <StyledIconCart />;

    default:
      return 2;
  }
};

export default Icon;
