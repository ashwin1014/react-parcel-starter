import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App title='React Parcel Starter' />
    </BrowserRouter>
  </React.StrictMode>,
  MOUNT_NODE
);
