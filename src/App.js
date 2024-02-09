import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Demo from "./components/pages/Demo";
import Home from "./components/pages/Home";
import NavMenu from "./components/common/Menu/NavMenu";
import NavItem from "./components/common/Menu/NavItem";
import DropdownMenu from "./components/common/Menu/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className={`App`}>
      <Router>
        <Header>
          {/* Nav menu */}
          <NavMenu>
            <NavItem link={"/React-Reusable-App-Template"} name={"Home"} />
            <NavItem link={"/React-Reusable-App-Template/demo"} name={"Demo"} />
            <NavItem
              link={"#"}
              name={"Dropdown"}
              iconRight={<FontAwesomeIcon icon={faChevronDown} />}
            >
              <DropdownMenu>
                <NavItem link={"/React-Reusable-App-Template"} name={"Home"} />
                <NavItem
                  link={"/React-Reusable-App-Template/demo"}
                  name={"Demo"}
                />
                <NavItem link={"#"} name={"Contact"} />
              </DropdownMenu>
            </NavItem>
            <NavItem link={"#"} name={"Contact"} />
          </NavMenu>
          {/* END NavMenu END */}
        </Header>
        <main>
          <Routes>
            <Route
              path="/React-Reusable-App-Template"
              Component={Home}
              element={<Navigate to="/React-Reusable-App-Template" />}
            />
            <Route path="/React-Reusable-App-Template/demo" Component={Demo} />
            <Route path="/redirect" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
