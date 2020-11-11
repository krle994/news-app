import styled from 'styled-components';

const Arrow = styled.div`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;

    &:hover {
        border-color: ${props => props.theme.colors.main};
    }

    &.right { transform: rotate(-45deg); }
    &.left { transform: rotate(135deg); }
    &.up { transform: rotate(-135deg); }
    &.down { transform: rotate(45deg); }
`;

export default (props) => <Arrow {...props} />
