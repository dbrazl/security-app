import React from 'react';

import { useSelector } from 'react-redux';

import createRouter from './Routes/routes';

export default function App() {
    const isFirstTime = false;

    const Routes = createRouter(isFirstTime);

    return <Routes />;
}
