import React from 'react';
import PropTypes from 'prop-types';
import logos from '../../../../assets/js/logos';

import { Title, Item, Image, Name, MarginBottom } from './styles';

function List({ category, items }) {
    function selectImage(title) {
        const obj = logos.filter(logo =>
            logo.names.includes(title.toLowerCase())
        )[0];

        return obj.source;
    }

    function renderItem(item) {
        return (
            <Item key={`${item.id}`}>
                <Image source={selectImage(item.title)} />
                <Name>{item.title}</Name>
            </Item>
        );
    }

    return (
        <>
            <Title>{category}</Title>
            {items.map(renderItem)}
            <MarginBottom value={30} />
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.array,
};

List.defaultProps = {
    category: 'Categoria',
    items: [],
};

export default List;
