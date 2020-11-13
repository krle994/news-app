import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Container from "../components/layout/Container";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/ui/Spinner";
import Title from "../components/Typography/Title";
import GridLayout from "../components/layout/GridLayout";

import { getTopArticles } from "../store/actions/news";

const StyledNewsCard = styled(NewsCard)`
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 2px 2px rgba(211, 214, 215, 0.2),
    0px 4px 4px rgba(211, 214, 215, 0.2), 0px 16px 16px rgba(211, 214, 215, 0.2),
    0px 32px 32px rgba(211, 214, 215, 0.2),
    0px 64px 64px rgba(211, 214, 215, 0.2);
  &:hover {
    box-shadow: 0px 2px 2px rgba(211, 214, 215, 0.5),
      0px 4px 4px rgba(211, 214, 215, 0.5),
      0px 16px 16px rgba(211, 214, 215, 0.5),
      0px 32px 32px rgba(211, 214, 215, 0.5),
      0px 64px 64px rgba(211, 214, 215, 0.5);
  }
`;

export default () => {
  const { name, code } = useSelector(({ country }) => country.selectedCountry);
  const articles = useSelector(({ news }) => news.topArticles);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const category = location.state ? location.state.category : null;

  useEffect(() => {
    dispatch(getTopArticles(category));
  }, [code]);

  const getTitle = () => {
    if (category) {
      return `${t("topCategoryTitle", { category, country: name })}`;
    }

    return `${t("topNewsTitle")} ${name}`;
  };

  const renderArticles = () => {
    return articles.length ? (
      <GridLayout>
        {articles.map(({ title, urlToImage, description, content }) => (
          <StyledNewsCard
            key={uuid()}
            title={title}
            imgSrc={urlToImage}
            description={description}
            content={content}
          />
        ))}
      </GridLayout>
    ) : (
      <Spinner />
    );
  };

  return (
    <Container>
      <Title>{getTitle()}</Title>
      {renderArticles()}
    </Container>
  );
};
