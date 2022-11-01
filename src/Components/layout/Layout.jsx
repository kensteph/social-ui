import { Outlet } from "react-router-dom";
import Navbar from "../../Components/navbar/Navbar";
import Leftbar from "../../Components/leftbar/Leftbar";
import Rightbar from "../../Components/rightbar/Rightbar";
import "./layout.scss"
const Layout = () => {
  /* This element (OUTELT ) will render either <Home> when the URL is
          "/", <Profile> at "/profile:id", or null if it is "/"
      */
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div className="pageContent">
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Layout;
