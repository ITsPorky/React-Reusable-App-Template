import React, { Children } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ children }) => {
  // const DropdownItem = ({ child, iconLeft, iconRight }) => {
  //   return (
  //     <>
  //       <span className="icon-left">{iconLeft}</span>
  //       {child}
  //       <span className="icon-right">{iconRight}</span>
  //     </>
  //   );
  // };

  return (
    <div className="dropdown-container">
      <ul className="dropdown">
        {Children.map(children, (child) => {
          return <>{child}</>;
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
