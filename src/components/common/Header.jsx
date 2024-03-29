import React, { Children, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.svg";
import Tooltip from "./Tootltip";
import Drawer from "./Drawer";
import DarkMode from "./DarkMode";
import TopBar from "./TopBar";

const Header = ({ children }) => {
  return (
    <>
      <TopBar text="This is an example react.js template with reusable components..."/>
      <header className="flex py-1.5">
        {/* Nav Menu */}
        <nav className="nav-menu flex w-full h-auto justify-between items-center">
          <div className="flex flex-row items-center md:w-1/3">
            <a href="/React-Reusable-App-Template">
              <img src={Logo} alt="App Logo" className="logo" />
            </a>
            <p className="m-0">React Template</p>
          </div>
          {/* Nav Links */}
          <div className="md:w-2/3">
            {Children.map(children, (child) => {
              return <>{child}</>;
            })}
          </div>
          {/* Right Buttons */}
          <div className="flex flex-row justify-end md:w-1/3">
            <div>
              <Tooltip
                element={
                  <DarkMode
                    icon={
                      <FontAwesomeIcon icon={faCircleHalfStroke} fontSize={20} />
                    }
                  />
                }
                text="Light/Dark Mode"
                position="left"
              />
            </div>
            {/* Drawer menu */}
            <Drawer
              openIcon={<FontAwesomeIcon icon={faBars} fontSize={20} />}
              closeIcon={<FontAwesomeIcon icon={faXmark} fontSize={20} />}
            >
              {children}
            </Drawer>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
