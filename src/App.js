import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
import Home from "./components/home";
import "./css/App.css";
import logo from "./image/logo.png";
import "./css/lincss.css";
import $ from "jquery";
import Cart from './components/cart';
import Applation from './components/applation';
import Register from './components/register';
import Hotel from './components/hotel';
import Place from './components/place';
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
            <div className="l_head">
              <Link to="/" className="l_logo"><img src={logo} alt="首页" title="首页"/></Link>
              <nav className="l_nav">
              <ul>
                <Link to="/" className="l_links" onClick={this.changeactive}>首页</Link>
                <Link to="/place" className="l_links" onClick={this.changeactive}>目的地</Link>
                <Link to="/hotel" className="l_links" onClick={this.changeactive}>酒店</Link>
                <Link to="/cart" className="l_links" onClick={this.changeactive}>购物车</Link>
                <Link to="/applation" className="l_links" onClick={this.changeactive}>App下载</Link>
              </ul>
              </nav>
              <span className="l_span">
                <input className="l_search" type="text" />
                <button className="l_ser_icon"></button>
                </span>
              <Link to="/" className="l_login">登录</Link>
              <Link to="/register" className="l_register">注册</Link>
            </div>
            <Route path="/" component={Home}></Route>
            <Route path="/place" component={Place}></Route>
            <Route path="/hotel" component={Hotel}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/applation" component={Applation}></Route>
            <Route path="/register" component={Register}></Route>



          </div>
        </Router>
      </div>
    );
  }
}

export default App;
