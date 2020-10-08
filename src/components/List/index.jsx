import React, {useEffect, useState } from 'react';
import api from '~/services/api';
import { formatCurrancy } from '~/services/helpers/format';
import { toast } from 'react-toastify';

import { AiFillCar, AiOutlineClose } from 'react-icons/ai';

import { Title } from '../Typography';

import {
    Container,
    ListContainer,
    ListItem,
    ListAvatar,
    ListItemContent,
    ListTile,
    ListSubTile,
    ListAction,
    NoData
} from './styles';

import {
    ModalFade,
    ModalContent, 
    ModalHeader,
    ModalPicture,
    ModalDescription
} from '~/components/Modal/styles';

import { Dropdown, DropdownContent, DropBtn, Link } from '../Buttons';
import Form from '../Form';

const List = () => {
    const [modal, setModal] = useState(false);
    const [cars, setCars] = useState([]);
    const [details, setDetails] = useState({});
    const [modalEdit, setModalEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        try {
            const res =  await api.get('cars');

            setCars(res.data);
        } catch (error) {
            toast.error('Error: Server not Response try again later!');
        }
    }

    const showModalAndDetails = id => {
        setModal(!modal);
        setDetails(cars?.filter(item => item.id === id)[0]);
    }

    const deleteItem = async id => {
        try {
            await api.delete(`cars/${id}`);

            const remove = cars?.filter(item => item.id !== id);

            toast.success('Car deleted with success!');

            setCars(remove);
        } catch (error) {
            toast.error('Error: Server not Response try again later!');
        }
    }

    const showModalEdit = id => {
        setModalEdit(!modalEdit);
        setEditId(id);
    }

    const closeModal = () => {
        setModal(!modal);
    }

    const closeModalEdit = () => {
        setModalEdit(false);
    }

    return (
        <Container>
            <ListContainer>
                {cars?.map(({ id, name, picture, year}) => { 
                    return (
                        <ListItem key={id}>
                            <ListAvatar src={picture || `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzmdjPPbqMFfeig7RTITLu19BwflVQoIgRgQ&usqp=CAU`} alt="picture" />
                            <ListItemContent >
                                <ListTile>{name}</ListTile>
                                <ListSubTile>{year}</ListSubTile>
                                <Link onClick={() => showModalAndDetails(id)}>View More</Link>
                            </ListItemContent>
                            <Dropdown>
                                <DropBtn>
                                    <ListAction />
                                </DropBtn>
                                <DropdownContent>
                                    <li onClick={() => showModalAndDetails(id)}>View</li>
                                    <li onClick={() => showModalEdit(id)}>Edit</li>
                                    <li onClick={() => deleteItem(id)}>Delete</li>
                                </DropdownContent>
                            </Dropdown>
                        </ListItem>
                    )
                })}
                {cars <= 0  ? <NoData>No data</NoData> : null}
            </ListContainer>

            <ModalFade
                isOpen={modal}
                onCloseRequest={closeModal}
            >
                <ModalContent>
                    <ModalHeader>
                        <Title bold icon>
                            <AiFillCar size={36}/>
                            {details.name}
                        </Title>
                        <AiOutlineClose size={24} onClick={closeModal}/>
                    </ModalHeader>
                    <ModalPicture src={details.picture} />
                    {details ?
                        <ModalDescription>
                            <Title size={14}>{details.name}</Title>
                            <Title size={14}>{details.year}</Title>
                            <Title size={14}>{formatCurrancy(details.price)}</Title>
                            <Title size={14}>{details.color}</Title>
                        </ModalDescription>
                    : null
                    }
                </ModalContent>
            </ModalFade>
            <ModalFade
                isOpen={modalEdit}
                onCloseRequest={closeModalEdit}
            >
                <ModalContent>
                    <Form id={editId} cancel={() => closeModalEdit()} edit />
                </ModalContent>
            </ModalFade>
        </Container>
    );
}

export default List;