import React, { Children, useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ children, iconLeft, iconRight, name, link }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Link
        to={link}
        className="nav-menu-item"
        // onMouseEnter={toggleOpen}
        // onMouseLeave={toggleOpen}
        onClick={toggleOpen}
      >
        <span className="icon-left">{iconLeft}</span>
        {name}
        <span className="icon-right">{iconRight}</span>
      </Link>
      {open &&
        Children.map(children, (child) => {
          return <>{child}</>;
        })}
    </>
  );
};

export default NavItem;
