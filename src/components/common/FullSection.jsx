import React, { Children } from "react";

const FullSection = ({
  children,
  id,
  Style,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`block m-auto px-5 ${className}`}
      Style={Style}
    >
      {Children.map(children, (child) => {
        return child;
      })}
    </section>
  );
};

export default FullSection;
