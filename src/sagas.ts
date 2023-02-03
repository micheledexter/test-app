import {spawn} from 'redux-saga/effects';
import {testSaga} from "./sagas/testSaga";

export function* rootSagas() {
    yield spawn(testSaga);
}
