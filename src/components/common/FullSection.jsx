import React, { Children } from "react";

const FullSection = ({
  children,
  id,
  Style,
  className = "",
  backgroundColor = "",
  backgroundImage = "",
}) => {
  return (
    <section id={id} className={`block m-auto ${className}`} Style={Style}>
      {Children.map(children, (child) => {
        return child;
      })}
    </section>
  );
};

export default FullSection;
