import React, { Children } from "react";

const Section = ({
  children,
  id,
  Style,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`block max-w-screen-xl m-auto mx-5 ${className}`}
      Style={Style}
    >
      {Children.map(children, (child) => {
        return child;
      })}
    </section>
  );
};

export default Section;
