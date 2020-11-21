import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: 18px;
    color: #000;
    margin-bottom: 20px;
`;

export const Item = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const Name = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail',
})`
    width: 80%;
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

export const MarginBottom = styled.View`
    margin-bottom: ${props => props.value}px;
`;
