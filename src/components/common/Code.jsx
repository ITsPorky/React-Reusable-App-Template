import React, { Children } from "react";

const Code = ({ children, className = "", Style }) => {
  return (
    <code className={className} Style={Style}>
      {Children.map(children, (child) => {
        return child;
      })}
    </code>
  );
};

export default Code;
