import React, { Children, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../logo.svg';
// import Menu from "./Menu";

const Header = ({ children, darkModeCallback }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    // Lock Scrolling when draw is open
    if(!isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className="py-1.5">
      {/* Nav Menu */}
      <nav className="nav-menu flex w-full h-auto justify-between items-center">
        <div className="flex flex-row items-center md:w-1/3">
          <a href="/">
            <img src={Logo} alt="App Logo" className="logo" />
          </a>
          <p>React Template</p>
        </div>
        <ul className="nav-menu-items hidden md:flex flex-row justify-center md:w-2/3 px-5">
          {Children.map(children, child => {
            return <li className="px-5">{child}</li>;
          })}
        </ul>
        <div className="flex flex-row justify-end md:w-1/3">
          <div className="nav-darkmode-toggle-container block px-2">
            <div className="nav-darkmode-toggle p-2 cursor-pointer" onClick={darkModeCallback}>
              <FontAwesomeIcon icon={faCircleHalfStroke} fontSize={20}/>
            </div>
          </div>
          <div className="nav-menu-toggle-container block md:hidden px-2">
            <div className="nav-menu-toggle p-2 cursor-pointer" onClick={toggleDrawer}>
              <FontAwesomeIcon icon={faBars} fontSize={20}/>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${
          isDrawerOpen ? "open" : ""
        } md:hidden`}
      >
        <div className="nav-menu-toggle-container mobile">
          <div className="nav-menu-toggle mobile py-1.5" onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faXmark} fontSize={20} />
          </div>
        </div>
        <ul className="nav-menu-items mobile">
          {Children.map(children, child => {
            return <li className="w-full" onClick={toggleDrawer}>{child}</li>;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
