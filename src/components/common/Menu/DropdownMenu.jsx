import React, { Children, useState } from "react";

const DropdownMenu = ({ children }) => {
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
