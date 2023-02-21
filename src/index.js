import React from 'react';
import { store } from './store';
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.css';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(  <Provider store={store}><App/></Provider> );