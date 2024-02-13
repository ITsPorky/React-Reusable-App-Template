import React, { Children } from "react";

const Code = ({ children, className = "", Style }) => {
  return (
    <pre>
      <code className={className} Style={Style}>
        {Children.map(children, (child) => {
          return child;
        })}
      </code>
    </pre>
  );
};

export default Code;
