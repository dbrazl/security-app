import React from 'react';
import PropTypes from 'prop-types';
import logos from '../../../../assets/js/logos';
import other from '../../../../assets/logos/other.png';

import { Title, Item, Image, Name, MarginBottom } from './styles';

function List({ category, items }) {
    function selectImage(title) {
        let obj = logos.filter(logo => {
            const { names } = logo;
            let have = false;

            names.forEach(name => {
                if (title.toLowerCase().includes(name)) {
                    have = true;
                }
            });

            return have;
        })[0];

        if (!obj) obj = { source: other };

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
