// conditional rendering
export default function Post({ title, desc }) {
  const postTitle = title ? <h1>{title}</h1> : null;
  return (
    <div>
      {postTitle}
      {/* short circuit */}
      {desc && <p>{desc}</p>}
    </div>
  );
}
