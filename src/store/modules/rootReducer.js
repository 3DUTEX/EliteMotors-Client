import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

// Combinando todos os reducers da aplicação em um só
export default combineReducers({
  exampleReducer,
})