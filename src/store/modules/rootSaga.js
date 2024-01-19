import { all } from 'redux-saga/effects';

import authSaga from './auth/sagas';

// Combinando as sagas em uma saga principal
export default function* rootSaga() {
  return yield all([authSaga]);
}
