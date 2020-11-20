import React from 'react';

import View from './view';

function Model() {
    const items = [
        {
            id: 1,
            title: 'Facebook',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Social',
        },
        {
            id: 2,
            title: 'Instagram',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Social',
        },
        {
            id: 3,
            title: 'AWS',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Armazenamento',
        },
        {
            id: 4,
            title: 'food',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Alimentação',
        },
        {
            id: 5,
            title: 'Refeição',
            credential: 'daniel-b-l@hotmail.com',
            password: '123',
            category: 'Alimentação',
        },
    ];

    return <View items={items} />;
}

export default Model;
