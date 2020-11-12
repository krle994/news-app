import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

import Container from "../components/Container";
import Title from "../components/Typography/Title";
import GridLayout from "../components/GridLayout";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

import api from "../utils/api";

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
    const { t } = useTranslation();
    const { name, code } = useSelector(
        (state) => state.country.selectedCountry
    );
    const [term, setTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [articles, setArticles] = useState([]);

    const { fetchArticles } = api;

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
                setLoading(true);
                const res = await fetchArticles(code, null, debouncedTerm);

                if (res.status === "ok") {
                    setLoading(false);
                    setArticles(res.articles);
                } else {
                    setLoading(false);
                }
            }
        };

        search();
    }, [debouncedTerm, code]);

    const renderSearchResults = () => {

        if (loading) return <Spinner />

        return articles.length ? (
            <GridLayout>
                {articles.map((article) => (
                    <NewsCard
                        key={uuid()}
                        title={article.title}
                        imgSrc={article.urlToImage}
                        description={article.description}
                        content={article.content}
                    />
                ))}
            </GridLayout>
        ) : null;
    };

    return (
        <Container>
            <Title>{t("searchTitle", { country: name })}</Title>
            <InputWrapper>
                <SearchInput
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </InputWrapper>
            {renderSearchResults()}
        </Container>
    );
};
