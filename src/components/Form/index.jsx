import React, { useEffect, useRef, useState} from 'react';
import { useField } from '@unform/core';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { FormContainer, FormFooter, FormInput } from './styles';
import { Btn } from '../Buttons';

const Input = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return <FormInput ref={inputRef} defaultValue={defaultValue} {...rest}/>;
}

const Form = ({ cancel, id = null, edit = false}) => {
    const formRef = useRef(null);
    const [car, setCar] = useState();

    useEffect(() => {
        functionThatSetData(id);
    }, [id]);

    const functionThatSetData = async id => {
        if(id !== null) {
            try {
                const res = await api.get(`cars/${id}`);

                formRef.current.setData(res.data);
                setCar(res.data);
            
            } catch (err) {
                toast.error('Server not response');
            }
        }
    };

    const handleSubmit = async data => {
        if(!edit) {
            try {
                await api.post(`cars`, data);
                toast.success('Car add with success');
            } catch (err) {
                toast.error('Server not response');
            }
            return;
        }

        try {
            await api.put(`cars/${car.id}`, data);
            toast.success('Car updated');
        } catch (error) {
            toast.error('Server not response');
        } 
    };

    return (
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Name" name="name" required/>
            <Input placeholder="Year" name="year" required/>
            <Input placeholder="Price" name="price" required/>
            <Input placeholder="Color" name="color" required/>
            <Input placeholder="Picture" name="picture" required/>

            <FormFooter>
                <Btn type="button" outline onClick={cancel}>Cancel</Btn>
                {edit ? <Btn type="submit">Update</Btn> : <Btn type="submit">Add</Btn> }

            </FormFooter>

        </FormContainer>
    )
}

export default Form;