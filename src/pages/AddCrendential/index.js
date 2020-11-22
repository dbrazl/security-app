import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';

import View from './view';

function Model({ navigation }) {
    const [modal, setModal] = useState(false);
    const [newCredencial, setNewCredencial] = useState(false);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', event => {
            goToHome();
            return true;
        });

        return () => {
            BackHandler.removeEventListener('hardwareBackPress');
        };
    }, []);

    const categories = [
        {
            name: 'Social',
            selected: true,
        },
        {
            name: 'Armazenamento',
            selected: false,
        },
        {
            name: 'Social',
            selected: false,
        },
        {
            name: 'Armazenamento',
            selected: false,
        },
        {
            name: 'Social',
            selected: false,
        },
        {
            name: 'Armazenamento',
            selected: false,
        },
    ];

    function openCloseModal() {
        setModal(!modal);
    }

    function goToHome() {
        navigation.navigate('Home');
    }

    return (
        <View
            modal={modal}
            openCloseModal={openCloseModal}
            goToHome={goToHome}
            categories={categories}
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
