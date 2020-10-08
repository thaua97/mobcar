import styled, { css } from 'styled-components';

export const Title = styled.h1`
    font-size: ${props => props.size ? `${props.size}px` : '24px'};
    font-weight: ${props => props.bold ? 700 : 400};
    color: ${props => props.color ? props.color : props.theme.colors.secundary};
    
    ${props => props.icon ? css`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        svg {
            margin 0 8px;
        }
    `: ''}
`;
