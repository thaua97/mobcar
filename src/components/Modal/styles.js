import styled from 'styled-components';
import { rgba } from 'polished';

import Modal from 'react-modal';

export const ModalFade = styled(Modal)`
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    background: ${props => rgba(props.theme.colors.secundary, .8)};
    outline: none;
    z-index: 4;
`;

export const ModalContent = styled.div`
    width: 342px;
    max-height: 437px;
    background-color: ${props => props.theme.colors.background};
    border-radius: 16px;
    padding: 16px;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
`

export const ModalPicture = styled.img`
    height: 220px;
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
`;

export const ModalDescription = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 16px;
    padding: 16px;
`