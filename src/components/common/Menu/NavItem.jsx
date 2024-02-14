import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavItem = ({ children, iconLeft, iconRight, name, link }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const isChildNull = () => {
    if (Children.count(children) === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Link
        to={link}
        className={`nav-menu-item ${isOpen ? "open" : ""}`}
        // onMouseEnter={toggleOpen}
        // onMouseLeave={toggleOpen}
        onClick={toggleOpen}
      >
        <span className="icon-left">{iconLeft}</span>
        {name}
        <span className="icon-right">{iconRight}</span>
        {!isChildNull() && (
          <span className="icon-dropdown">
            <FontAwesomeIcon icon={faChevronDown} fontSize={10} />
          </span>
        )}
      </Link>
      {isOpen &&
        Children.map(children, (child) => {
          return <>{child}</>;
        })}
    </>
  );
};

export default NavItem;
