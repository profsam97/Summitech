import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { Loader } from './components';

import { persistor, store } from './store/store';
import App from './App';

import './assets/sass/main.scss';

import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Context/ContextProvider';

ReactDOM.render(
    <ContextProvider>
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
  </ContextProvider>,
  document.getElementById('root'),
);


