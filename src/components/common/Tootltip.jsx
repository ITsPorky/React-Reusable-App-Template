import React from "react";

const Tooltip = ({ element, tooltipText, position = "bottom" }) => {
  return (
    <div className="tooltip">
      {element}
      <span className={`tooltiptext ${position}`}>{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
