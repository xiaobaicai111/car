import React, { Component } from 'react';
import "../css/ylbt.css";
import Head from "./head";
import Footer from "./footer";
import $ from "jquery";

import Hmid from "./hmid";
class Home extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        //轮播图
        $(function() {
            clearInterval(this.timer);
                var olw = $("#ylbtul")
                .find("li")
                .eq(0);
            $("#ylbtul").css({
                width: olw.width() * $("#ylbtul").find("li").length,
                position: "absolute"
            });
            $("#ylbtul")
                .find("li")
                .width($("#ylbtul").width() / 4);
            var i = 0;
            var _this=this;
            this.timer=setInterval(function(){
                i++;
                if (i >= 4) {
                    i = 1;
                    $("#ylbtul").css({ left: 0 });
                }
                $("#ylbtul").animate({ left: -i * olw.width() });
            },3000)
            $(".ybtn1").click(function() {
                clearInterval(_this.timer);
                i--;
                if (i <= -1) {
                    i = 2;
                    $("#ylbtul").css({ left: -3 * olw.width() });
                }
                $("#ylbtul").animate({ left: -i * olw.width() });
                _this.timer=setInterval(function(){
                    i++;
                    if (i >= 4) {
                        i = 1;
                        $("#ylbtul").css({ left: 0 });
                    }
                    $("#ylbtul").animate({ left: -i * olw.width() });
                },3000);
            });
            $(".ybtn2").click(function() {
                clearInterval(_this.timer);
                i++;
                if (i >= 4) {
                    i = 1;
                    $("#ylbtul").css({ left: 0 });
                }
                $("#ylbtul").animate({ left: -i * olw.width() });
                _this.timer=setInterval(function(){
                    i++;
                    if (i >= 4) {
                        i = 1;
                        $("#ylbtul").css({ left: 0 });
                    }
                    $("#ylbtul").animate({ left: -i * olw.width() });
                },3000)
            });
            
        });
        //结束
    }

    search(){
        var ysearch = $("#ysearch").val()
        if(ysearch == ""){
            alert("搜索内容错误")
        }else{
            this.props.history.push({pathname:'/place',query:{ysearch:ysearch}})
        }
        
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        
        return (
            <div>
                <Head/>
                <div id="yb">
                    <div id="ylbt">
                        <div id="ylbtbox">
                            <ul id="ylbtul">
                                <li />
                                <li />
                                <li />
                                <li />
                            </ul>
                            <div className="ybtn1 ybtn">&lt;</div>
                            <div className="ybtn2 ybtn">&gt;</div>
                        </div>
                    </div>
                    <div id="yssk">
                        <div className="yss">
                            <input type="text" placeholder="请输入目的地或者产品名称，例如：香港" id="ysearch" ref="ysech"/>
                            <a className="icon" onClick={this.search.bind(this)}></a>
                        </div>
                    </div>
                </div>
                <Hmid/>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;
