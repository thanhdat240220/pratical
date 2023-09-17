import React from "react";
import styles from './index.less';
import Card from "../Card";


export default function CardList({
    collections
}) {
    return (
        <div className={styles.CardList}>
            {collections.map((girlCard, index) => (
                <Card
                    key={index}
                    title={girlCard.title}
                    description={girlCard.description}
                    imageSource={girlCard.imageSource}
                />
            ))}
        </div>
    )
}
