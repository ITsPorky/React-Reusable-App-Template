import React, { useEffect, useState } from "react";

const DarkMode = ({ icon, text }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );

  // Run on Component load
  useEffect(() => {
    applyDarkMode(darkMode);
  });

  const toggleDarkMode = () => {
    localStorage.setItem("dark-mode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
    applyDarkMode(darkMode);
  };

  const applyDarkMode = (bool) => {
    // Set Body element colours
    if (!bool) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="nav-darkmode-toggle-container block px-2">
      <div
        className="nav-darkmode-toggle p-2 cursor-pointer"
        onClick={toggleDarkMode}
      >
        {icon} {text}
      </div>
    </div>
  );
};

export default DarkMode;
