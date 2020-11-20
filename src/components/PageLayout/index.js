import React from 'react';
import PropTypes from 'prop-types';

import { Container, Safe, Scroll } from './styles';

function PageLayout({ children }) {
    return (
        <Container>
            <Safe>
                <Scroll>{children}</Scroll>
            </Safe>
        </Container>
    );
}

PageLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

PageLayout.defaultProps = {
    children: <></>,
};

export default PageLayout;
