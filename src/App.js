import React, { Component } from 'react';
import './App.css';
import TransformLinkContainer from "./containers/TransformLinkContainer";
import {Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route path='/' exact component={TransformLinkContainer} />
          </Switch>
      </div>
    );
  }
}

export default App;
