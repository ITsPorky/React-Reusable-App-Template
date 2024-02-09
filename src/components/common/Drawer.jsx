import React, { useState, Children } from "react";

const Drawer = ({ children, openIcon, closeIcon, text }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    // Lock Scrolling when draw is open
    if (!isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <div className="nav-menu-toggle-container block md:hidden px-2">
        <div
          className="nav-menu-toggle p-2 cursor-pointer"
          onClick={toggleDrawer}
        >
          {openIcon}
        </div>
      </div>
      <div className={`drawer ${isDrawerOpen ? "open" : ""} md:hidden`}>
        <div className="nav-menu-toggle-container py-1.5">
          <div className="nav-menu-toggle" onClick={toggleDrawer}>
            {closeIcon} {text}
          </div>
        </div>
        {/* Child Content */}
        {Children.map(children, (child) => {
          return <>{child}</>;
        })}
      </div>
    </>
  );
};

export default Drawer;
