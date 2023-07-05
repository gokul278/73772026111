import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import tokenReducer from './features/Token';
import chechReducer from './features/Check';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    check: chechReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);