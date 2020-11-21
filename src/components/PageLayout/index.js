import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Safe,
    Scroll,
    Button,
    Add,
    Save,
    Close,
    BoxButton,
    Message,
} from './styles';

function PageLayout({
    children,
    showAddButton,
    showSaveButton,
    onPressButton,
    error,
}) {
    return (
        <Container>
            <Safe>
                <Scroll>{children}</Scroll>
            </Safe>
            {showAddButton && (
                <BoxButton>
                    <Button onPress={onPressButton}>
                        <Add />
                    </Button>
                </BoxButton>
            )}
            {showSaveButton && (
                <BoxButton>
                    {error && <Message>A senha é a mesma</Message>}
                    <Button onPress={onPressButton} error={error}>
                        {!error && <Save />}
                        {error && <Close />}
                    </Button>
                </BoxButton>
            )}
        </Container>
    );
}

PageLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    showAddButton: PropTypes.bool,
    showSaveButton: PropTypes.bool,
    error: PropTypes.bool,
    onPressButton: PropTypes.func,
};

PageLayout.defaultProps = {
    children: <></>,
    showAddButton: false,
    showSaveButton: false,
    error: false,
    onPressButton: () => {},
};

export default PageLayout;
