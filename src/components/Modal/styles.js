import styled from 'styled-components/native';

export const Keyboard = styled.KeyboardAvoidingView.attrs({
    behavior: 'position',
})``;

export const Container = styled.View`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Background = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;
