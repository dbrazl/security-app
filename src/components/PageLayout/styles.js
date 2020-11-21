import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    padding: 0 20px;
`;

export const Safe = styled.SafeAreaView``;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;
