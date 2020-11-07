import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import api from "../utils/api";
import NewsCard from "./NewsCard";

const { getTopNews } = api;

const TopNewsWrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 90%;
    margin: 0 auto;
`;

const TopNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const res = await getTopNews();
            setArticles(res.articles);
        }

        fetchArticles();
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

    return <TopNewsWrapper>{renderArticles()}</TopNewsWrapper>;
};

export default TopNews;
