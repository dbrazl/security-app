import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${props => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Illustration = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 250px;
    height: 210px;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: ${props => (props.color ? props.color : '#000')};
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
    text-align: center;
    width: 220px;
`;
