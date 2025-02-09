import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Demo from "./components/pages/Demo";
import Home from "./components/pages/Home";
import JDMAppCoreDemo from "./components/pages/JDMAppCoreDemo";
import NavMenu from "./components/common/Menu/NavMenu";
import NavItem from "./components/common/Menu/NavItem";
import DropdownMenu from "./components/common/Menu/DropdownMenu";
import Docs from "./components/pages/Docs";

function App() {
  return (
    <div className={`App`}>
      <Router>
        <Header>
          {/* Nav menu */}
          <NavMenu>
            <NavItem link={"/React-Reusable-App-Template"} name={"Home"} />
            <NavItem link={"/React-Reusable-App-Template/docs"} name={"Docs"} />
            <NavItem link={"#"} name={"Dropdown"}>
              <DropdownMenu>
                <NavItem link={"/React-Reusable-App-Template"} name={"Home"} />
                <NavItem
                  link={"/React-Reusable-App-Template/demo"}
                  name={"Demo"}
                />
                <NavItem
                  link={"/React-Reusable-App-Template/jdmappcoredemo"}
                  name={"JDMAppCoreDemo"}
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
            <Route path="/React-Reusable-App-Template/docs" Component={Docs} />
            <Route path="/React-Reusable-App-Template/demo" Component={Demo} />
            <Route
              path="/React-Reusable-App-Template/jdmappcoredemo"
              Component={JDMAppCoreDemo}
            />
            <Route
              path="/React-Reusable-App-Template/docs"
              element={<Navigate to={Docs} />}
            />
            <Route
              path="/React-Reusable-App-Template/demo"
              element={<Navigate to={Demo} />}
            />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
