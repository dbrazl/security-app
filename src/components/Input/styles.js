import styled from 'styled-components/native';

export const Field = styled.TextInput.attrs({
    placeholderTextColor: '#808080',
})`
    width: ${props => props.width};
    height: 45px;
    text-align: center;
    color: #808080;
    text-align: center;
    background: #f5f5f5;
    font-size: 18px;
    border-radius: 5px;
`;
