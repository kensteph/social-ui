import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const {toggle,darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  
  return (
    <div className="navbar">
      <div className="left">
        <span className="logo">LINK SOCIAL</span>
        <HomeOutlinedIcon />
        {darkMode ? <DarkModeOutlinedIcon onClick={toggle} /> : <LightModeIcon onClick={toggle} />}
        
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input placeholder="Search" />
        </div>
      </div> 
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={currentUser?.profilePicture}
            alt=""
          />
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
