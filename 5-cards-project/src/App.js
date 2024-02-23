import PostCard from "./components/PostCard";
import cover from "./assets/post.jpg"
import avatar from "./assets/avatar.jpeg"


function App() {
  return (
    <div className="container">
      <PostCard cover={cover} avatar={avatar}/>
    </div>
  );
}

export default App;
