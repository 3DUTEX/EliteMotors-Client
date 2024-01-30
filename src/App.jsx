// Imports Libs
import { GoogleOAuthProvider } from '@react-oauth/google';
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
        <GoogleOAuthProvider clientId="404317237330-tjvhbpdfpq6qqfptlt228h072k5b28bk.apps.googleusercontent.com">
          <RoutesConfig />
          <GlobalStyles />
          <ToastContainer />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
