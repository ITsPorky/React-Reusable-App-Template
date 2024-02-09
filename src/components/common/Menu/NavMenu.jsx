import React, { Children } from "react";

const NavMenu = ({ children }) => {
  return (
    <ul className="nav-menu-items hidden md:flex flex-row px-5">
      {Children.map(children, (child) => {
        return <li>{child}</li>;
      })}
    </ul>
  );
};

export default NavMenu;
