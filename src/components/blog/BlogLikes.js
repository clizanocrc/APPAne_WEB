import React, { useContext } from "react";
import { BlogsContext } from "../../context/BlogsContext";
import { BlogLikeItem } from "./BlogLikeItem";

export const BlogLikes = ({ id }) => {
  const { blogs } = useContext(BlogsContext);
  const likes = blogs.likes.filter((like) => like.blogentrada === id);
  return (
    <div>
      Esta publicación le gustó a
      {likes.map((like) => (
        <BlogLikeItem key={like.id} like={like} />
      ))}
    </div>
  );
};
