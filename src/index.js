import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// Redux
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import root_reducer from './store/root_reducer'
import thunk from 'redux-thunk';

const store = createStore(
    root_reducer,
    applyMiddleware(thunk)
);
// Dom render
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
