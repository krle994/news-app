import styled from "styled-components";

import Button from "./Button";
import Paragraph from "./Typography/Paragraph";
import Image from "./Image";
import Arrow from "./Arrow";

const StyledNewsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 8px;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: ${(props) => (props.small ? "100px" : "200px")};
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`;

const StyledTitle = styled.h2`
    margin: 0;
    padding: 1rem;
    color: ${(props) => props.theme.colors.title};
    font-size: ${(props) =>
        props.small
            ? props.theme.fontSize.small
            : props.theme.fontSize.regular};
`;

const StyledDescription = styled(Paragraph)`
    flex: 1;
    font-size: ${(props) =>
        props.small ? props.theme.fontSize.xsmall : props.theme.fontSize.small};
`;

const StyledFooter = styled.div`
    padding: 1rem;
    text-align: right;
`;

const MoreLink = styled(Button)`
    font-size: ${(props) =>
        props.small ? props.theme.fontSize.xsmall : props.theme.fontSize.small};

    &:hover > * {
        border-color: ${(props) => props.theme.colors.main};
    }
`;

export default (props) => {
    const { title, imgSrc, description, content } = props;

    const cutText = (length, text) =>
        text.length > length ? `${text.substring(0, length)}...` : text;

    const shortTitle = title ? cutText(80, title) : title;
    const shortDesc = description ? cutText(150, description) : description;

    return (
        <StyledNewsCard {...props}>
            <StyledImage small={props.small} src={imgSrc} alt={shortTitle} />
            <StyledTitle small={props.small}>{shortTitle}</StyledTitle>
            <StyledDescription small={props.small}>
                {shortDesc}
            </StyledDescription>
            <StyledFooter>
                <MoreLink
                    small={props.small}
                    link="true"
                    to={{
                        pathname: "/news",
                        state: { title, imgSrc, content },
                    }}
                >
                    More <Arrow className="right" />
                </MoreLink>
            </StyledFooter>
        </StyledNewsCard>
    );
};
