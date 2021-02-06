import { applyMiddleware, createStore } from 'redux';
import reducer from '../Reducer/index.js';

const store = {
    store: null,
    getStore: function () {
        return this.store;
    },

    configStore: function () {
        this.store = createStore(reducer, applyMiddleware(thunk));
    }
}

export default store;