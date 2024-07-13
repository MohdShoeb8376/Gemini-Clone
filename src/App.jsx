import React, { useState, useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <>
    <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <Main />
    </>
  )
}

export default App