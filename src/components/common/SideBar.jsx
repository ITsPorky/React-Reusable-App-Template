import React, { Children, forwardRef, useState } from "react";

const SideBar = forwardRef(
  (
    {
      children,
      title,
      position = "left",
      toggleable = true,
      collapsedWidth = 50,
      maxWidth = 250,
    },
    ref
  ) => {
    const [isOpen, setOpen] = useState(true);
    const [styles, setStyles] = useState({ display: "" });

    const toggleOpen = () => {
      if (isOpen) {
        setOpen(false);
        updateStyles(false);
      } else {
        setOpen(true);
        updateStyles(true);
      }
    };

    const updateStyles = (open) => {
      if (open === false) {
        setStyles({
          display: "none",
        });
      } else {
        setStyles({
          display: "",
        });
      }
    };

    return (
      <aside
        ref={ref}
        className={`sidebar ${position} ${isOpen ? "open" : ""}`}
        style={{
          maxWidth: `${isOpen ? maxWidth : collapsedWidth}px`,
        }}
      >
        <div className="sidebar-header position-relative">
          <h4 style={styles}>{title}</h4>
          {toggleable && (
            <span
              className="material-symbols-outlined sidebar-toggle"
              onClick={toggleOpen}
            >
              chevron_left
            </span>
          )}
        </div>

        <div className="sidebar-body">
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: styles.display,
            }}
          >
            {Children.map(children, (child) => {
              return <li>{child}</li>;
            })}
          </ul>
        </div>
      </aside>
    );
  }
);

export default SideBar;
