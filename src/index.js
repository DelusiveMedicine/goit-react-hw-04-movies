import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Routing from './Routing';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routing />
  </BrowserRouter>,
  document.getElementById('root'),
);
