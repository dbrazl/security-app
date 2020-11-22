import { all } from 'redux-saga/effects';

import credential from './credential/saga';

export default function* rootSaga() {
    return yield all([credential]);
}
