import styled from "styled-components";

const StyledButton = styled.button`
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition: color 0.3s ease;
    &.active,
    &:hover {
        color: ${(props) => props.theme.colors.main};
    }
`;

export default (props) => (
    <StyledButton {...props}>{props.children}</StyledButton>
);
