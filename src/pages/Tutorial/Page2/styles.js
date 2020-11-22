import styled from 'styled-components/native';
import key from '../../../assets/illustration/key.png';

export const Container = styled.View`
    height: ${props => props.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Key = styled.Image.attrs({
    resizeMode: 'contain',
    source: key,
})`
    width: 100px;
    height: 100px;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: ${props => (props.color ? props.color : '#000')};
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
    width: 240px;
    text-align: center;
`;

export const Arrows = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
