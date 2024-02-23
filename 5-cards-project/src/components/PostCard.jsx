import PropTypes from "prop-types";
import Card from "./Card";
import PostCover from "./Cover";
import Avatar from "./Avatar";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function PostCard({ post }) {
  return (
    <Card>
      <div className="content">
        <PostCover img={post.cover} />
        <div className="bottom-card">
          <div className="user-detail">
            <Avatar img={post.user.avatar} />
            <div>
              <h4>{post.user.name}</h4>
              <span className="username">@{post.user.username}</span>
            </div>
          </div>
          <button>
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
    </Card>
  );
}

PostCard.propType = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
