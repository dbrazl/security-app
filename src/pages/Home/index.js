import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import View from './view';

function Model({ navigation }) {
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

    function goToSettings() {
        navigation.navigate('AddCredential');
    }

    return (
        <View
            items={items}
            modal={modal}
            error={error}
            success={success}
            openCloseModal={openCloseModal}
            submit={submit}
            goToSettings={goToSettings}
        />
    );
}

Model.propTypes = {
    navigation: PropTypes.object,
};

Model.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

export default Model;
