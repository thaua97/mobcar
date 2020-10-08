import React, { useEffect, useState } from 'react';

import { Section } from './styles';
import { ListHeader } from '~/components/List/styles';

import List from '~/components/List';
import Toolbar from '~/components/Toolbar';
import Footer from '~/components/Footer';
import Form from '~/components/Form';
import { Title } from '~/components/Typography';
import { Btn } from '~/components/Buttons';
import { ModalContent, ModalFade } from '~/components/Modal/styles';

const Home = () => {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(!open);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Toolbar />
            <Section>
                <Title size={18} bold>Cars</Title>
                <ListHeader>
                    <Title size={16}>Avaliable list</Title>
                    <Btn onClick={handleOpenModal}>Add new</Btn>
                </ListHeader>
                <List />
                <ModalFade
                    isOpen={open}
                    onCloseRequest={closeModal}
                >
                    <ModalContent>
                        <Form cancel={() => closeModal()} />
                    </ModalContent>
                </ModalFade>
            </Section>
            <Footer />
            
        </>
    );
}

export default Home;