import React from "react";
import { NavLink } from "react-router-dom";
import { StyledList, StyledNav } from "./Header.styled";

const Header = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="buttons">Buttons</NavLink>
        </li>
        <li>
          <NavLink to="inputs">Inputs</NavLink>
        </li>
      </StyledList>
    </StyledNav>
  );

};

export default Header;
