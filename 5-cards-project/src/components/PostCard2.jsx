import PropTypes from "prop-types";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";
import Card from "./Card";
import Avatar from "./Avatar";
import avatar from "../assets/avatar.jpeg";

function PostCard2({ post }) {
  return (
    <Card>
      <div
        className="content"
        style={{
          display: "grid",
          gridTemplateColumns: "48px auto",
          gap: "8px",
        }}
      >
        <Avatar img={avatar} />
        <div>
          <div className="post-header">
            <div>
              <h4 className="name">{post.user.name}</h4>
              <span>&#x2022;</span>
              <span className="time">{post.time}</span>
            </div>
            <button>
              <BiDotsHorizontalRounded />
            </button>
          </div>
          <div className="post-body">{post.body}</div>
          <div className="post-footer">
            <button>
              <BiHeart /> <span>{post.likes}</span>
            </button>
            <button>
              <BiMessage /> <span>{post.comments}</span>
            </button>
            <button>
              <BiBookmark /> <span>{post.save}</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
PostCard2.propTypes = {
  post: PropTypes.object.isRequired,
};
export default PostCard2;
