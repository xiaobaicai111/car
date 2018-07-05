import React, { Component } from 'react';
<<<<<<< HEAD
import Y1 from './components/Y1';
=======
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/home";
import "./css/App.css";
>>>>>>> 749e293117d40b4e644a3a3d3c7f46a7b2e0890c

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
          <Y1/>
=======
        <Router>
          <div>
            <Route path="/" component={Home}></Route>
          </div>
        </Router>
>>>>>>> 749e293117d40b4e644a3a3d3c7f46a7b2e0890c
      </div>
    );
  }
}

export default App;
