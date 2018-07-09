
import React, { Component } from 'react';
import Store from "../redux/Store";
import {Link} from "react-router-dom";
import $ from "jquery";
import logo from "../image/logo.png";
import touxiang from "../image/touxiang.jpg";

class Head extends Component {
    constructor(props){
        super(props)
        this.state={
            name:Store.getState()
        }
        this.onchanges=this.onchanges.bind(this);
    }

    
    onchanges(){
        this.setState({name:Store.getState()})
    }

    componentDidMount(){
        Store.subscribe(this.onchanges);
        // console.log(this.state);
        if(this.state.name.user){
            $(".l_userinfo").css("display","none");
            $(".l_user").css("display","inline-block");
        }else{
            $(".l_userinfo").css("display","inline-block");
            $(".l_user").css("display","none");
        }

    }

    render() {
        

        return (
            <div>
                <div className="l_head">
                    <Link to="/" className="l_logo"><img src={logo} alt="首页" title="首页"/></Link>
                    <nav className="l_nav">
                        <ul>
                            <Link to="/home" className="l_links" onClick={this.changeactive}>首页</Link>
                            <Link to="/place" id="l_mudi" className="l_links" onClick={this.changeactive}>目的地</Link>
                            <Link to="/hotel" className="l_links" onClick={this.changeactive}>酒店</Link>
                            <Link to="/cart" className="l_links" onClick={this.changeactive}>购物车</Link>
                            <Link to="/applation" className="l_links" onClick={this.changeactive}>App下载</Link>
                        </ul>
                    </nav>
                    <span className="l_span">
                        <input className="l_search" type="text" ref="l_sech" id="l_sech"/>
                        <button className="l_ser_icon"></button>
                    </span>

                    <div className="l_userinfo">
                        <Link to="/login" className="l_login">登录</Link>
                        <Link to="/register" className="l_register">注册</Link>
                    </div>
                    
                    <div className="l_user">
                        <span><img src={touxiang}/></span>
                        <span>{this.state.name.user}</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default Head;
