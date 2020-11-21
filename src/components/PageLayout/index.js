import React from 'react';
import PropTypes from 'prop-types';

import { Container, Safe, Scroll, Button, Add } from './styles';

function PageLayout({ children, showAddButton, onPressButton }) {
    return (
        <Container>
            <Safe>
                <Scroll>{children}</Scroll>
            </Safe>
            {showAddButton && (
                <Button onPress={onPressButton}>
                    <Add />
                </Button>
            )}
        </Container>
    );
}

PageLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    showAddButton: PropTypes.bool,
    onPressButton: PropTypes.func,
};

PageLayout.defaultProps = {
    children: <></>,
    showAddButton: false,
    onPressButton: () => {},
};

export default PageLayout;
