import React, { Children, useState } from "react";

const Header = ({ props, children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="py-1.5">
      {/* Desktop Menu */}
      <nav className="nav-menu flex w-full h-auto justify-between items-center">
        <div className="px-5">
          <a href="/">
            <img src="" alt="App Logo" Style="max-width: 80px" />
          </a>
        </div>
        <ul className="nav-menu-items hidden md:flex flex-row px-5">
          {Children.map(children, child => {
            return <li className="px-5">{child}</li>;
          })}
        </ul>
        <div className="nav-menu-toggle-container block md:hidden px-5">
          <div className="nav-menu-toggle" onClick={toggleDrawer}>
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
      </nav>
      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${
          isDrawerOpen ? "open" : ""
        } fixed top-0 right-0 w-4/5 md:w-2/5`}
      >
        <div className="nav-menu-toggle-container mobile">
          <div className="nav-menu-toggle mobile" onClick={toggleDrawer}>
            <span class="material-symbols-outlined">close</span>
          </div>
        </div>
        <ul className="nav-menu-items mobile" onClick={toggleDrawer}>
          {Children.map(children, child => {
            return <li>{child}</li>;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
