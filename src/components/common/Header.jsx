import React, { Children, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../logo.svg';

const Header = ({ props, children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="py-1.5">
      {/* Desktop Menu */}
      <nav className="nav-menu flex w-full h-auto justify-between items-center">
        <div>
          <a href="/">
            <img src={Logo} alt="App Logo" className="app-logo" Style="max-width: 80px" />
          </a>
        </div>
        <ul className="nav-menu-items hidden md:flex flex-row px-5">
          {Children.map(children, child => {
            return <li className="px-5">{child}</li>;
          })}
        </ul>
        <div className="nav-menu-toggle-container block md:hidden px-5">
          <div className="nav-menu-toggle" onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faBars} fontSize={28}/>
          </div>
        </div>
      </nav>
      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${
          isDrawerOpen ? "open" : ""
        }`}
      >
        <div className="nav-menu-toggle-container mobile">
          <div className="nav-menu-toggle mobile" onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faXmark} fontSize={28} />
          </div>
        </div>
        <ul className="nav-menu-items mobile" onClick={toggleDrawer}>
          {Children.map(children, child => {
            return <li className="w-full">{child}</li>;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
