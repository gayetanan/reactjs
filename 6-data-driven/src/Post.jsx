// conditional rendering
export default function Post({ title, body, isPublic, comments }) {
  const postTitle = title ? <h1>{title}</h1> : null;
  return (
    <div style={{ opacity: isPublic ? 1 : 0.5 }}>
      {postTitle}
      {/* short circuit */}
      {body && <p>{body}</p>}
      {comments && (
        // <ul>
        //   <li>
        //     <h3>{comments[0].user}</h3>
        //     <p>{comments[0].body}</p>
        //   </li>
        // </ul>
        <ul>
          {comments.map((comment) => {
            return (
              <li>
                <h3>{comment.user}</h3>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
