import React, { useContext } from "react";
import { BlogCard } from "../../components/BlogCard";
import { BlogsContext } from "../../context/BlogsContext";

export const BlogPageList = () => {
  const { blogs } = useContext(BlogsContext);
  const ultimosDos = blogs.blogs.slice(0, 2);

  return (
    <div>
      {ultimosDos.length === 0 && <p>No hay publicaciones en el Blog</p>}
      {ultimosDos.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
