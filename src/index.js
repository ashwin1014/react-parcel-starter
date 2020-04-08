import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <App title='React Parcel Starter' />
    </React.StrictMode>
 , MOUNT_NODE);
