import SinglePost from "../singlePost/SinglePost";
import "./posts.scss";
import {posts} from "../../data/dummy";

const Posts = () => {
  console.log(posts)
  return (
    <div className="posts">
      {posts.map( post=>(
        <SinglePost post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Posts;
