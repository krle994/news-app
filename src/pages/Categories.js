import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import api from "../utils/api";

import Container from "../components/Container";
import Accordion from "../components/Accordion";
import Title from "../components/Typography/Title";
import Carousel from "../components/Carousel";
import Spinner from "../components/Spinner";

const { fetchArticles } = api;

const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
];
let articlesByCategory = {};

const StyledContainer = styled(Container)`
    max-width: 95%;
`;

const CategoriesWrapper = styled.div`
    overflow: hidden;
`;

export default () => {
    const [articles, setArticles] = useState({});
    const { t } = useTranslation();
    const { code } = useSelector((state) => state.country.selectedCountry);

    useEffect(() => {
        const fetchByCategory = () => {
            categories.forEach(async function (category) {
                const res = await fetchArticles(code, category);
                articlesByCategory[category] = res.articles;
            });
            setArticles(articlesByCategory);
        };

        fetchByCategory();
    }, [code]);

    const renderCategorties = () => {
        return categories.length ? categories.map((category) => {
            const title = category.charAt(0).toUpperCase() + category.slice(1);
            return (
                <Accordion key={category} title={title} to="/">
                    <Carousel articles={articles[category]} />
                </Accordion>
            )
        }) : <Spinner />;
    }

    return (
        <StyledContainer>
            <Title>
                {t("categoriesTitle", { num: categories.length })} {code}
            </Title>
            <CategoriesWrapper>
                { renderCategorties() }
            </CategoriesWrapper>
        </StyledContainer>
    );
};
