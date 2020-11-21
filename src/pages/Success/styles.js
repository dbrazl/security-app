import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${props => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: #000;
    margin-top: 20px;
`;

export const Animation = styled.View`
    width: 80px;
    height: 80px;
`;
