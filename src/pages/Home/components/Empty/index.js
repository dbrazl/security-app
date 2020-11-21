import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Illustration, Message } from './styles';
import empty from '../../../../assets/illustration/empty.png';

function Empty({ height }) {
    return (
        <Container height={height - 136}>
            <Illustration source={empty} />
            <Message>Você não possui senhas cadastradas</Message>
        </Container>
    );
}

Empty.propTypes = {
    height: PropTypes.number,
};

Empty.defaultProps = {
    height: Dimensions.get('window').height,
};

export default Empty;
