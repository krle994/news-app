import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

import Container from "../components/layout/Container";
import Title from "../components/Typography/Title";
import GridLayout from "../components/layout/GridLayout";
import NewsCard from "../components/NewsCard";

import { getSearchArticles } from "../store/actions/news";

const InputWrapper = styled.div`
  padding: 2rem;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  max-width: 400px;
  height: 40px;
  margin: auto;
  padding: 10px;
  font-size: 30px;
  border: 2px solid #d0d0d0;
  border-radius: 40px;
  outline: 0;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: #333;
  }
`;

export default () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const articles = useSelector(({ news }) => news.searchArticles);
  const { name, code } = useSelector(({ country }) => country.selectedCountry);

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timeoutid);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      if (debouncedTerm) {
        dispatch(getSearchArticles(debouncedTerm));
      }
    };

    search();
  }, [debouncedTerm, code]);

  const renderSearchResults = () =>
    articles && articles.length ? (
      <GridLayout>
        {articles.map(({ title, urlToImage, description, content }) => (
          <NewsCard
            key={uuid()}
            title={title}
            imgSrc={urlToImage}
            description={description}
            content={content}
          />
        ))}
      </GridLayout>
    ) : null;

  return (
    <Container>
      <Title>{t("searchTitle", { country: name })}</Title>
      <InputWrapper>
        <SearchInput value={term} onChange={(e) => setTerm(e.target.value)} />
      </InputWrapper>
      {renderSearchResults()}
    </Container>
  );
};
