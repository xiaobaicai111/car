import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from "react-router-dom";
import Home from "./components/home";
import Appxiazai from "./components/appxiazai";
import "./css/App.css";

import "./css/lincss.css";
import $ from "jquery";
import Cart from './components/cart';
import Register from './components/register';
import Hotel from './components/hotel';
import Place from './components/place';
import Xiangqing from './components/xiangqing';
class App extends Component {
  constructor(props){
    super(props);
    this.changeactive.bind(this);

  }
  changeactive(){
    console.log($(this))
  }



  render() {
    return (
      <div className="App">
      
        <Router>
          <div>
            
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/place" component={Place}></Route>
              <Route path="/hotel" component={Hotel}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route path="/applation" component={Appxiazai}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/xiangqing" component={Xiangqing}></Route>
              <Redirect to="/home"/>
            </Switch>
          </div>
         
        </Router>
        
      </div>
    );
  }
}

export default App;
