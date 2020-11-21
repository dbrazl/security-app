import styled from 'styled-components/native';
import key from '../../assets/illustration/key.png';

export const Container = styled.View`
    height: ${props => props.height}px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Key = styled.Image.attrs({
    source: key,
    resizeMode: 'contain',
})`
    width: 100px;
    height: 100px;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: #808080;
    width: 200px;
    text-align: center;
    margin: 20px 0;
`;
