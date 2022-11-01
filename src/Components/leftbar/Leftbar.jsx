import "./leftbar.scss";
const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="item-user">
          <img
            src="https://avatars.githubusercontent.com/u/39686386?v=4"
            alt=""
          />
          <span>Kender Romain</span>
        </div>
        <div className="item">
          <img src={require("../../assets/friend.png")} alt="" />
          <span>Friends</span>
        </div>
        <div className="item">
          <img src={require("../../assets/networking.png")} alt="" />
          <span>Groups</span>
        </div>
        <div className="item">
          <img src={require("../../assets/MarketPlace.png")} alt="" />
          <span>Marketplace</span>
        </div>
        <div className="item">
          <img src={require("../../assets/watch.png")} alt="" />
          <span>Watch</span>
        </div>
        <div className="item">
          <img src={require("../../assets/memory.png")} alt="" />
          <span>Memories</span>
        </div>
      </div>
      <hr/>
      <div className="container">
        <span className="title">Your Shortcuts</span>
        <div className="item">
          <img src={require("../../assets/calendar.png")} alt="" />
          <span>Events</span>
        </div>
        <div className="item">
          <img src={require("../../assets/gaming.png")} alt="" />
          <span>Gaming</span>
        </div>
        <div className="item">
          <img src={require("../../assets/picture.png")} alt="" />
          <span>Gallery</span>
        </div>
        <div className="item">
          <img src={require("../../assets/video-camera.png")} alt="" />
          <span>Videos</span>
        </div>
        <div className="item">
          <img src={require("../../assets/email.png")} alt="" />
          <span>Messages</span>
        </div>
      </div>
      <hr/>

      <div className="container">
        <span className="title">Others</span>
        <div className="item">
          <img src={require("../../assets/funds.png")} alt="" />
          <span>Fundraiser</span>
        </div>
        <div className="item">
          <img src={require("../../assets/ebook.png")} alt="" />
          <span>Tutorials</span>
        </div>
        <div className="item">
          <img src={require("../../assets/online-course.png")} alt="" />
          <span>Courses</span>
        </div>
      </div>

    </div>
  );
};

export default Leftbar;
