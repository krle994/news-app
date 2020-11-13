import styled from 'styled-components';

export default styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.small};
`;
