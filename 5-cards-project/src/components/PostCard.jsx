import Card from "./Card";
import PostCover from "./Cover";
import Avatar from "./Avatar";
import { HiDotsHorizontal } from "react-icons/hi";



function PostCard({cover,avatar}){
    return(
        <Card>
            <div className="content">
               <PostCover img={cover} />
               <div className="bottom-card">
                  <div className="user-detail">
                    <Avatar img={avatar}/>
                    <div>
                        <h4>Gaetan Emmanuel</h4>
                        <span className="username">@gayetan.an</span>
                    </div>
                  </div>
                  <button>
                    <HiDotsHorizontal/>
                  </button>
               </div>
            </div>
        </Card>
    )
}

export default PostCard