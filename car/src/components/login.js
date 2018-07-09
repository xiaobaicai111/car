  
import React, { Component } from 'react';
import Head from "./head";
import "../css/login.css";
import Footer02 from "./footer2";
import Store from '../redux/Store';
import Action from '../redux/Action';
import $ from "jquery";
class Login extends Component {
    constructor(props){
        super(props);
    }

    tap(){
        var _this=this;
        console.log(_this.refs.user.value)
        $.ajax({
            type: "get",
            url: "http://linge669.com/data/userinfo.php",
            data: {
                username:_this.refs.user.value
            },
            success: function (data) {
                var arr=[];
                arr=JSON.parse(data)[0];
                if(arr.username==_this.refs.user.value&&arr.password==_this.refs.pass.value){
                    Store.dispatch(Action({user:_this.refs.user.value}))
                    
                    _this.props.history.push('/home')
                }else{console.log(JSON.parse(arr))
                    alert("账号或密码错误")
                }
                
            }
        });


    }

    render() {
        return (
            <div> 
                <Head/>
                <div className="l_line"></div>
                <div className="l_login_m">
                    <h3>账号登录</h3>
                    <div className="l_login_botm">
                        <div className="l_login_botm_left">
                            <label>
                                <input type="text" placeholder="邮箱或手机号" ref="user"/>
                            </label>
                            <label>
                                <input type="password" placeholder="请输入密码" ref="pass"/>
                            </label>
                            <label className="l_login_group">
                                <button onClick={this.tap.bind(this)}>登录</button>
                                <a>忘记密码？</a>
                            </label>
                        </div>
                        <div className="l_login_botm_right">
                            <h2>还没有出国去账号？<a>立即注册</a></h2>
                            <p>快速登录</p>
                            <a className="l_login_qq"></a>
                            <a className="l_login_sign"></a>

                        </div>
                    </div>
                </div>
                <Footer02/>
            </div>
        );
    }
}

export default Login;
