import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./comment.scss";

const Comment = ({comments}) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="comment-form">
        <img src={currentUser.profilePicture} alt="" srcset="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      <div className="user-comments">
        <img src={currentUser.profilePicture} alt="" srcset="" />
        <div className="comment">
        <p>
          <strong>{currentUser.name}</strong><br/>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        </div>
        <span>1 hour ago</span>
      </div>
      <div className="user-comments">
        <img src="https://avatars.githubusercontent.com/u/28353673?s=100&v=4" alt="" srcset="" />
        <div className="comment">
        <p>
          <strong>Hans</strong><br/>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        </div>
        <span>1 hour ago</span>
      </div>
    </div>
  );
};

export default Comment;
