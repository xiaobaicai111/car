import React, { Component } from "react";
import "../css/axz.css";
import $ from "jquery";
class Appxiazai extends Component {
    componentDidMount(){
        $(function(){
            
            //云彩
            var flag=true;
            setInterval(function(){
                flag=!flag
                if(flag){
                $('.lx').animate({top :400, left :-400}, 1000, 'swing');
                $('.yun').animate({left:"60px"},"slow")
                }else{
                $('.lx').css({top :-270,left:1200}, 1000, 'swing');
                $('.yun').animate({left:"100px"},"slow")
                }
            },3000)
            
               
            
        })
    }
    render() {
        return (
            <div id="ybox">
                <div className="ybo">
                    <img
                        src={require("../image/mountain.png")}
                        className="shan"
                    />
                </div>
                <div className="sun">
                    <img src={require("../image/moon.png")} className="ty"/>
                    <img src={require("../image/cloud.png")} className="yun"/>
                    <img src={require("../image/speed.png")} className="lx"/>
                </div>
                <div className="logo">
                    <img src={require("../image/logo (1).png")} />
                    <a href="#">立即下载</a>
                    <a href="#" className="gnjs">功能介绍</a>
                </div>
            </div>
        );
    }
}

export default Appxiazai;
