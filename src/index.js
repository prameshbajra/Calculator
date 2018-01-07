import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import store from './store/store';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

const storeInstance = store();
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
