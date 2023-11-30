import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList () {
  const posts = blogData.posts;

  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} title={post.title} preview={post.preview} date={post.date} />
      ))}
    </main>
  );
}

export default ArticleList;
