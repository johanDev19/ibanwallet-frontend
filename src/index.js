import React from 'react';
import { render } from 'react-static-generator';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
