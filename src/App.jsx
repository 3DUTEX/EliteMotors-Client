import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RoutesConfig from './routes';
import { persistor, store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutesConfig />
      </PersistGate>
    </Provider>
  );
}

export default App;
