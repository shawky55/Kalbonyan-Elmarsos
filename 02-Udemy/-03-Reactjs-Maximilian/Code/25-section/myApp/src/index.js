import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ProductContextProvider from './context/ProductCcontext';
import configureProductsStore from './hooks-store/products-store';
import './index.css';
import App from './App';

configureProductsStore();

// const rootReducer = combineReducers({
//   shop: productReducer,
// });
// configureProductStore();
// const store = createStore(rootReducer);

ReactDOM.render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>,
  document.getElementById('root')
);
