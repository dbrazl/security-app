import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import lock from '../../assets/illustration/lock.png';
import unlock from '../../assets/illustration/unlock.png';

export const Title = styled.Text`
    color: #000;
    font-size: 32px;
    font-family: 'Roboto-Regular';
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
`;

export const Settings = styled(Icon).attrs({
    name: 'settings',
    size: 25,
    color: '#000',
})``;

export const Header = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 35px;
`;

export const Lock = styled.Image.attrs({
    source: lock,
    resizeMode: 'contain',
})`
    height: 50px;
`;

export const Unlock = styled.Image.attrs({
    source: unlock,
    resizeMode: 'contain',
})`
    height: 50px;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: ${props => (props.color ? props.color : '#808080')};
    margin: 20px 0;
`;

export const ModalButton = styled.TouchableOpacity`
    width: 150px;
    height: 45px;
    border-radius: 5px;
    background: #8dbfdb;
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Credential = styled.Text.attrs({
    numberOfLines: 1,
    ellipsesMode: 'tail',
})`
    max-width: 150px;
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: #808080;
`;

export const Copy = styled(Icon).attrs({
    name: 'copy',
    size: 24,
    color: '#808080',
})`
    margin-left: 10px;
`;
