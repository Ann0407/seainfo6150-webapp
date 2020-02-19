import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = ({url, title}) => {
    return(
    <div>
        <img className={styles.circle} title={title} src={url} required pattern="https?://.+"/>
    </div>
    );
};

export default ArticleImage;