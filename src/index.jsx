import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './component/App';

const here = document.getElementById('root');

const app = <App />

render(app, here);
