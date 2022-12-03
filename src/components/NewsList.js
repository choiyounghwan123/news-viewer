import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loding, setLoding] = useState(false);
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e383a4b1c6ec4128adc4618aa4ceb835`
        );

        setArticles(response.data.articles, category);
      } catch (e) {
        console.error(e);
      }
      setLoding(false);
    };
    fetchData();
  }, [category]);

  if (loding) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((a, i) => {
        return <NewsItem key={a.url} article={a}></NewsItem>;
      })}
    </NewsListBlock>
  );
};

export default NewsList;
