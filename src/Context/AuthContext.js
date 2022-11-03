import { createContext, useEffect, useState } from "react";

//Create and export our Context
export const AuthContext = createContext();

//Create and export our provider in order to wrap our app
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  //LOGIN
  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Stephanie Saint-Louis",
      profilePicture:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  //Everytime the currentUser state changed,the localstorage variable user will change also
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    //We use JSON.stringify because we cannot store an object in localstorage
  }, [currentUser]);

  //Return our provider
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
