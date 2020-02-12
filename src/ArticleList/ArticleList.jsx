import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem.jsx";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <ul className={styles.div} key={article.slug}>{ArticleListItem({article})}</ul>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
