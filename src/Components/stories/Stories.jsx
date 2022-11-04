import "./stories.scss";
import { stories } from "../../data/dummy";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser?.profilePicture} alt="" />
        <span>{currentUser?.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
