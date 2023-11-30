import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
  const posts = blogData.posts;

  // Function to calculate emojis based on reading time
  const calculateEmojis = (time) => {
    if (time < 30) {
      const coffeeEmojis = Math.ceil(time / 5);
      return "☕️".repeat(coffeeEmojis);
    } else {
      const bentoEmojis = Math.ceil(time / 10);
      return "🍱".repeat(bentoEmojis);
    }
  };

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          preview={post.preview}
          date={post.date}
          minutes={post.minutes} 
          emojis={calculateEmojis(post.minutes)}
        />
      ))}
    </main>
  );
}

export default ArticleList;

