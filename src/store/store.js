import { createStore } from 'redux';

import calculateReducer from '../reducers/calculateReducer';

export default () => {
    const store = createStore(
        calculateReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
};

