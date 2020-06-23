import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import reducers from './redux/reducers';
import ReduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const storeWithMiddleware = applyMiddleware(ReduxThunk)(
    createStore
);

const store = storeWithMiddleware(
    reducers
);

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
