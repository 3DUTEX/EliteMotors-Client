// Imports Libs
import {
  call, takeLatest, all, put,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Imports Modules
import * as types from '../types';
import axios from '../../../services/axios';
import * as authActions from './actions';

// CALL - ESPERA UMA REQUISIÇÃO OU FUNÇÕES ASYNC
// TAKELATEST - DESCARTA UMA REQUISIÇÃO CASO JÁ EXISTA OUTRA EM ANDAMENTO
// ALL - CONCATENA TODAS AS SAGAS

function* loginRequest({ payload }) {
  try {
    const { data } = yield call(axios.post, '/auth', payload);
    yield put(authActions.loginSuccess(data));
    toast.success('Login efetuado com sucesso');
  } catch (e) {
    const { response } = e;
    if (response.data.error) {
      const { error } = response.data;
      toast.error(error.message);
    }
    yield put(authActions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
