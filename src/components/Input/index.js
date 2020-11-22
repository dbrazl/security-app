import React from 'react';
import PropTypes from 'prop-types';

import { Field } from './styles';
import { Dimensions } from 'react-native';

function Input({
    width,
    placeholder,
    onChangeText,
    value,
    marginTop,
    textAlign,
    secureTextEntry,
}) {
    return (
        <Field
            width={width}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            marginTop={marginTop}
            textAlign={textAlign}
            secureTextEntry={secureTextEntry}
        />
    );
}

Input.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    marginTop: PropTypes.number,
    textAlign: PropTypes.string,
    secureTextEntry: PropTypes.bool,
};

Input.defaultProps = {
    width: '100%',
    placeholder: 'Campo',
    onChangeText: () => {},
    value: '',
    marginTop: 0,
    textAlign: 'center',
    secureTextEntry: false,
};

export default Input;
