import React from 'react';
import "./MainCover.scss";
import coverImage from "../../images/cover.jpg";

const MainCover = () => {
    return <div className="main-cover" style={{backgroundImage: 'url(' + coverImage + ')',}}/>
}

export default MainCover;