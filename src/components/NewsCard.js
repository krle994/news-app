import styled from "styled-components";

import fallbackSrc from "../assets/images/placeholder.png";

import Button from './Button';

const StyledNewsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    border-radius: 8px;
    transition: box-shadow .3s ease;
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

const Styledimage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`;

const StyledTitle = styled.h2`
    margin: 0;
    padding: 1rem;
    color: ${(props) => props.theme.colors.title};
    font-size: ${(props) => props.theme.fontSize.regular};
`;

const StyledDescription = styled.p`
    flex: 1;
    margin: 0;
    padding: 0 1rem 1rem;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.small};
`;

const StyledFooter = styled.div`
    padding: 1rem;
    text-align: right;
`;

const MoreButton = styled(Button)`
    font-size: ${(props) => props.theme.fontSize.small};
`;

const NewsCard = ({ title, imgSrc, description }) => {
    const onError = (e) => {
        e.target.onerror = null;
        e.target.src = fallbackSrc;
    };

    if (!imgSrc) imgSrc = fallbackSrc;

    return (
        <StyledNewsCard>
            <Styledimage src={imgSrc} onError={onError} alt={description} />
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            <StyledFooter>
                <MoreButton>More &gt;</MoreButton>
            </StyledFooter>
        </StyledNewsCard>
    );
};

export default NewsCard;
