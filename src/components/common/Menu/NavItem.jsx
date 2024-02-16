import React, { Children, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavItem = ({ children, iconLeft, iconRight, name, link }) => {
  const [isOpen, setOpen] = useState(false);
  // Custom Hook to close container when clicking outside
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !isOpen);

    return () => {
      document.removeEventListener("click", handleClickOutside, !isOpen);
    };
  });

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(!isOpen);
    }
  };
  // END Custom Hook

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
        ref={ref}
      >
        <span className="icon-left">{iconLeft}</span>
        {name}
        <span className="icon-right">{iconRight}</span>
        {!isChildNull() && (
          <span className="icon-dropdown">
            <FontAwesomeIcon icon={faChevronDown} />
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
