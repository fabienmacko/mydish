import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Client from '../Client';
import './app.scss';

class App extends React.Component {
  componentDidMount() {
    // Fade out the loader when the app has been loaded
    var loader = document.getElementById("loader");
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.remove();
    }, 400);
    console.log(loader);
  }
  render() {
    return (
      <div id="app" data-test='app'>
        <Switch>
          <Route path="/">
            <Client />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
