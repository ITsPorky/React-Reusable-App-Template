import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Demo from './components/pages/Demo';
import Home from './components/pages/Home';


function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('dark-mode')) || false
  );

  // Run on Component load
  useEffect(() => {
    applyDarkMode(darkMode);
  })

  const toggleDarkMode = () => {
    localStorage.setItem('dark-mode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
    applyDarkMode(darkMode);
  };

  const applyDarkMode = (bool) => {
    // Set Body element colours
    if(!bool) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <div className={`App`}>
      <Router>
        <Header darkModeCallback={toggleDarkMode}>
          <Link to='/React-Reusable-App-Template'>Home</Link>
          <Link to='/React-Reusable-App-Template/demo'>Demo</Link>
          <Link to='#'>Services</Link>
          <Link to='#'>Contact</Link>
        </Header>
        <main>
          <Routes>
            <Route path='/React-Reusable-App-Template' Component={Home} element={ <Navigate to='/React-Reusable-App-Template' /> }/>
            <Route path='/React-Reusable-App-Template/demo' Component={Demo}/>
            <Route path='/redirect' element={ <Navigate to='/not-found' /> } />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
