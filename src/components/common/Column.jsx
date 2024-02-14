import React, { Children } from "react";

const Column = ({ children, id, Style, className = "" }) => {
  return (
    <div
      id={id}
      className={`w-full flex flex-col p-5 ${className}`}
      Style={Style}
    >
      <div>
        {Children.map(children, (child) => {
          return child;
        })}
      </div>
    </div>
  );
};

export default Column;
