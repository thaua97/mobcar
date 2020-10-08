import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
`;
