import React from 'react';
import PropTypes from 'prop-types';

import { Field } from './styles';
import { Dimensions } from 'react-native';

function Input({ width, placeholder, onChange, value }) {
    return (
        <Field
            width={width}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
}

Input.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

Input.defaultProps = {
    width: '100%',
    placeholder: 'Campo',
    onChange: () => {},
    value: '',
};

export default Input;
