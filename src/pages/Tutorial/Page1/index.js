import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Illustration, Message } from './styles';
import PageLayout from '../../../components/PageLayout';
import ArrowButton from '../../../components/ArrowButton';

import illustration from '../../../assets/illustration/security.png';

function Page1({ navigation, height }) {
    function goToPage2() {
        navigation.navigate('TutorialPage2');
    }

    return (
        <PageLayout>
            <Container height={height - 80}>
                <Illustration source={illustration} />
                <Message marginTop={20}>
                    Olá! Esse é seu primeiro acesso na Security!
                </Message>
                <Message marginTop={20} color="#808080">
                    Primeiro, vamos cadastrar uma senha mestra para você acessar
                    a suas demais credênciais!
                </Message>
            </Container>
            <ArrowButton right message="continuar" onPress={goToPage2} />
        </PageLayout>
    );
}

Page1.propTypes = {
    navigation: PropTypes.object,
    height: PropTypes.number,
};

Page1.defaultProps = {
    navigation: {
        navigate: () => {},
    },
    height: Dimensions.get('window').height,
};

export default Page1;
