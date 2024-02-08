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
      className={`flex flex-row flex-wrap md:flex-nowrap py-10 ${className}`}
      Style={Style}
    >
      {Children.map(children, (child) => {
        return child;
      })}
    </div>
  );
};

export default Row;
