import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Title, Button, Settings, Header } from './styles';

import PageLayout from '../../components/PageLayout';
import List from './components/List';
import Empty from './components/Empty';

function View({ items }) {
    const categories = _.groupBy(items, 'category');
    const labels = Object.keys(categories);
    const values = Object.values(categories);
    const empty = items.length === 0;

    function renderList() {
        return values.map((item, index) => (
            <List key={`${index}`} category={labels[index]} items={item} />
        ));
    }

    return (
        <PageLayout>
            <Header>
                <Title>Senhas</Title>
                <Button>
                    <Settings />
                </Button>
            </Header>
            {empty && <Empty />}
            {!empty && renderList()}
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
