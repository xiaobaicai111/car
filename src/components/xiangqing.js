import React, { Component } from "react";
import Head from "./head";
import Footer2 from "./footer2";
import "../css/xq.css";
import $ from "jquery";
class Xiangqing extends Component {
    constructor(props){
        super(props)
    }
    dianji(abc){
        $(function(){
            //锚点跳转滑动效果  
            $("html,body").animate({scrollTop:$(abc).offset().top})
        })
    }
    componentDidMount() {
        console.log($("#yxqnav").offset().top)
        $(function(){
            var ogd=$("#yxqnav").offset().top;
            $(window).scroll( function() { 
                if($("html,body").scrollTop()>$("#yxqnav").offset().top){
                    $("#yxqnav_2").css({"position":"fixed","top":"0"})
                }else if($("html,body").scrollTop()<ogd){
                    $("#yxqnav_2").css({"position":"static"})
                }
             } );
        })
    }
   
    render() {
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
                        <li>泰国</li>
                    </ul>
                    <div className="ygmt">
                        <div className="ygmtl yleft">
                            <div className="yxqbt">
                                <h1>
                                    皮皮岛+鸡蛋岛快艇1日游（含中文导游、全岛接送、浮潜用具）
                                </h1>
                                <h2>
                                    一应俱全的海岛也有着原始的迷人气息，你需要用心感受这片自然之美
                                </h2>
                            </div>
                            <div className="ygmtl_box">
                                <div className="ygmtl_lbt">
                                    <ul>
                                        <li>
                                            <img
                                                src={require("../image/xqlbt.jpg")}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="ygmtr yright">
                            <div className="ygmtr_bt">
                                <p>
                                    <b>成人</b>
                                    <span>$306</span>
                                    <b>儿童</b>
                                    <span>$306</span>
                                </p>
                                <p>
                                    <i>当地价：</i>
                                    <span>成人$306</span>
                                    <span>儿童$306</span>
                                </p>
                            </div>
                            <div className="ygmtr_rq yoption">
                                <p>出游日期：</p>
                                <div id="ycyrq" />
                            </div>
                            <div className="ygmtr_sl yoption">
                                <p>数量选择</p>
                                <div id="yslxz" />
                            </div>
                            <div className="ygmtr_btn">
                                <button id="ygmtr_jrgwc">加入购物车</button>
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
                            <a onClick={this.dianji.bind(this,"#ycpjs")} >
                            <p>产品介绍</p>
                            </a>
                        </li>
                        <li>
                        <a onClick={this.dianji.bind(this,"#ydt")} >
                            <p>地图</p>
                            </a>
                        </li>
                        <li>
                        <a onClick={this.dianji.bind(this,"#yydxz")} >
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
                                        <img
                                            src={require("../image/cpjslbt.jpg")}
                                        />
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
                            <p>
                                地址： Phi Phi Island, Tambol Ao-Nang Muang,
                                Thailand
                            </p>
                            <p>
                                到达皮皮岛唯一的途径就是乘船，需要先到普吉岛或甲米，再搭轮渡前往。
                            </p>
                        </div>
                        <div id="ydt_dt" />
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
                <Footer2 />
            </div>
        );
    }
}

export default Xiangqing;
