import styled from "styled-components";

import fallbackSrc from '../assets/images/placeholder.png';

const StyledNewsCard = styled.div`
    width: 100%;
    background: #ccc;
    border-radius: 8px;
    box-shadow: 4px -2px 16px 5px rgba(212,212,212,1);
`;

const Styledimage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`;

const StyledTitle = styled.h2`
    margin: 0;
    padding: 1rem;
`;

const StyledDescription = styled.p`
    margin: 0;
    padding: 0 1rem 0;
    font-size: ${props => props.theme.fontSize.small}
`;

const NewsCard = ({ title, imgSrc, description }) => {
    const onError = (e) => {
        e.target.onerror = null;
        e.target.src = fallbackSrc;
    }

    if (!imgSrc) imgSrc = fallbackSrc;

    return (
        <StyledNewsCard>
            <Styledimage src={imgSrc} onError={onError} alt={description} />
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
        </StyledNewsCard>
    );
};

export default NewsCard;
