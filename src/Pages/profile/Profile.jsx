import "./profile.scss";
import {
  Facebook,
  Instagram,
  LanguageTwoTone,
  LinkedIn,
  LocationOnTwoTone,
  MailOutline,
  MoreVertOutlined,
  Twitter,
} from "@mui/icons-material";
import Posts from "../../Components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src="https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <img
          className="avatar"
          src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="user-info">
          <span className="user-name">Stephanie Saint-Louis</span>
          <div className="info">
            <div className="left">
              <div className="item">
                <Facebook />
              </div>
              <div className="item">
                <Instagram />
              </div>
              <div className="item">
                <Twitter />
              </div>
              <div className="item">
                <LinkedIn />
              </div>
            </div>
            <div className="center">
              <div className="item">
                <LocationOnTwoTone />
                <span>HAITI</span>
              </div>
              <div className="item">
                <LanguageTwoTone />
                <span>link-social.com</span>
              </div>
            </div>
            <div className="right">
              <div className="item">
                {" "}
                <MailOutline />
              </div>
              <div className="item">
                <MoreVertOutlined />
              </div>
            </div>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <Posts/>
    </div>
  );
};

export default Profile;
