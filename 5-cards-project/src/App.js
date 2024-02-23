import PostCard from "./components/PostCard";
import cover from "./assets/post.jpg"
import avatar from "./assets/avatar.jpeg"

const POST = {
  cover,
  user:{
    avatar,
    name:"Gaetan Emmanuel",
    username:"gayetan.an"
  }
}

function App() {
  return (
    <div className="container">
      <PostCard post={POST}/>
    </div>
  );
}

export default App;
