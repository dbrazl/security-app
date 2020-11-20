import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler/GestureButtons';

export const Title = styled.Text`
    font-size: 18px;
    color: #000;
    margin-bottom: 20px;
`;

export const Item = styled(RectButton)`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: #808080;
    margin-left: 10px;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #eee;
`;
