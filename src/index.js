import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './route/route';
import rootReducer from './redux/rootReducer';
import { createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const globalStore = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={globalStore}>
<Routing />
</Provider>,
document.getElementById('root'));