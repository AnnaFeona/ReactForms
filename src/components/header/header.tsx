import { FC } from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <NavLink to={"/"} className="nav__link">Home</NavLink>
        <NavLink to={"/uncontrolled"} className="nav__link">Without Controll</NavLink>
        <NavLink to={"/controlled"} className="nav__link">With Controll</NavLink>
      </header>
    </>
  );
};
