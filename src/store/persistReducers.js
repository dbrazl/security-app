import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'security-app',
            storage,
            whitelist: ['credential'],
        },
        reducers
    );

    return persistedReducer;
};
