import React, { Component } from "react";
import Store from "../redux/Store";
import Head from "./head";
import Footer2 from "./footer2";
import "../css/xq.css";
import $ from "jquery";
import { Map, Marker, NavigationControl, InfoWindow } from "react-bmap";
class Xiangqing extends Component {
    constructor(props) {
        super(props),
            (this.state = {
                arr: [],
                tu: [],
                shopnum:0,
                oindex:0,
                ocityid:0,
                lng:0, 
                lat:0,
                name:"",
                areaName:''

            });
            this.onchang=this.onchang.bind(this);
    }

    onchang(){
        this.setState({name:Store.getState()})
    }
       
    dianji(abc) {
        $(function() {
            //锚点跳转滑动效果
            $("html,body").animate({ scrollTop: $(abc).offset().top });
        });
    }

    componentDidMount() {
        Store.subscribe(this.onchang);
        var _this = this;
        // var oid = this.props.location.query.name;
        var oindex = this.props.match.params.id;
        this.setState({oindex:oindex});
        // this.setState({ocityid:oid});
        $.ajax({
            type: "get",
            url: "http://www.baidu.com/api",
            dataType: "json",
            success: function (data) {
                _this.setState({tu:data.xq});
            }
        });
        $.ajax({
            type: "post",
            url: "http://route.showapi.com/268-1",
            dataType: "json",
            data: {
                showapi_appid: "69317", //这里需要改成自己的appid
                showapi_sign: "556d90d5c7a54d139b99579970a50b2e", //这里需要改成自己的应用的密钥secret
                keyword: "泰山",
                proId: "",
                cityId: "",
                areaId: "",
                page: ""
            },

            error: function(XmlHttpRequest, textStatus, errorThrown) {
                alert("操作失败!");
            },
            success: function(result) {
                console.log(result.showapi_res_body.pagebean.contentlist) //console变量在ie低版本下不能用
                _this.setState({
                    arr: result.showapi_res_body.pagebean.contentlist[oindex]
                    
                });
                console.log(result.showapi_res_body.pagebean.contentlist,result.showapi_res_body.pagebean.contentlist[oindex])
                _this.setState({lng:result.showapi_res_body.pagebean.contentlist[oindex].location.lon});
                _this.setState({lat:result.showapi_res_body.pagebean.contentlist[oindex].location.lat});
                _this.setState({name:result.showapi_res_body.pagebean.contentlist[oindex].name});
                _this.setState({areaName:result.showapi_res_body.pagebean.contentlist[oindex].areaName});
            }
        });
        // console.log(this.props.location.query)
        // console.log($("#yxqnav").offset().top)
        $(function() {
            var ogd = $("#yxqnav").offset().top;
            $(window).bind("scroll", function() {
                if ($("#yxq").length == 1) {
                    if (
                        $("html,body").scrollTop() > $("#yxqnav").offset().top
                    ) {
                        $("#yxqnav_2").css({ position: "fixed", top: "0" });
                    } else if ($("html,body").scrollTop() < ogd) {
                        $("#yxqnav_2").css({ position: "static" });
                    }
                }
            });
        });

        //
        $(function() {
            var dateStr =
                '<div class="date-list"><div class="header clearfix"><div class="header-left fl">&lt;</div><div class="fl"><select class="year"></select></div><div class="fl"><select class="month"><option value="1">1月</option><option value="2">2月</option><option value="3">3月</option><option value="4">4月</option><option value="5">5月</option><option value="6">6月</option><option value="7">7月</option><option value="8">8月</option><option value="9">9月</option><option value="10">10月</option><option value="11">11月</option><option value="12">12月</option></select></div><div class="header-right fl">&gt;</div><div class="fr today">今日</div></div><table><thead><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>';
            $(dateStr).appendTo($(".date"));
            var $y = $(".year"),
                $m = $(".month"),
                $year = $y.val(),
                $month = $m.val(),
                current = new Date(),
                current_year = current.getFullYear(),
                current_month = current.getMonth() + 1,
                current_date = current.getDate();
            $m.val(current_month);
            $y.val(current_year);
            for (var i = 1917; i < 2118; i++) {
                var opt = "";
                opt += "<option>" + i + "</option>";
                $(opt).appendTo($y);
            }
            $y.val(current_year);
            show();
            function show() {
                $(".date").each(function() {
                    var $y = $(this).find(".year"),
                        $m = $(this).find(".month");
                    var year = $(this)
                            .find(".year")
                            .val(),
                        month = $(this)
                            .find(".month")
                            .val();
                    var dates = new Date(year, month, 0).getDate();
                    //根据年份和月份获取当月第一天的日期
                    date = new Date(new Date(year, month - 1, 1));
                    //根据年份和月份获取当月第一天是星期几:
                    var firstDay = date.getDay();
                    if (firstDay == 0) {
                        firstDay = 7;
                    }
                    var num = 1;
                    $(this)
                        .find("td")
                        .each(function() {
                            $(this).removeClass("current");
                            var $eq = $(this).index() + 1;
                            //给td赋值
                            if (
                                $eq < firstDay &&
                                $(this)
                                    .parent("tr")
                                    .index() === 0
                            ) {
                                $(this).html("");
                            } else {
                                if (num <= dates) {
                                    $(this).html(num);
                                    num++;
                                } else {
                                    $(this).html("");
                                }
                            }
                            //去掉内容为空的tr
                            if (
                                $(this).html() == "" &&
                                $(this)
                                    .siblings()
                                    .html() == ""
                            ) {
                                $(this)
                                    .parents("tr")
                                    .css("display", "none");
                            } else {
                                $(this)
                                    .parents("tr")
                                    .css("display", "table-row");
                            }
                            if (
                                $y.val() == current_year &&
                                $m.val() == current_month &&
                                $(this).html() == current_date
                            ) {
                                $(this).addClass("current");
                            } else {
                                $(this).removeClass("current");
                            }
                        });
                    num = 1;
                });
            }

            var date = new Date();
            //点击今日跳转到今日列表
            $(".today").on("click", function() {
                $y.val(current_year);
                $m.val(current_month);
                show();
                $(this)
                    .parents(".date-list")
                    .css("display", "none")
                    .siblings(".date-check")
                    .val(
                        current_year +
                            "-" +
                            zero(current_month) +
                            "-" +
                            zero(current_date)
                    );
            });
            $(".header select").on("change", function() {
                show();
            });
            var flag = 0;
            $(".date-list").hover(
                function() {
                    flag = 0;
                },
                function() {
                    flag = 1;
                }
            );
            //input框获得焦点，让日历显示。失去焦点后，让日历隐藏
            $(".date-check").each(function() {
                $(this).on("focus", function() {
                    var $outer = $(this).siblings(".date-list"),
                        $this_input = $(this);
                    $outer.css("display", "block");
                    $outer.find("td").each(function() {
                        var $this_td = $(this);
                        $this_td.on("click", function() {
                            var $input_year = $(this)
                                    .parents(".date-list")
                                    .find(".year")
                                    .val(),
                                $input_month = $(this)
                                    .parents(".date-list")
                                    .find(".month")
                                    .val(),
                                $input_val = $(this).html(),
                                date_str = "";
                            if ($this_td.html() != "") {
                                date_str +=
                                    $input_year +
                                    "-" +
                                    zero($input_month) +
                                    "-" +
                                    zero($input_val);
                                $this_input.val(date_str);
                                $outer.css("display", "none");
                            }
                        });
                    });
                });
                $(this).on("blur", function() {
                    if (flag == 1) {
                        $(this)
                            .siblings(".date-list")
                            .css("display", "none");
                        flag = 0;
                    }
                });
            });
            //月份和日期小于10的补0
            function zero(num) {
                return num >= 10 ? num : "0" + num;
            }
            $("#from td,#to td,#from .today,#to .today").on(
                "click",
                function() {
                    var d_year = $(this)
                            .parents(".date-list")
                            .find(".year")
                            .val(),
                        d_month = $(this)
                            .parents(".date-list")
                            .find(".month")
                            .val(),
                        $td_val;
                    if (
                        $(this)
                            .prop("tagName")
                            .toLowerCase() == "td"
                    ) {
                        $td_val = $(this).html();
                        if ($td_val != "") {
                            var str = d_year + "-" + d_month + "-" + $td_val;
                            $(this)
                                .parents(".date-list")
                                .siblings(".date-check")
                                .val(str);
                        }
                    }
                }
            );
            $(".header-left").on("click", function() {
                var $year = parseInt(
                    $(this)
                        .parents(".header")
                        .find(".year")
                        .val()
                );
                var $mon = parseInt(
                    $(this)
                        .parents(".header")
                        .find(".month")
                        .val()
                );
                if ($mon >= 2) {
                    $mon -= 1;
                } else {
                    $year -= 1;
                    $mon = 12;
                    $(this)
                        .parents(".header")
                        .find(".month")
                        .val($mon);
                    $(this)
                        .parents(".header")
                        .find(".year")
                        .val($year);
                }
                $(this)
                    .parents(".header")
                    .find(".month")
                    .val($mon);
                show();
            });
            $(".header-right").on("click", function() {
                var $year = parseInt(
                    $(this)
                        .parents(".header")
                        .find(".year")
                        .val()
                );
                var $mon = parseInt(
                    $(this)
                        .parents(".header")
                        .find(".month")
                        .val()
                );
                if ($mon < 12) {
                    $mon += 1;
                } else {
                    $year += 1;
                    $mon = 1;
                    $(this)
                        .parents(".header")
                        .find(".month")
                        .val($mon);
                    $(this)
                        .parents(".header")
                        .find(".year")
                        .val($year);
                }
                $(this)
                    .parents(".header")
                    .find(".month")
                    .val($mon);
                show();
            });
            document.body.onselectstart = document.body.ondrag = function() {
                return false;
            };
        });
        //
        //轮播图
        $(function() {
            clearInterval(this.timers);
            var olw = $(".ygmtl_lbt ul")
                .find("li")
                .eq(0);
            $(".ygmtl_lbt ul").css({
                width: olw.width() * $(".ygmtl_lbt ul").find("li").length,
                position: "absolute"
            });
            $(".ygmtl_lbt ul")
                .find("li")
                .width($(".ygmtl_lbt ul").width() / 4);
            var i = 0;
            var _this = this;
            this.timers = setInterval(function() {
                i++;
                if (i >= 4) {
                    i = 1;
                    $(".ygmtl_lbt ul").css({ left: 0 });
                }
                $(".ygmtl_lbt ul").animate({ left: -i * olw.width() });
            }, 3000);
            $(".yxqbtn2").click(function() {
                clearInterval(_this.timers);
                i--;
                if (i <= -1) {
                    i = 2;
                    $(".ygmtl_lbt ul").css({ left: -3 * olw.width() });
                }
                $(".ygmtl_lbt ul").animate({ left: -i * olw.width() });
                _this.timers = setInterval(function() {
                    i++;
                    if (i >= 4) {
                        i = 1;
                        $(".ygmtl_lbt ul").css({ left: 0 });
                    }
                    $(".ygmtl_lbt ul").animate({ left: -i * olw.width() });
                }, 3000);
            });
            $(".yxqbtn1").click(function() {
                clearInterval(_this.timers);
                i++;
                if (i >= 4) {
                    i = 1;
                    $(".ygmtl_lbt ul").css({ left: 0 });
                }
                $(".ygmtl_lbt ul").animate({ left: -i * olw.width() });
                _this.timers = setInterval(function() {
                    i++;
                    if (i >= 4) {
                        i = 1;
                        $(".ygmtl_lbt ul").css({ left: 0 });
                    }
                    $(".ygmtl_lbt ul").animate({ left: -i * olw.width() });
                }, 3000);
            });
        });
        //结束
    }
    componentWillUnmount() {
        clearTimeout(this.timers);
    }
    slxz() {
        $(".yslxz_c").css({ display: "block" });
    }
    top() {
        $("body,html").animate({ scrollTop: 0 }, 1000);
    }
    jiet() {
        var i = $(".yet").val();
        i--;
        if (i <= 0) {
            i = 0;
        }
        $(".yet").val(i);
    }
    jaet() {
        var i = $(".yet").val();
        i++;
        $(".yet").val(i);
    }
    jicr() {
        var i = $(".ycr").val();
        i--;
        if (i <= 0) {
            i = 0;
        }
        $(".ycr").val(i);
    }
    jacr() {
        var i = $(".ycr").val();
        i++;
        $(".ycr").val(i);
    }
    yqd() {
        var ocr = $(".ycr").val();
        var oet = $(".yet").val();
        if (ocr + oet <= 0) {
            alert("一件起售！！！");
        } else {
            $("#ycroet").html(
                `成人：<span>${ocr}</span>儿童：<span>${oet}</span>`
            );
            $(".yslxz_c").css({ display: "none" });
        }
    }
    addcart(){
        var _this=this;
        let oIndex=this.state.oindex;
        let sum=Number(this.refs.adult.value)+Number(this.refs.child.value);
        if(this.state.name.user){
            
            $.ajax({
                type: "get",
                url: "http://linge669.com/data/userinfo.php",
                data: {
                    username:this.state.name.user
                },
                dataType: "json",
                success: function (data) {
                    var arr=data[0];
                    var obj={
                        oIndex:oIndex,
                        sum:sum
        
                    };
                    if(arr.shop_id==""){
                        arr.shop_id=[];

                    }
                    var shop=JSON.parse(arr.shop_id);
                    shop.push(obj);
                    console.log(shop);
                    let l_count=0;
                    shop.map(function(item){
                        l_count+=Number(item.sum);

                    })
                    _this.setState({shopnum:l_count});
                    $.ajax({
                        type: "get",
                        url: "http://linge669.com/data/userinfo.php",
                        data: {
                            status:"addshop",
                            username:_this.state.name.user,
                            shop_id:JSON.stringify(shop)
                        },
                        success: function (data) {
                            if(data==1){
                                alert("添加成功")
                            }
                        }
                    }); 
                                      
                }
            });
            
            

            

        }else{
            alert("请先登录")
        }
        


    }
    render() {
        //  console.log(this.oindex,this.ocityid);
        return (
            <div id="yxq">
                <Head />
                <div className="yfj" />
                <div className="yxqt">
                    <ul className="ymdd">
                        <li>
                            首页<span>&gt;</span>
                        </li>
                        <li>
                            目的地<span>&gt;</span>
                        </li>
                        <li>{this.state.arr.areaName}</li>
                    </ul>
                    <div className="ygmt">
                        <div className="ygmtl yleft">
                            <div className="yxqbt">
                                <h1>
                                    {/* 皮皮岛+鸡蛋岛快艇1日游（含中文导游、全岛接送、浮潜用具） */}
                                    {this.state.arr.name}
                                </h1>
                                <h2>{this.state.arr.address}</h2>
                            </div>
                            <div className="ygmtl_box">
                                <div className="ygmtl_lbt">
                                    <div className="ybtn ybtn3 yxqbtn1">
                                        &lt;
                                    </div>
                                    <div className="ybtn ybtn3 yxqbtn2">
                                        &gt;
                                    </div>
                                    <ul>
                                    <li>
                                        <img src={this.state.tu.img1}/>
                                    </li>
                                    <li>
                                        <img src={this.state.tu.img2}/>
                                    </li>
                                    <li>
                                        <img src={this.state.tu.img3}/>
                                    </li>
                                    <li>
                                        <img src={this.state.tu.img1}/>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="ygmtr yright">
                            <div className="ygmtr_bt">
                                <p>
                                    <b>成人</b>
                                    <span>￥{this.state.arr.cityId}</span>
                                    <b>儿童</b>
                                    <span>￥{this.state.arr.cityId}</span>
                                </p>
                                <p>
                                    <i>当地价：</i>
                                    <span>成人￥{this.state.arr.cityId}</span>
                                    <span>儿童￥{this.state.arr.cityId}</span>
                                </p>
                            </div>
                            <div className="ygmtr_rq yoption">
                                <p>出游日期：</p>
                                <div id="ycyrq" className="yddiv">
                                    <div className="date date1 fl" id="from">
                                        <input
                                            type="text"
                                            className="date-check"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="ygmtr_sl yoption">
                                <p>数量选择：</p>
                                <div id="yslxz" className="yddiv">
                                    <p
                                        onClick={this.slxz.bind(this)}
                                        id="ycroet"
                                    />
                                    <div className="yslxz_c">
                                        <div className="yslxz_warp">
                                            <div className="yslxz_1">
                                                <label className="yleft">
                                                    成人
                                                </label>
                                                <div className="yjjk">
                                                    <button
                                                        onClick={this.jicr.bind(
                                                            this
                                                        )}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="Number"
                                                        className="ycr"
                                                        defaultValue={1}
                                                        ref="adult"
                                                    />
                                                    <button
                                                        onClick={this.jacr.bind(
                                                            this
                                                        )}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="yslxz_1">
                                                <label className="yleft">
                                                    儿童
                                                </label>
                                                <div className="yjjk">
                                                    <button
                                                        onClick={this.jiet.bind(
                                                            this
                                                        )}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="Number"
                                                        className="yet"
                                                        defaultValue={0}
                                                        ref="child"
                                                    />
                                                    <button
                                                        onClick={this.jaet.bind(
                                                            this
                                                        )}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="yxzsl_qd"
                                            onClick={this.yqd.bind(this)}
                                        >
                                            确定
                                        </button>
                                        <span className="yyjqs">一件起售</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ygmtr_btn">
                                <button id="ygmtr_jrgwc" data-in={this.state.oindex} data-id={this.state.ocityid} onClick={this.addcart.bind(this)}>加入购物车</button>
                                <button id="ygmtr_jrsc">加入收藏</button>
                            </div>
                            <div className="ygmtr_end">下载APP购买更便宜</div>
                        </div>
                    </div>
                </div>
                <div id="yxqnav">
                    <div id="yxqnav_2">
                        <ul>
                            <li className="ynav_active">
                                <a onClick={this.dianji.bind(this, "#ycpjs")}>
                                    <p>产品介绍</p>
                                </a>
                            </li>
                            <li>
                                <a onClick={this.dianji.bind(this, "#ydt")}>
                                    <p>地图</p>
                                </a>
                            </li>
                            <li>
                                <a onClick={this.dianji.bind(this, "#yydxz")}>
                                    <p>预订须知</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="yxq_warp">
                    <div id="ycpjs">
                        <div className="ycpjs_bt">
                            <h2 className="yxqyybt">产品介绍</h2>
                        </div>
                        <div className="ycpjs_lbt_warp">
                            <div className="ycpjs_lbt">
                                <ul>
                                    <li>
                                        <img src={this.state.tu.img1}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ycpjs_wenzi">
                            <div className="ycpjs_wz_warp">
                                <ul className="ycpjs_wz">
                                    <li>
                                        <h5>走多远 算多远</h5>
                                        <p>
                                            玛雅湾三面环山，沙滩雪白，并因莱昂纳多主演的电影《海滩》而出名。玛雅湾海滩虽不大，但在礁石壁立的小皮皮岛上也实属难得了。玛雅湾四周上百米的绝壁气势非凡，这里的海水碧蓝，岸边点缀着精巧的椰树，有一种典型的热带海岛的气息，适合观景和潜水。
                                        </p>
                                        <p>
                                            玛雅湾的沙滩混杂了一些珊瑚和贝壳，赤脚踩上去当心被划伤。游客最好穿上软底拖鞋，这样玩得尽兴又安全。
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="ydt">
                        <div className="ydt_bt">
                            <h2 className="yxqyybt">地图</h2>
                            <p>地址： {this.state.arr.address}</p>
                            <p>{this.state.arr.attention}</p>
                        </div>
                        <div id="ydt_dt">
                            {/* this.state.arr.location.lon */}
                            {/* this.state.arr.location.lat */}
                            <Map
                                center={{ lng:this.state.lng, lat:this.state.lat}}
                                zoom="12"
                                style={{ height: "400px" }}
                            >
                                <Marker position={{lng:this.state.lng, lat:this.state.lat}} />
                                <NavigationControl />
                                <InfoWindow
                                    position={{lng:this.state.lng, lat:this.state.lat}}
                                    text={this.state.areaName}
                                    title={this.state.name}
                                />
                            </Map>
                        </div>
                    </div>
                </div>
                <div id="yydxz">
                    <div className="yydxz_bt">
                        <h2 className="yxqyybt">预订须知</h2>
                    </div>
                    <div className="yydxz_bg">
                        <table>
                            <tbody>
                                <tr>
                                    <td>如何使用订单确认函：</td>
                                    <td>
                                        我们会发送订单确认函到你的邮箱中，至消费地点手机出示电子票即可（建议打印，以免出现手机没电、清晰度不够等问题）。
                                    </td>
                                </tr>
                                <tr>
                                    <td>包含费用：</td>
                                    <td>
                                        1. 往返拼车用车。 <br />
                                        2. 全程快艇费用。 <br />
                                        3. 行程内所列餐食。 <br />
                                        4. 全程中文导游服务。 <br />
                                        5. 泰国当地意外保险。 <br />
                                        6. 软饮料（瓶装），当季的新鲜水果。{" "}
                                        <br />
                                        7. 浮潜用具 （潜水镜，呼吸管，救生衣）。{" "}
                                        <br />
                                        8. 上岛费。
                                    </td>
                                </tr>
                                <tr>
                                    <td>包含费用：</td>
                                    <td>
                                        1. 往返拼车用车。 <br />
                                        2. 全程快艇费用。 <br />
                                        3. 行程内所列餐食。 <br />
                                        4. 全程中文导游服务。 <br />
                                        5. 泰国当地意外保险。 <br />
                                        6. 软饮料（瓶装），当季的新鲜水果。{" "}
                                        <br />
                                        7. 浮潜用具 （潜水镜，呼吸管，救生衣）。{" "}
                                        <br />
                                        8. 上岛费。
                                    </td>
                                </tr>
                                <tr>
                                    <td>未包含费用：</td>
                                    <td>
                                        1.
                                        超出指定接送区域，需额外支付一定费用：{" "}
                                        <br />
                                        1）
                                        layan拉扬海滩、maikhao迈考海滩、naiharn柰函海滩、naithorn奈通海滩、naiyang奈扬海滩、ao
                                        por奥波、panwa攀瓦、rawai拉崴海滩、siray西瑞
                                        ——300泰株/人<br />
                                        2）
                                        kamala卡马拉海滩、surin苏林海滩、bangtao邦涛海滩、laguna拉古娜
                                        ​——100泰株/人 <br />
                                        2. 此产品不含小费费用。 <br />
                                        所有个人消费及费用包含中未提及费用{" "}
                                        <br />
                                        *
                                        因交通延阻、罢工、天气、飞机、机器故障、航班取消或更改时间等不可抗力原因所导致的额外费用。{" "}
                                        <br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>使用说明：</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td>适用年龄：</td>
                                    <td>
                                        儿童：4岁-11岁（含），
                                        成人：12岁（含）以上，（年龄计算方式：年龄=今年年份-出生年份，不算月份）
                                        4岁以下儿童免费但不含保险，不建议出行
                                    </td>
                                </tr>
                                <tr>
                                    <td>消费地址：</td>
                                    <td>
                                        Thepkasattri Rd, T. Kohkaew, A. Muang,
                                        ภูเก็ต 83200
                                    </td>
                                </tr>
                                <tr>
                                    <td>接送服务说明：</td>
                                    <td>
                                        请按照指定时间提前5-10分钟至酒店大堂【在接送范围内】集合，凭短信和预订人姓名与司机核对使用。
                                        温馨提示：行程为拼车，时间点无法做到十分准确，因此短信给出的是时间段，需您在此时间段之前即到达集合点。
                                        请勿迟到，司机最多等待10分钟即离开，迟到视作自动放弃，费用不退。
                                    </td>
                                </tr>
                                <tr>
                                    <td>健康须知：</td>
                                    <td>
                                        本行程禁止60岁以上老人、孕妇、患有心脏病、高血压、颈椎病患者等特殊疾病患者以及近期内患有疾病或者进行手术者，以及严重晕船者出行
                                    </td>
                                </tr>
                                <tr>
                                    <td>营业(服务)时间：</td>
                                    <td>
                                        2017年10月26日关闭一天。27日正常运营。
                                    </td>
                                </tr>
                                <tr>
                                    <td>退改政策：</td>
                                    <td>
                                        我们提供“退改服务”，细则如下：
                                        º预约消费日期前15天提出退改（无需理由），不收取任何费用。
                                        º预约消费日期前4-14天提出退改，收取支付金额30%的手续费。
                                        º预约消费日期前3天内不支持退款。
                                    </td>
                                </tr>
                                <tr>
                                    <td>温馨提示：</td>
                                    <td>
                                        1.
                                        请旅客于旅游期间内，保持您的手机畅通，以便相关接待人员与您联系。
                                        2.
                                        请穿着舒适的衣服、鞋子参与活动，准备好防晒霜、防虫液、防风外套、相机等物品。
                                        3.
                                        请保管好随身物品，尽量不要携带贵重物品，如在行程中遗失或损坏，损失需自行承担。
                                        4.
                                        此为一日游，需当天往返，不能留在皮皮岛。
                                        5.国家公园最新通知：玛雅湾也称情人沙滩，将于2018年6-9月进行关闭。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="ycbl">
                    <div className="ycblwt">
                        <div className="ygwc">
                            <i />
                            <p>购物车</p>
                            <span id="ygwcsl">{this.state.shopnum}</span>
                        </div>
                        <div className="ygwot">
                            <a href="#">
                                <span>App下载</span>
                            </a>
                            <a href="#">
                                <span>意见反馈</span>
                            </a>
                            <a>
                                <span onClick={this.top.bind(this)} />
                            </a>
                        </div>
                    </div>
                </div>
                <Footer2 />
            </div>
        );
    }
}

export default Xiangqing;
