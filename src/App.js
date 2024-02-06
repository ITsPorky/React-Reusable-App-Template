import React, { useState } from 'react';
import './App.css';
import Header from './components/common/Header';
import Demo from './components/pages/Demo';
import Home from './components/pages/Home';


function App() {
  const [darkMode, setDarkMode] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : '' }`}>
      <Header darkModeCallback={toggleDarkMode}>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Services</a>
        <a href='/'>Contact</a>
      </Header>
      <main>
        <Home />
        <Demo />
      </main>
    </div>
  );
}

export default App;
