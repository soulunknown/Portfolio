import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} style={{ marginBottom: "1.5rem" }}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.summary}</p>
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
