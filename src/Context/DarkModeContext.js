import { createContext, useEffect, useState } from "react";

// Create and export our context
export const DarkModeContext = createContext();

//Create and export our provider in order to wrap our App

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };
  //Everytime the value of darkMode change the localstorage variable will change also
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
