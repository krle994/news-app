import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Container from "../components/Container";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import Title from "../components/Typography/Title";

import { getArticles } from "../store/actions/news";

const TopNewsWrapper = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const StyledNewsCard = styled(NewsCard)`
    transition: box-shadow 0.3s ease;
    box-shadow: 0px 2px 2px rgba(211, 214, 215, 0.2),
        0px 4px 4px rgba(211, 214, 215, 0.2),
        0px 16px 16px rgba(211, 214, 215, 0.2),
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
    const country = useSelector((state) => state.country.selectedCountry.name);
    const articles = useSelector((state) => state.news.articles);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    }, [country]);

    const renderArticles = () => {
        return articles.length
            ? articles.map((article) => (
                  <StyledNewsCard
                      key={uuid()}
                      title={article.title}
                      imgSrc={article.urlToImage}
                      description={article.description}
                      content={article.content}
                  />
              ))
            : <Spinner />;
    };

    return (
        <Container>
            <Title>
                {t("topNewsTitle")} {country}
            </Title>
            <TopNewsWrapper>{renderArticles()}</TopNewsWrapper>
        </Container>
    );
};
