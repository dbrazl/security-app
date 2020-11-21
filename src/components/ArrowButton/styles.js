import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.isRight ? 'flex-end' : 'flex-start')};
    flex-direction: row;
    margin-top: ${props => props.marginTop}px;
`;

export const ArrowLeft = styled(Icon).attrs({
    name: 'chevron-left',
    size: 24,
    color: '#000',
})``;

export const ArrowRight = styled(Icon).attrs({
    name: 'chevron-right',
    size: 24,
    color: '#000',
})``;

export const Message = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 18px;
    margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}px;
    margin-right: ${props => (props.marginRight ? props.marginRight : 0)}px;
    color: #000;
    margin-bottom: 5px;
`;
