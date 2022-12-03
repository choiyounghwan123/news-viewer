import React from "react";
import { css } from "styled-components";
import styled from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비지니스",
  },
  {
    name: "entertainment",
    text: "엔터테이먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sprots",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768;
  margin: 0 auto;
  @media screen and (max-width: 768) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Categorie = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((a, i) => (
        <Categorie
          key={a.name}
          active={category === a.name}
          onClick={() => onSelect(a.name)}
        >
          {a.text}
        </Categorie>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
