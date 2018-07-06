import React, { Component } from 'react';
import Head from "./head";
import "../css/register.css";
import Footer02 from "./footer2";

class Register extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Head/>
                <div className="l_line"></div>
                <div className="l_regm">
                    <h2>30秒快速注册出国去账号</h2>
                    <div className="l_regbo">
                        <div className="l_regm_left">
                            <label>
                                <p>*账号</p>
                                 <input type="text" placeholder="手机号/邮箱" ref="phone"/>
                                 <span className="l_tip">请输入邮箱或手机号</span>
                            </label>
                            <label>
                                <p>*密码</p>
                                 <input type="password" placeholder="6-20字符" ref="psw"/>
                                 <span className="l_tip">6-20字符</span>
                            </label>
                            <label>
                                <p>昵称</p>
                                 <input type="password" placeholder="6-20字符" ref="nickname"/>
                                 <span className="l_tip">设定一个昵称</span>
                            </label>
                            <label>
                                <p>*验证码</p>
                                 <input type="text" placeholder="6-20字符" id="l_yzm" ref="yzm"/>
                                 <em>看不清？<a>换一张</a></em>
                            </label>
                            <p className="l_reggroup">
                                <button className="l_regbtn">立即注册</button>
                                <i className="l_xy"><input type="checkbox" />我已阅读并同意<a>出国去协议</a></i>
                            </p>
                           
                        </div>
                        <div className="l_rgmright">
                            <p>已有出国去账号？<a>点击登录</a></p>
                            <p>快速登录:</p>
                            <p>
                                <a className="l_qq"></a>
                                <a className="l_sina"></a>    
                            </p>
                        </div>

                    </div>


                </div>
                <Footer02/>
            </div>
        );
    }
}

export default Register;
