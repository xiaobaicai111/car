import React, { Component } from "react";
import $ from "jquery";
import "../css/ylbt.css";
class Ylbt extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //轮播图
        $(function() {
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
            $(".ybtn1").click(function() {
                i--;
                if (i <= -1) {
                    i = 2;
                    $("#ylbtul").css({ left: -3 * olw.width() });
                }
                $("#ylbtul").animate({ left: -i * olw.width() });
            });
            $(".ybtn2").click(function() {
                i++;
                if (i >= 4) {
                    i = 1;
                    $("#ylbtul").css({ left: 0 });
                }
                $("#ylbtul").animate({ left: -i * olw.width() });
            });
        });
        //结束
    }
    render() {
        return (
            <div id="ybox">
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
                        <input type="text" placeholder="请输入目的地或者产品名称，例如：香港" />
                        <a className="icon"></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ylbt;
