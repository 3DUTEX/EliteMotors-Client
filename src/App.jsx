// Imports Libs
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

// Imports Modules
import 'react-toastify/dist/ReactToastify.css';
import RoutesConfig from './routes';
import { persistor, store } from './store/index';
import GlobalStyles from './styles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutesConfig />
        <GlobalStyles />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
