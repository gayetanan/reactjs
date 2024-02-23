import PostCard from "./components/PostCard";
import PostCard2 from "./components/PostCard2";
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
const POST2={
  time:"2 weeks ago",
  body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat nostrum, quia cumque maxime ratione amet asperiores sapiente vero dicta quo molestias recusandae rem reiciendis reprehenderit doloremque consectetur ad aut.",
  likes:300,
  comments:"10k",
  save:50,
  user:{
    avatar,
    name:"Gaetan Emmanuel",
  }
}
function App() {
  return (
    <div className="container">
      <PostCard post={POST}/>
      <PostCard2 post={POST2}/>
    </div>
  );
}

export default App;
