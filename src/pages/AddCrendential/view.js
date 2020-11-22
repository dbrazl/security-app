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
    Button,
    AddButton,
    Add,
} from './styles';
import PageLayout from '../../components/PageLayout';
import ArrowButton from '../../components/ArrowButton';
import Input from '../../components/Input';
import Modal from '../../components/Modal';

function View({
    height,
    modal,
    openCloseModal,
    goToHome,
    categories,
    newCategorie,
    createCancelNewCategorie,
}) {
    function renderCategorie(categorie, index) {
        let categories = [];

        if (index === 0)
            categories.push(
                <AddButton onPress={createCancelNewCategorie}>
                    <Add />
                    <Message>Adicionar categoria</Message>
                </AddButton>
            );

        if (categorie.selected)
            categories.push(
                <SelectItem key={`${index}`}>
                    <SelectText selected>{categorie.name}</SelectText>
                </SelectItem>
            );
        else
            categories.push(
                <SelectItem key={`${index}`}>
                    <SelectText>{categorie.name}</SelectText>
                </SelectItem>
            );

        return categories;
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
                    {!newCategorie &&
                        categories.length <= 5 &&
                        categories.map(renderCategorie)}

                    {!newCategorie && categories.length > 5 && (
                        <>
                            <Scroll>{categories.map(renderCategorie)}</Scroll>
                        </>
                    )}

                    {newCategorie && (
                        <>
                            <Input placeholder="Nova categoria" />
                            <Button marginTop={20}>
                                <Message color="#fff">Salvar</Message>
                            </Button>
                            <Button
                                marginTop={20}
                                background="#eee"
                                onPress={createCancelNewCategorie}
                            >
                                <Message>Fechar</Message>
                            </Button>
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
    newCategorie: PropTypes.bool,
    createCancelNewCategorie: PropTypes.func,
};

View.defaultProps = {
    height: Dimensions.get('window').height,
    modal: false,
    openCloseModal: () => {},
    goToHome: () => {},
    categories: () => {},
    newCategorie: false,
    createCancelNewCategorie: () => {},
};

export default View;
