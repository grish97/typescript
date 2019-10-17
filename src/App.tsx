import React, {Component, Fragment} from 'react';
import './App.css';
import { Router }  from "./components/Router"
import {Home} from "./components/Home";

class App extends Component {

  render () {
    return (
        <Fragment>
          <Router />
        </Fragment>
    );
  }
}

export default App;
