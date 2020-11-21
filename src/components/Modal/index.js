import React from 'react';
import PropTypes from 'prop-types';

import { Background, Container, Keyboard } from './styles';
import { Dimensions } from 'react-native';

function Modal({ children, width, height, modalHeight, onPress }) {
    return (
        <Background width={width} height={height} onPress={onPress}>
            <Keyboard>
                <Container modalHeight={modalHeight}>{children}</Container>
            </Keyboard>
        </Background>
    );
}

Modal.defaultProps = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    width: PropTypes.number,
    height: PropTypes.number,
    onPress: PropTypes.func,
    modalHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
    ]),
};

Modal.defaultProps = {
    children: <></>,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onPress: () => {},
    modalHeight: false,
};

export default Modal;
