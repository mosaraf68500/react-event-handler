import React from "react";

const Post = ({ post }) => {
  const { body, title, userId } = post;
  return (
    <div className="card">
    <h1>{userId} </h1>
      <p>{title}</p>

      <p>{body}</p>
    </div>
  );
};

export default Post;
