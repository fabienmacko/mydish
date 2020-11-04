import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from '@apollo/client';
import client from './apolloProvider';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();