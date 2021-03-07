/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../components/home//homeMain/HomeMain';
import About from '../components/about/About';
import Welcome from '../components/welcome/Welcome';
import Contact from '../components/contact/Contact';
import Stack from '../components/stack/Stack';
import Resume from '../components/resume/Resume';
import Footer from '../components/footer/Footer';
import styles from './App.css';
// -------------------------------g----------------------------------------------------

export default function App() {

  // -----------------------------------------------------------------------------------

  return (
    <div className={styles.main}>
      <Router>

        <Switch>

          <Route
            path="/"
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

          <Route
            path="/contact"
            exact
            component = { Contact }
          />
          
          <Route
            path="/stack"
            exact
            component = { Stack }
          />
          
          <Route
            path="/resume"
            exact
            component = { Resume }
          />
          
          {/* <Route
            path=
            exact
            component = {}
          /> */}
            
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

