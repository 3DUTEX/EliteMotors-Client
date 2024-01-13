import { call, takeLatest, all } from 'redux-saga/effects';
import * as types from '../types';

// CALL - ESPERA UMA REQUISIÇÃO OU FUNÇÕES ASYNC
// TAKELATEST - DESCARTA UMA REQUISIÇÃO CASO JÁ EXISTA OUTRA EM ANDAMENTO
// ALL - CONCATENA TODAS AS SAGAS

function* apiRequest() {
  try {
    const response = yield call(fetch, 'https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemons = yield response.json();
    yield console.log(pokemons);
  } catch (e) {
    yield console.log(e);
  }
}

export default all([takeLatest(types.API_REQUEST, apiRequest)]);
