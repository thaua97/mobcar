import styled from 'styled-components';
import { rgba } from 'polished';
import { Form } from '@unform/web';

export const FormContainer = styled(Form)`
    width: 100%;
    padding: 10px;
`;

export const FormFooter = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        margin: 0 4px;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    margin: 8px 0;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid ${props => rgba(props.theme.colors.secundary, .5)};
    outline-color: ${props => props.theme.colors.primary};

    &::placeholder {
        color: ${props => rgba(props.theme.colors.secundary, .5)};
    }

    &:focus {
        color: ${props => props.theme.colors.primary};
        box-shadow: 0 0 2px 2px ${props => rgba(props.theme.colors.primary, .5)};

        &::placeholder {
            color: ${props => props.theme.colors.primary};
        }
    }
`;


