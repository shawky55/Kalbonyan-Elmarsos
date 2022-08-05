import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavContextProvider } from './store/FavContext';

ReactDOM.render(
  <BrowserRouter>
    <FavContextProvider>
      <App />
    </FavContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
