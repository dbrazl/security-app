import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
    Title,
    Button,
    Settings,
    Header,
    Lock,
    Unlock,
    Message,
    ModalButton,
    Credential,
    Copy,
} from './styles';

import PageLayout from '../../components/PageLayout';
import List from './components/List';
import Empty from './components/Empty';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

function View({
    items,
    modal,
    error,
    success,
    openCloseModal,
    submit,
    goToSettings,
    goToAddCrendential,
}) {
    const categories = _.groupBy(items, 'category');
    const labels = Object.keys(categories);
    const values = Object.values(categories);
    const empty = items.length === 0;

    function renderList() {
        return values.map((item, index) => (
            <List key={`${index}`} category={labels[index]} items={item} />
        ));
    }

    function renderForm() {
        return (
            <>
                <Lock />
                <Message>Informe a senha mestra</Message>
                <Input placeholder="Senha mestra" />
                <ModalButton onPress={submit} marginTop={20}>
                    <Message color="#fff">Conferir</Message>
                </ModalButton>
            </>
        );
    }

    function renderError() {
        return (
            <>
                <Lock />
                <Message>A senha é inválida!</Message>
                <ModalButton onPress={openCloseModal} marginTop={20}>
                    <Message color="#fff">Fechar</Message>
                </ModalButton>
            </>
        );
    }

    function renderSuccess() {
        return (
            <>
                <Unlock />
                <Button marginTop={20}>
                    <Credential>username</Credential>
                    <Copy />
                </Button>
                <Button marginTop={20}>
                    <Credential>password</Credential>
                    <Copy />
                </Button>
                <Button>
                    <Message color="#000">Editar credencial</Message>
                </Button>
                <ModalButton onPress={openCloseModal}>
                    <Message color="#fff">Fechar</Message>
                </ModalButton>
            </>
        );
    }

    return (
        <>
            <PageLayout showAddButton onPressButton={goToAddCrendential}>
                <Header>
                    <Title>Senhas</Title>
                    <Button onPress={goToSettings}>
                        <Settings />
                    </Button>
                </Header>
                {empty && <Empty />}
                {!empty && renderList()}
            </PageLayout>
            {modal && (
                <Modal onPress={openCloseModal}>
                    {!error && !success && renderForm()}
                    {error && renderError()}
                    {success && renderSuccess()}
                </Modal>
            )}
        </>
    );
}

View.propTypes = {
    items: PropTypes.array,
    modal: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool,
    openCloseModal: PropTypes.func,
    submit: PropTypes.func,
    goToSettings: PropTypes.func,
    goToAddCrendential: PropTypes.func,
};

View.defaultProps = {
    items: [],
    modal: false,
    error: false,
    success: false,
    openCloseModal: () => {},
    submit: () => {},
    goToSettings: () => {},
    goToAddCrendential: () => {},
};

export default View;
