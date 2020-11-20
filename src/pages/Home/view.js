import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PageLayout from '../../components/PageLayout';
import { Title, Button, Settings, Header, MarginBottom } from './styles';
import List from './components/List';

function View({ items }) {
    const categories = _.groupBy(items, 'category');
    const labels = Object.keys(categories);
    const values = Object.values(categories);

    return (
        <PageLayout>
            <Header>
                <Title>Senhas</Title>
                <Button>
                    <Settings />
                </Button>
            </Header>
            {values.map((item, index) => (
                <>
                    <List category={labels[index]} items={item} />
                    <MarginBottom value={30} />
                </>
            ))}
        </PageLayout>
    );
}

View.propTypes = {
    items: PropTypes.array,
};

View.defaultProps = {
    items: [],
};

export default View;
