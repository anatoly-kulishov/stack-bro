import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
// import styles from './News.module.scss';
import Mock from "../common/Mock";
import {getAppTheme} from "../../store/selectors/app-selectors";

const News: React.FC = () => {
    const appTheme = useSelector(getAppTheme);
    const [news, setNews] = useState<Array<any>>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setNews(json))
    }, [])

    console.log(news)

    return (
        <section className={`default-box default-box--${appTheme}`}>
            {/*{news?.map((el: any) => el.title)}*/}
            <Mock/>
        </section>
    );
}

export default News;
