import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import Container from "../components/Container";
import NewsCard from "../components/NewsCard";

import { getArticles } from "../store/actions/news";

const TopNewsWrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const StyledTitle = styled.h2`
    font-size: ${(props) => props.theme.fontSize.large};
`;

const TopNews = () => {
    const country = useSelector((state) => state.country.selectedCountry.name);
    const articles = useSelector((state) => state.news.articles);
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    }, []);

    const renderArticles = () => {
        if (articles.length) {
            return articles.map((article) => (
                <NewsCard
                    key={uuid()}
                    title={article.title}
                    imgSrc={article.urlToImage}
                    description={article.description}
                />
            ));
        }
    };

    return (
        <Container>
            <StyledTitle>
                {t("topNewsTitle")} {country}
            </StyledTitle>
            <TopNewsWrapper>{renderArticles()}</TopNewsWrapper>
        </Container>
    );
};

export default TopNews;
