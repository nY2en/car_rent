import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import redux from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/car_rent">
    <ChakraProvider theme={theme}>
      <Provider store={redux.store}>
        <PersistGate persistor={redux.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
