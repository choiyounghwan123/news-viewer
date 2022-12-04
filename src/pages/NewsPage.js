import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <>
      <Categories />
      <NewsList category={category}></NewsList>
    </>
  );
};

export default NewsPage;
