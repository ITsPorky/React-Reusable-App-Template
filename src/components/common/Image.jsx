import React from "react";

const Image = ({ src, alt, className = "", Style }) => {
  return (
    <img src={src} alt={alt} className={`w-full ${className}`} Style={Style} />
  );
};

export default Image;
