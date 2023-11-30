import React from "react";


function Article ({title, date, preview, minutes}) {
   // Function to calculate emojis based on reading time
   const calculateEmojis = (time) => {
    if (time < 30) {
      const coffeeEmojis = Math.ceil(time/ 5);
      return "☕️".repeat(coffeeEmojis);
    } else {
      const bentoEmojis = Math.ceil(time/ 10);
      return "🍱".repeat(bentoEmojis);
    }
  };
  return (
    <article>
<h3>{title}</h3>
<small>{date}</small><span>{calculateEmojis(minutes)} {minutes} min read</span>
<p>{preview} </p>
</article>
  );
}

export default Article;