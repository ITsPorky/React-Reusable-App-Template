import React, { Children } from "react";

const Row = ({
  children,
  id,
  Style,
  className = "",
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col md:flex-row py-10 ${className}`}
      Style={Style}
    >
      {Children.map(children, (child) => {
        return child;
      })}
    </div>
  );
};

export default Row;
