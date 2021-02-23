/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../components/home/HomeMain';
import About from '../components/about/About';
import Welcome from '../components/welcome/Welcome';
// -----------------------------------------------------------------------------------

export default function App() {

  // -----------------------------------------------------------------------------------

  return (
    <>
      <Router>

        <Switch>

          <Route
            path="/welcome"
            exact
            component = { Welcome } 
          />

          <Route
            path="/home"
            exact
            component = { Home }
          />

          <Route
            path="/about"
            exact
            component = { About }
          />

          {/* <Route
            path=
            exact
            component = {}
          /> */}
            
        </Switch>

      </Router>
    </>
  );
}

