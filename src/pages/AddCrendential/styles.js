import styled from 'styled-components/native';

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
    color: #808080;
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

export const SelectText = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    color: ${props => (props.selected ? '#000' : '#808080')};
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
