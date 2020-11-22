import { all, takeLatest, select, put, delay } from 'redux-saga/effects';
import bcrypt from 'react-native-bcrypt';

import {
    encryptCredentialSuccess,
    encryptSamePassword,
    encryptCredentialError,
} from './actions';

function* encrypt({ payload }) {
    try {
        yield delay(2000);
        const encrypted = yield select(state => state.credential.encrypted);
        const same = bcrypt.compareSync(payload.password, encrypted);

        if (same) throw new Error('Same password');

        const hash = bcrypt.hashSync(payload.password, 8);

        yield put(encryptCredentialSuccess(hash));
    } catch (error) {
        if (error.message === 'Same password') yield put(encryptSamePassword());
        yield put(encryptCredentialError());
    }
}

export default all([
    takeLatest('@credential/ENCRYPT_CREDENTIAL_REQUEST', encrypt),
]);
