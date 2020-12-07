import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store';
import { ParallaxProvider } from 'react-scroll-parallax';
import client from './apolloProvider';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ParallaxProvider>
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
            </ParallaxProvider>
        </Provider>
    </Router>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();