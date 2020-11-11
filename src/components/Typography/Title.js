import styled from "styled-components";

export default styled.h2`
    color: ${(props) => props.theme.colors.title};
    font-size: ${(props) => props.theme.fontSize.large};
    margin: 0 0 1rem 0;
`;
