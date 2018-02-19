import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

ReactDOM.render(
    <BrowserRouter children={routes} basename={baseUrl} />,
    document.getElementById('react-container')
);