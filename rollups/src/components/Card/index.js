import styles from './index.less';
import React from "react";

export default function Card({
    title,
    description,
    imageSource,
}) {
    return (
        <div className={styles.Card}>
            <div className={styles.image}>
                <img src={imageSource} alt={title} loading="lazy"/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: '',
    description: '',
    imageSource: null
}
