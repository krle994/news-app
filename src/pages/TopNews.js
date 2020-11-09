import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Container from "../components/Container";
import NewsCard from "../components/NewsCard";
import Title from "../components/Typography/Title";

import { getArticles } from "../store/actions/news";

const TopNewsWrapper = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const TopNews = () => {
    const country = useSelector((state) => state.country.selectedCountry.name);
    const articles = useSelector((state) => state.news.articles);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    }, [country]);

    const renderArticles = () => {
        if (articles.length) {
            return articles.map((article) => (
                <NewsCard
                    key={uuid()}
                    title={article.title}
                    imgSrc={article.urlToImage}
                    description={article.description}
                    content={article.content}
                />
            ));
        }
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

export default TopNews;
