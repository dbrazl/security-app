import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';

import {
    Container,
    Fingerprint,
    Message,
    Select,
    SelectItem,
    SelectText,
    Triangle,
    Scroll,
} from './styles';
import PageLayout from '../../components/PageLayout';
import ArrowButton from '../../components/ArrowButton';
import Input from '../../components/Input';
import Modal from '../../components/Modal';

function View({ height, modal, openCloseModal, goToHome, categories }) {
    function renderCategorie(categorie, index) {
        if (categorie.selected)
            return (
                <SelectItem key={`${index}`}>
                    <SelectText selected>{categorie.name}</SelectText>
                </SelectItem>
            );

        return (
            <SelectItem key={`${index}`}>
                <SelectText>{categorie.name}</SelectText>
            </SelectItem>
        );
    }

    return (
        <>
            <PageLayout showSaveButton>
                <ArrowButton marginTop={50} onPress={goToHome} />
                <Container height={height - 80}>
                    <Fingerprint />
                    <Message>Cadastre a credêncial</Message>
                    <Input placeholder="Título" textAlign="left" />
                    <Input
                        placeholder="Credêncial"
                        textAlign="left"
                        marginTop={20}
                    />
                    <Input
                        placeholder="Senha"
                        textAlign="left"
                        marginTop={20}
                    />
                    <Select onPress={openCloseModal}>
                        <Message>Catgoria</Message>
                        <Triangle />
                    </Select>
                </Container>
            </PageLayout>
            {modal && (
                <Modal
                    onPress={openCloseModal}
                    modalHeight={categories.length > 5 && 265}
                >
                    {categories.length <= 5 && categories.map(renderCategorie)}
                    {categories.length > 5 && (
                        <>
                            <Scroll>{categories.map(renderCategorie)}</Scroll>
                        </>
                    )}
                </Modal>
            )}
        </>
    );
}

View.propTypes = {
    height: PropTypes.number,
    modal: PropTypes.bool,
    openCloseModal: PropTypes.func,
    goToHome: PropTypes.func,
    categories: PropTypes.array,
};

View.defaultProps = {
    height: Dimensions.get('window').height,
    modal: false,
    openCloseModal: () => {},
    goToHome: () => {},
    categories: () => {},
};

export default View;
