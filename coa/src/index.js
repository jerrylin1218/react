import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
