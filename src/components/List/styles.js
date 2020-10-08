import styled from 'styled-components';
import { lighten } from 'polished';
import { MdMoreVert } from 'react-icons/md';

export const Container = styled.div`
    text-align: left;
`;

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const ListContainer = styled.ul`
    width: 100%;
    overflow-y: auto;

    @media (min-width: 1024px) {
        height: 100%;
        max-height: 100%;
        margin-bottom: 16%;
    }
`;

export const ListItem = styled.li`
    width: 100%;
    height: 70px;
    padding: 8px;
    display: grid;
    grid-template-columns: 16% 74% 10%;
    grid-gap: 8px;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid ${props => lighten(.8, props.theme.colors.secundary)};

    &:only-child {
        border-bottom: 1px solid ${props => lighten(.8, props.theme.colors.secundary)};
    }

    @media (min-width: 1200px) {
        height: 120px;
        grid-template-columns: 12% 84% 4%;
    }

    @media (min-width: 956px) {
        height: 96px;
        padding: 8px;
        grid-template-columns: 10% 86% 4%;
    }
`;

export const ListAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    object-fit: cover;

    @media (min-width: 1200px) {
        width: 100px;
        height: 100px;
    }

    @media (min-width: 956px) {
        width: 72px;
        height: 72px;
    }
`;

export const ListItemContent = styled.div``;

export const ListTile = styled.h4`
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.colors.secundary};

    @media (min-width: 1200px) {
        font-size: 24px;
    }

    @media (min-width: 956px) {
        font-size: 16px;
    }
`;

export const ListSubTile = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${props => lighten(0.4, props.theme.colors.secundary)};

    @media (min-width: 1200px) {
        font-size: 24px;
    }

    @media (min-width: 956px) {
        font-size: 16px;
    }
`;

export const ListAction = styled(MdMoreVert)`
    width: 24px;
    height: 24px;
    color: ${props => lighten(0.4, props.theme.colors.secundary)};
`;

export const NoData = styled.h2`
    width: 100%;
    margin-top: 5%;
    text-align: center;
    color: ${props => lighten(0.8, props.theme.colors.secundary)};
`;