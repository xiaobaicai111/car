
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../image/logo.png";

class Head extends Component {
    render() {
        return (
            <div>
                <div className="l_head">
                <Link to="/" className="l_logo"><img src={logo} alt="首页" title="首页"/></Link>
                <nav className="l_nav">
                    <ul>
                    <Link to="/home" className="l_links" onClick={this.changeactive}>首页</Link>
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
            </div>
        );
    }
}

export default Head;
