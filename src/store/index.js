import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Persistindo no localStorage
const persistConfig = {
  // NOME DA KEY LOCALSTORAGE
  key: 'EliteMotors',
  storage,
};

// Persistindo reducer principal que contém todos os reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Criando Middleware Saga
const sagaMiddleware = createSagaMiddleware();

// Exportando store e persistor para o Provider e o PersistGate
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

// Importando saga principal no middleware
sagaMiddleware.run(rootSaga);
