import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';

import { Container, Key, Message, Arrows } from './styles';
import PageLayout from '../../../components/PageLayout';
import ArrowButton from '../../../components/ArrowButton';
import Input from '../../../components/Input';

function Page2({ navigation, height }) {
    function goToHome() {
        navigation.navigate('Home');
    }

    function goToPage1() {
        navigation.navigate('TutorialPage1');
    }

    return (
        <PageLayout>
            <Container height={height - 80}>
                <Key />
                <Message marginTop={20}>Informe sua senha mestra!</Message>
                <Message marginTop={20} color="#808080">
                    Ela será usada para acessar as demais credênciais
                </Message>
                <Input placeholder="Senha mestra" marginTop={20} />
                <Message marginTop={50} color="#808080">
                    Posteriormente você poderá alterá-la no menu de
                    configurações.
                </Message>
            </Container>
            <Arrows>
                <ArrowButton onPress={goToPage1} />
                <ArrowButton right message="continuar" onPress={goToHome} />
            </Arrows>
        </PageLayout>
    );
}

Page2.propTypes = {
    height: PropTypes.number,
};

Page2.defaultProps = {
    height: Dimensions.get('window').height,
};

export default Page2;
