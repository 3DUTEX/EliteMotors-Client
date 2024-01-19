import { combineReducers } from 'redux';

import authReducer from './auth/reducer';

// Combinando todos os reducers da aplicação em um só
export default combineReducers({
  authReducer,
});
