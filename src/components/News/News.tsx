import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios, {AxiosRequestConfig} from "axios";
import {getAppTheme} from "../../store/selectors/app-selectors";
import {NewsResponceType} from "../../types";
import {Avatar, List, Skeleton} from "antd";

const News: React.FC = () => {
  const appTheme = useSelector(getAppTheme);
  const [news, setNews] = useState<Array<NewsResponceType>>([]);

  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: {safeSearch: 'Off', textFormat: 'Raw'},
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'fc3f6049f1msh47037b11ea5133ap1a833bjsn5f8867f5dcc2'
      }
    };

    axios.request(options).then((response) => {
      setNews(response.data.value);
    }).catch((error) => {
      console.error(error);
    });
    return function cleanup() {
      setNews([])
    }
  }, [])


  return (
    <section className={`default-box default-box--${appTheme}`} style={{padding: '16px'}}>
      <List
        className="demo-loadmore-list"
        loading={!news.length}
        itemLayout="vertical"
        dataSource={news}
        renderItem={item => (
          <List.Item>
            <Skeleton avatar title={true} loading={!news.length} active>
              <List.Item.Meta
                avatar={<Avatar src={item.image?.thumbnail?.contentUrl}/>}
                title={<a href="https://vk.com/rewq_99">{item.name}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>{item.description}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </section>
  );
}

export default News;
