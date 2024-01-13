import * as types from '../types';
export function countIncrement() {
  return {
    type: types.COUNT_INCREMENT,
  }
}

export function apiRequest() {
  return {
    type: types.API_REQUEST,
  }
}