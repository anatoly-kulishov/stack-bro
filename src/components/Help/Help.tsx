import React from 'react';
import {useSelector} from "react-redux";
// import styles from './Help.module.scss';
import Mock from "../common/Mock";
import {getAppState} from "../../store/selectors/app-selectors";

const Help: React.FC = () => {
    const {theme} = useSelector(getAppState);

    return (
        <section className={`default-box default-box--${theme}`}>
            <Mock/>
        </section>
    );
}

export default Help;