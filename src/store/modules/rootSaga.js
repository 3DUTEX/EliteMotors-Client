import { all } from 'redux-saga/effects';

import exampleSaga from './example/sagas';

// Combinando as sagas em uma saga principal
export default function* rootSaga() {
  return yield all([exampleSaga]);
}
