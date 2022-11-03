import { Outlet } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Leftbar from "../../Components/leftbar/Leftbar";
import Rightbar from "../../Components/rightbar/Rightbar";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
const Layout = () => {
  /* This element (OUTELT ) will render either <Home> when the URL is
          "/", <Profile> at "/profile:id", or null if it is "/"
   50931194941   */

   const {darkMode} = useContext(DarkModeContext);
console.log(darkMode)
  return (
   
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div  style={{flex:6}}>
          <Outlet  />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Layout;
