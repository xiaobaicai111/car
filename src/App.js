import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Home}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
