import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import View from './view';

function Model() {
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const items = [
        {
            id: 1,
            title: 'Facebook',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Social',
        },
        {
            id: 2,
            title: 'Instagram',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Social',
        },
        {
            id: 3,
            title: 'AWS',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Armazenamento',
        },
        {
            id: 4,
            title: 'Alimentacao',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Alimentação',
        },
        {
            id: 5,
            title: 'Refeição',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Alimentação',
        },
    ];

    function openCloseModal(event) {
        setModal(!modal);
        if (error) setError(false);
    }

    function submit() {
        Keyboard.dismiss();
    }

    return (
        <View
            items={items}
            modal={modal}
            error={error}
            success={success}
            openCloseModal={openCloseModal}
            submit={submit}
        />
    );
}

export default Model;
