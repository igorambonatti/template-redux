import React from 'react';

import './config/ReactotronConfig';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import history from './services/history';

import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
