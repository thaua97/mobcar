import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 8px 24px;
    background-color: ${props => props.theme.colors.secundary};
    z-index: 0;

    @media (min-width: 1200px) {
        position: relative;
    }
`;

export const Logo = styled.img`
    width: 100%;
    height: 41px;
`;
