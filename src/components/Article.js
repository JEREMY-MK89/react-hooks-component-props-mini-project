import React from "react";


function Article ({title, date, preview, minutes}) {
  return (
    <article>
<h3>{title}</h3>
<small>{date}</small><span>{minutes}min read</span>
<p>{preview} </p>
</article>
  );
}

export default Article;