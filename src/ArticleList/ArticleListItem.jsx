import React from "react";
import SlugButton from "./SlugButton.jsx"
import styles from "./ArticleListItem.module.css";

const ArticleListItem = ( {article} ) => {
    return(
        <div>
            <h3 className={styles.header}>{article.title}</h3>
            <p>{article.shortText}</p>
            <time>{article.pubDate}</time>
            <SlugButton buttonText={article.author} slug={article.slug} />
        </div>
    );
};

export default ArticleListItem;
