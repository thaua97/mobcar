import React, { useEffect, useRef} from 'react';
import { useField } from '@unform/core';

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

    useEffect(() => {
        functionThatSetData(id);
    }, [id]);

    const functionThatSetData = async id => {
        try {
            const res = await api.get(`cars/${id}`);

            formRef.current.setData(res.data);
            console.log(res.data);

        } catch (err) {
            return;
        }
    };

    const handleSubmit = async data => {
        console.log(data)
        try {
            if(edit) await api.put('cars', data);
            
            await api.post('cars', data);
        } catch (err) {
            return;
        }
    };

    return (
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Year" name="year" />
            <Input placeholder="Price" name="price" />
            <Input placeholder="Color" name="color" />
            <Input placeholder="Picture" name="picture" />

            <FormFooter>
                <Btn type="button" outline onClick={cancel}>Cancel</Btn>
                {edit ? <Btn type="submit">Update</Btn> : <Btn type="submit">Add</Btn> }

            </FormFooter>

        </FormContainer>
    )
}

export default Form;