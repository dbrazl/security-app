import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import PageLayout from '../../components/PageLayout';
import ArrowButton from '../../components/ArrowButton';
import Input from '../../components/Input';
import { Container, Key, Message } from './styles';

function AddCredential({ navigation, height }) {
    function goBack() {
        navigation.navigate('Home');
    }

    return (
        <PageLayout showSaveButton>
            <ArrowButton marginTop={50} onPress={goBack} />
            <Container height={height - 80}>
                <Key />
                <Message>Informe a senha mestra para a alteração.</Message>
                <Input placeholder="Senha mestra" textAlign="left" />
                <Input
                    placeholder="Nova senha"
                    textAlign="left"
                    marginTop={20}
                />
            </Container>
        </PageLayout>
    );
}

AddCredential.propTypes = {
    height: PropTypes.number,
    navigation: PropTypes.object,
};

AddCredential.defaultProps = {
    height: Dimensions.get('window').height,
    navigation: {
        navigate: () => {},
    },
};

export default AddCredential;
