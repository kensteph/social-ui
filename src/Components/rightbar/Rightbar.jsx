import "./rightbar.scss";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span className="title">Suggestions for you</span>
          <div className="suggestions">
            <div className="friend">
              <img
                src="https://avatars.githubusercontent.com/u/39686386?v=4"
                alt=""
              />
              <span className="user">Roodson Romain</span>
            </div>
            <div className="buttons">
              <button className="follow">Follow</button>
              <button className="dismiss">Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span className="title">Latest Activities</span>
          
          <div className="suggestions">
            <div className="friend">
              <img
                src="https://avatars.githubusercontent.com/u/108381564?s=100&v=4"
                alt=""
              />
              <span className="user">Mubarak</span>
              <span>Changed her cover picture </span>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="suggestions">
            <div className="friend">
              <img
                src="https://avatars.githubusercontent.com/u/28353673?s=100&v=4"
                alt=""
              />
              <span className="user">Hans</span>
              <span>Like a post </span>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
          <div className="suggestions">
            <div className="friend">
              <img
                src="https://avatars.githubusercontent.com/u/39686386?v=4"
                alt=""
              />
              <span className="user">Roodson Romain</span>
              <span>Posted </span>
            </div>
            <div className="buttons">
              <span>1 min ago</span>
            </div>
          </div>
         
        </div>

        <div className="item">
          <span className="title">Online Friends</span>
         
          <div className="suggestions">
            <div className="online">
              <div className="friend-online">
                <img
                  src="https://avatars.githubusercontent.com/u/39686386?v=4"
                  alt=""
                />
                <div className="badge"></div>
              </div>
              <span className="user">Roodson Romain</span>
            </div>
          </div>
          <div className="suggestions">
            <div className="online">
              <div className="friend-online">
                <img
                  src="https://avatars.githubusercontent.com/u/28353673?s=100&v=4"
                  alt=""
                />
                <div className="badge"></div>
              </div>
              <span className="user">Hans </span>
            </div>
          </div>
          <div className="suggestions">
            <div className="online">
              <div className="friend-online">
                <img
                  src="https://avatars.githubusercontent.com/u/108381564?s=100&v=4"
                  alt=""
                />
                <div className="badge"></div>
              </div>
              <span className="user">Mubarak</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rightbar;
