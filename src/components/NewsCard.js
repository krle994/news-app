import styled from "styled-components";

import Button from "./Button";
import Paragraph from "./Typography/Paragraph";
import Image from "./Image";

const StyledNewsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    border-radius: 8px;
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

const Styledimage = styled(Image)`
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

const StyledDescription = styled(Paragraph)`
    flex: 1;
`;

const StyledFooter = styled.div`
    padding: 1rem;
    text-align: right;
`;

const MoreLink = styled(Button)`
    font-size: ${(props) => props.theme.fontSize.small};
`;

const NewsCard = ({ title, imgSrc, description, content, timestamp }) => {
    const id = Date.parse(timestamp);

    return (
        <StyledNewsCard>
            <Styledimage src={imgSrc} alt={description} />
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            <StyledFooter>
                <MoreLink
                    link="true"
                    to={{
                        pathname: "/news",
                        state: { title, imgSrc, content },
                    }}
                >
                    More &gt;
                </MoreLink>
            </StyledFooter>
        </StyledNewsCard>
    );
};

export default NewsCard;
