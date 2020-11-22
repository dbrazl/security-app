import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import fingerprint from '../../assets/illustration/fingerprint.png';
import triangle from '../../assets/icons/triangle.png';

export const Container = styled.View`
    height: ${props => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Fingerprint = styled.Image.attrs({
    source: fingerprint,
})`
    width: 100px;
    height: 100px;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: ${props => (props.color ? props.color : '#808080')};
    margin: 20px 0;
`;

export const Select = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    background: #eee;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const SelectItem = styled.TouchableOpacity`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const SelectText = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail',
})`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: ${props => (props.selected ? '#000' : '#808080')};
    max-width: 200px;
`;

export const Triangle = styled.Image.attrs({
    source: triangle,
})`
    width: 10px;
    height: 10px;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    height: 265px;
`;

export const Button = styled.TouchableOpacity`
    height: 45px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: ${props => (props.background ? props.background : '#8DBFDB')};
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
`;

export const AddButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 45px;
    margin-bottom: 10px;
`;

export const Add = styled(Icon).attrs({
    name: 'plus',
    size: 24,
    color: '#808080',
})`
    margin-right: 10px;
`;
