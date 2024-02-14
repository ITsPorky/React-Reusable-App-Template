import React from "react";

const Button = ({ id, className = "", Style, text, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`btn ${className}`}
      Style={Style}
    >
      {text}
    </a>
  );
};

export default Button;
