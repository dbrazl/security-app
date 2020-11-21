import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 0 20px;
    position: relative;
`;

export const Safe = styled.SafeAreaView``;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Button = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => (props.error ? '#fa7f72' : '#8dbfdb')};
    z-index: 1;
`;

export const Add = styled(Icon).attrs({
    name: 'plus',
    size: 24,
    color: '#fff',
})``;

export const Save = styled(Icon).attrs({
    name: 'save',
    size: 24,
    color: '#fff',
})``;

export const Close = styled(Icon).attrs({
    name: 'x',
    size: 24,
    color: '#fff',
})``;

export const BoxButton = styled.View`
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: #fa7f72;
    margin-right: 20px;
`;
