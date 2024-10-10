import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div classname="container">
        <div classname="square">
          <img src={blog.image} alt="blog" className="blog-card-image mask" />
          <div classname="blog-card-title">{blog.title}</div>
          <p className="blog-card-subtitle">{blog.description}</p>

          <div>
            <a href={blog.url} target="_" classname="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
