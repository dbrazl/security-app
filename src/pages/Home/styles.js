import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler/GestureButtons';

export const Title = styled.Text`
    color: #000;
    font-size: 32px;
    font-family: 'Roboto-Regular';
`;

export const Button = styled(RectButton)``;

export const Settings = styled(Icon).attrs({
    name: 'settings',
    size: 25,
    color: '#000',
})``;

export const Header = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 35px;
`;
