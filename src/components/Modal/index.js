import React from 'react';
import PropTypes from 'prop-types';

import { Background, Container, Keyboard } from './styles';
import { Dimensions } from 'react-native';

function Modal({ children, width, height, onPress }) {
    return (
        <Background width={width} height={height} onPress={onPress}>
            <Keyboard>
                <Container>{children}</Container>
            </Keyboard>
        </Background>
    );
}

Modal.defaultProps = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    width: PropTypes.number,
    height: PropTypes.number,
    onPress: PropTypes.func,
};

Modal.defaultProps = {
    children: <></>,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onPress: () => {},
};

export default Modal;
