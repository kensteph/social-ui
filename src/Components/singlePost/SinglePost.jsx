import "./singlePost.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";


const SinglePost = ({post}) => {
  return (
    <div className="post">
        {/* HEADER */}
        <div className="postHeader">
          <div className="user">
            <img
              className="img-user"
              src="https://avatars.githubusercontent.com/u/108381564?s=100&v=4"
              alt=""
            />
            <div className="user-info">
              <span className="user-name">Mubarak Hossein</span>
              <span>a few seconds ago</span>
            </div>
          </div>
          <span className="actions">...</span>
        </div>

        {/* BODY */}
        <div className="postBody">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="media-section">
            <img
              src="https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="postFooter">
          <div className="item">
            <FavoriteBorderOutlinedIcon /> <span>Likes</span>
          </div>
          <div className="item">
            <TextsmsOutlinedIcon /> <span>Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon /> <span>Share</span>
          </div>
        </div>
      </div>
  )
}

export default SinglePost