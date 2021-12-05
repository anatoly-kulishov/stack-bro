import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Mock from "../common/Mock";
import {getAppTheme} from "../../store/selectors/app-selectors";

const News: FC = () => {
  const appTheme = useSelector(getAppTheme);
  const [news, setNews] = useState<Array<{ title: string }>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setNews(json))
  }, [])

  return (
    <section className={`default-box default-box--${appTheme}`}>
      {news?.map((el: { title: string }) => el.title)}
      <Mock/>
    </section>
  );
}

export default News;
