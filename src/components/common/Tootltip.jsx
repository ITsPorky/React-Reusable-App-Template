import React from "react";

const Tooltip = ({ element, text, position = "bottom" }) => {
  return (
    <div className="tooltip">
      {element}
      <span className={`tooltiptext ${position}`}>{text}</span>
    </div>
  );
};

export default Tooltip;
