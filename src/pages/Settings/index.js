import React, { useState, useEffect } from 'react';
import { Dimensions, BackHandler, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import PageLayout from '../../components/PageLayout';
import ArrowButton from '../../components/ArrowButton';
import Input from '../../components/Input';
import { Container, Key, Message } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import {
    encryptCredentialRequest,
    resetSamePassword,
} from '../../store/modules/credential/actions';

function AddCredential({ navigation, height }) {
    const [password, setPassword] = useState('');
    const loading = useSelector(state => state.credential.status.loading);
    const same = useSelector(state => state.credential.status.same);

    const dispatch = useDispatch();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', event => {
            goToHome();
            return true;
        });

        return () => {
            BackHandler.removeEventListener('hardwareBackPress');
        };
    }, []);

    useEffect(() => {
        if (same) dispatch(resetSamePassword());
    }, [password]);

    function goToHome() {
        if (same) dispatch(resetSamePassword());
        navigation.navigate('Home');
    }

    function submit() {
        dispatch(encryptCredentialRequest(password));
    }

    return (
        <PageLayout
            showSaveButton={!loading}
            onPressButton={submit}
            error={same}
        >
            <ArrowButton marginTop={50} onPress={goToHome} />
            <Container height={height - 80}>
                {loading && (
                    <>
                        <ActivityIndicator size="large" color="#8DBFDB" />
                        <Message marginTop={50}>
                            Verificando e criptografando...
                        </Message>
                    </>
                )}
                {!loading && (
                    <>
                        <Key />
                        <Message>Informe uma nova senha mestra.</Message>
                        <Input
                            placeholder="Nova senha"
                            textAlign="left"
                            marginTop={20}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </>
                )}
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
