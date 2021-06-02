import React from 'react';
import styles from "./MainCover.module.scss";
import coverImage from "../../../assets/img/cover.jpg";

const MainCover: React.FC = () => {
    return <div className={styles.bgImage} style={{backgroundImage: 'url(' + coverImage + ')',}}/>
}

export default MainCover;