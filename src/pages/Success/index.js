import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import LottieView from 'lottie-react-native';
import PageLayout from '../../components/PageLayout';
import ArrowButton from '../../components/ArrowButton';
import { Container, Message, Animation } from './styles';

import animation from '../../assets/animations/check.json';

function Success({ navigation, height }) {
    const message = navigation.getParam('message');

    return (
        <PageLayout>
            <Container height={height - 100}>
                <Animation>
                    <LottieView source={animation} autoPlay loop={false} />
                </Animation>
                <Message>Credêncial foi registrada!</Message>
            </Container>
            <ArrowButton right message="continuar" margimBottom={20} />
        </PageLayout>
    );
}

Success.propTypes = {
    height: PropTypes.number,
};

Success.defaultProps = {
    height: Dimensions.get('window').height,
};

export default Success;
