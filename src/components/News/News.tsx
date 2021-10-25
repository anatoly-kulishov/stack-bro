import React from 'react';
import {useSelector} from "react-redux";
// import styles from './News.module.scss';
import Mock from "../common/Mock";
import {getAppTheme} from "../../store/selectors/app-selectors";

const News: React.FC = () => {
    const appTheme = useSelector(getAppTheme);

    return (
        <section className={`default-box default-box--${appTheme}`}>
            <Mock/>
        </section>
    );
}

export default News;
