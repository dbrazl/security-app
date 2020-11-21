import React from 'react';
import PropTypes from 'prop-types';

import { Container, Message, ArrowRight, ArrowLeft } from './styles';

function ArrowButton({ right, message, marginTop, marginBottom, onPress }) {
    if (right)
        return (
            <Container
                marginTop={marginTop}
                marginBottom={marginBottom}
                isRight={right}
                onPress={onPress}
            >
                <Message marginRight={10}>{message}</Message>
                <ArrowRight />
            </Container>
        );

    return (
        <Container
            marginTop={marginTop}
            marginBottom={marginBottom}
            onPress={onPress}
        >
            <ArrowLeft />
            <Message marginRight={10}>{message}</Message>
        </Container>
    );
}

ArrowButton.propTypes = {
    right: PropTypes.bool,
    message: PropTypes.string,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    onPress: PropTypes.func,
};

ArrowButton.defaultProps = {
    right: false,
    message: 'voltar',
    marginTop: 0,
    marginBottom: 0,
    onPress: () => {},
};

export default ArrowButton;
