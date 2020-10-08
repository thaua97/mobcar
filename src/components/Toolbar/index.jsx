import React from 'react';

import { Container, Logo } from './styles';

import logo from '~/assets/logo.svg';

const Toolbar = () => {
    return (
        <Container>
            <Logo src={logo}/>
        </Container>
    );
}

export default Toolbar;