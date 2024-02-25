import Post from "./Post";

export default function Posts() {
  return (
    <div>
      <Post
        title="I'm a post"
        body="Hello world !"
        isPublic={false}
        upVotes={3000}
        comments={[{ user: "gayetan.an", body: "ok" }]}
      />
      <Post
        title="I'm a post"
        body="Hello world !"
        isPublic={true}
        upVotes={3000}
        // comments={[{ user: "gayetan.an", body: "ok" }]}
      />
    </div>
  );
}
