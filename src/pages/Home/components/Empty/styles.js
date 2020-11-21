import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${props => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Illustration = styled.Image.attrs({
    resizeMode: 'contain',
})`
    height: 150px;
`;

export const Message = styled.Text`
    width: 250px;
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: #000;
    margin-top: 20px;
    text-align: center;
`;
