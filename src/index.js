import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import Orientation from 'react-native-orientation-locker';

import './config/ReactotronConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';

import App from './App';

export default function Index() {
    useEffect(() => {
        Orientation.lockToPortrait();
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar
                    translucent
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />
                <App />
                <View />
            </PersistGate>
        </Provider>
    );
}
