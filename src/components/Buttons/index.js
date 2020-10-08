import styled, { css } from 'styled-components';

export const Btn = styled.button`
    height: 36px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.background};
    border-radius: 8px;
    border: none;
    font-size: 12px;
    outline: none;
    cursor: pointer;

    ${props => props.outline ? css`
        background-color: ${props.theme.colors.background} !important; 
        color: ${props.theme.colors.secundary} !important;
        border: 1px solid ${props.theme.colors.secundary} !important;
    ` : css``
    }
`;

export const Link = styled.a`
    color: ${props => props.theme.colors.primary};
    font-size: 12px;
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    transition: all .25s ease-in-out;

    &:hover {
        ul {
            display: block;
        }
    }
`;

export const DropBtn = styled.a`
    cursor: pointer;
`;

export const DropdownContent = styled.ul`
    display: none;
    position: absolute;
    top: 0;
    left: -60px;
    background-color: #f9f9f9;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    li {
        font-weight: 400;
        font-size: 14px;
        color: ${props => props.theme.colors.secundary};
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;

        &:hover {
            background-color: #f1f1f1;
        }
    }
    
`;