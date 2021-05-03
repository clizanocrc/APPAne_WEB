import React, { useContext } from "react";
import { BlogCard } from "../../components/BlogCard";
import { NavbarLeft } from "../../components/ui/NavbarLeft";
import { BlogsContext } from "../../context/BlogsContext";

export const BlogsPage = () => {
  const { blogs } = useContext(BlogsContext);

  return (
    // <div>
    <div className="flexbox-container">
      <div className="col-md-2">
        <NavbarLeft />
      </div>

      <div
        className="flexbox-container-col col-md-9"
        style={{ height: "85vh", overflowY: "scroll" }}
      >
        <div>
          {blogs.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};
