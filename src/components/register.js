import React, { Component } from 'react';
import Head from "./head";
import "../css/register.css";
import Footer02 from "./footer2";
import $ from "jquery";
const rand=[];
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            str:""
        }
    }
   register(){
       var _this=this;
        if($("#l_yzm").val()==_this.state.str){
                $.ajax({
                    type: "post",
                    url: "http://linge669.com/data/userinfo.php",
                    data: {
                        status:"register",
                        username:_this.refs.phone.value,
                        password:_this.refs.psw.value,
                        phone:_this.refs.nickname.value
                    },
                    success: function (data) {
                        console.log(data)
                        if(data==0){
                            alert("用户名已存在")
                        }else if(data==1){
                            alert("注册成功");
                            _this.props.history.push("/login")
                        }else{
                            alert("未知错误")
                        }

                    }
                });

        }else{
            alert("验证码错误")


   }
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
                                 <input type="text" placeholder="6-20字符" ref="nickname"/>
                                 <span className="l_tip">设定一个昵称</span>
                            </label>
                            <label>
                                <p>*验证码</p>
                                 <input type="text" placeholder="6-20字符" id="l_yzm" ref="yzm"/>
                                <canvas width="100" height="40" id="verifyCanvas"></canvas>
                                <img id="code_img"/>
                            </label>
                            <p className="l_reggroup">
                                <button className="l_regbtn" onClick={this.register.bind(this)}>立即注册</button>
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

    componentDidMount(){
        var _this=this;
        var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'];

        drawCode();
        // 绘制验证码
        function drawCode() {
            var canvas = document.getElementById("verifyCanvas");  //获取HTML端画布
            var context = canvas.getContext("2d");                 //获取画布2D上下文
            context.fillStyle = "cornflowerblue";                  //画布填充色
            context.fillRect(0, 0, canvas.width, canvas.height);   //清空画布
            context.fillStyle = "white";                           //设置字体颜色
            context.font = "25px Arial";                           //设置字体
            var rand = new Array();
            var x = new Array();
            var y = new Array();
            for (var i = 0; i < 5; i++) {
                rand[i] = nums[Math.floor(Math.random() * nums.length)]
                x[i] = i * 16 + 10;
                y[i] = Math.random() * 20 + 20;
                context.fillText(rand[i], x[i], y[i]);

            }
            //画3条随机线
            for (var i = 0; i < 3; i++) {
                drawline(canvas, context);
            }

            // 画30个随机点
            for (var i = 0; i < 30; i++) {
                drawDot(canvas, context);
            }
            convertCanvasToImage(canvas);
            _this.state.str=rand.join("");
            console.log(_this.state.str);
        }
        

        // 随机线
        function drawline(canvas, context) {
            context.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));             //随机线的起点x坐标是画布x坐标0位置，y坐标是画布高度的随机数
            context.lineTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));  //随机线的终点x坐标是画布宽度，y坐标是画布高度的随机数
            context.lineWidth = 0.5;                                                  //随机线宽
            context.strokeStyle = 'rgba(50,50,50,0.3)';                               //随机线描边属性
            context.stroke();                                                         //描边，即起点描到终点
        }
        // 随机点(所谓画点其实就是画1px像素的线，方法不再赘述)
        function drawDot(canvas, context) {
            var px = Math.floor(Math.random() * canvas.width);
            var py = Math.floor(Math.random() * canvas.height);
            context.moveTo(px, py);
            context.lineTo(px + 1, py + 1);
            context.lineWidth = 0.2;
            context.stroke();

        }
        // 绘制图片
        function convertCanvasToImage(canvas) {
            document.getElementById("verifyCanvas").style.display = "none";
            var image = document.getElementById("code_img");
            image.src = canvas.toDataURL("image/png");
            return image;
        }

        // 点击图片刷新
        document.getElementById('code_img').onclick = function () {
            $('#verifyCanvas').remove();
            $('#code_img').before('<canvas width="100" height="40" id="verifyCanvas"></canvas>');
            drawCode();
        }


    }
   

}

export default Register;
