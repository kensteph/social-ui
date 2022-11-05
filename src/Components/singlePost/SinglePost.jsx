import "./singlePost.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import Comment from "../comment/Comment";
import { useState } from "react";


const SinglePost = ({post}) => {
    const liked = false;
    const [openComment,setOpenComment]= useState(false);
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
                <Link style={{textDecoration : "none",color:"inherit"}} to={`/profile/${post.userID}`}>
                    <span className="user-name">{post.name}</span>
                </Link>
              <span>a few seconds ago</span>
            </div>
          </div>
          <span className="actions">...</span>
        </div>

        {/* BODY */}
        <div className="postBody">
          <p>
           {post.description}
          </p>
          <div className="media-section">
            <img
              src={post.postImage}
              alt=""
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="postFooter">
          <div className="item">
            { liked ? <FavoriteOutlinedIcon/> :<FavoriteBorderOutlinedIcon /> }<span>12 Likes</span>
          </div>
          <div className="item" onClick={()=>setOpenComment(!openComment)}>
            <TextsmsOutlinedIcon /> <span>3 Comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon /> <span>Share</span>
          </div>
        </div>

         {/* COMMENTS */}
       {openComment && <Comment comments={post.comments}/>} 
    </div>
  )
}

export default SinglePost