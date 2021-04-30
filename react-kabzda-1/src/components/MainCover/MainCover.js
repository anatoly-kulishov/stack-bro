import React from 'react';
import "./MainCover.css";
import coverImage from "../../images/cover.png";

const MainCover = () => {
    return <div className="main-cover" style={{backgroundImage: 'url(' + coverImage + ')',}}/>
}

export default MainCover;