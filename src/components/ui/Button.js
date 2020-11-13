import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const sharedCss = css`
  background: none;
  color: ${(props) => props.theme.colors.title};
  border: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
  &.active,
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

const StyledButton = styled.button`
  ${sharedCss}
`;

const StyledLink = styled(Link)`
  ${sharedCss}
`;

export default (props) =>
  props.link ? <StyledLink {...props} /> : <StyledButton {...props} />;
