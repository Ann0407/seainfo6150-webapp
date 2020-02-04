import React from "react";

const ArticleListItem = ( {article} ) => {
    return(
        <div>
            <h3>{article.title}</h3>
            <p>{article.shortText}</p>
            <time>{article.pubDate}</time>
            <button onClick={() => alert(article.slug)}>show article slug</button>
        </div>
    );
};

export default ArticleListItem;
