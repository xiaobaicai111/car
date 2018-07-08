import React, { Component } from "react";
import Head from "./head";
import "../css/mdd.css";
import Footer02 from "./footer2";
import "../mock/mock";
import $ from "jquery";
class Place extends Component {
    constructor(props) {
        super(props);
        this.state={
            arr:[],
            haoquchu:[],   
        }
    }
    componentDidMount() {
        var _this = this;
        $.ajax({
            type: "get",
            url: "http://www.baidu.com/api",
            dataType: "json",
            success: function (data) {
                 _this.setState({arr:data.lvyou});
                 _this.setState({haoquchu:data.haoquchu});
            }
        });
        // 总页数
        _this.setState({totalpage:Math.ceil(_this.state.arr.length/this.state.pagesize)})

    }


    top() {
        $("body,html").animate({ scrollTop: 0 }, 1000);
    }
    render() {
        // console.log(this.state.arr,this.state.haoquchu)
        return (
            <div id="yb">
                <Head />
                <div className="yfj" />
                <div className="ybz">
                    <ul className="ymdd">
                        <li>
                            目的地&nbsp;<span>&gt;&nbsp;</span>
                        </li>
                        <li>泰国</li>
                    </ul>
                    <h2 className="ybt">更多自由选择</h2>
                    <div className="ycplx">
                        <dl>
                            <dt>目　的　地:</dt>
                            <dd>
                                <ul className="ymdul">
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl>
                            <dt> 产 品 类 型:</dt>
                            <dd>
                                <ul className="ylxul">
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                    <div className="ycpli">
                        <ul>

                        {
                            this.state.arr.map(function(item,i){
                                return(
                                    <li key={i}>
                                        <div>
                                            <a href="#">
                                                <img src={item.img} />
                                            </a>
                                        </div>
                                        <div className="ycpbbb">
                                            <a href="#">
                                                {item.title}
                                            </a>
                                            <p className="yqbl yleft">
                                                <b>￥{item.price}</b>
                                            </p>
                                            <p className="yqbr yright">{item.city}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                           
                        </ul>
                    </div>
                    {/* 分页 */}
                    <ul className="yfy">
                        <li className="ysyy yyy">
                            <a href="#">
                                <span />
                            </a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li className="yxyy yyy">
                            <a href="#">
                                <span />
                            </a>
                        </li>
                    </ul>
                    {/* 分页 */}
                    <div className="yhqc">
                        <h2>发现好趣处</h2>
                        <ul>
                        {
                            this.state.haoquchu.map(function(item,i){
                                return(
                                    <li key={i}>
                                        <div className="yhqc_t">
                                            <img src={item.img} />
                                        </div>
                                        <div className="yhqc_b">
                                            <p>{item.title}</p>
                                            <p>{item.etitle}</p>
                                            <div className="yxx">
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <span className="yright">{item.city}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }

                        </ul>
                    </div>
                </div>
                <div className="ycbl">
                    <div className="ycblwt">
                        <div className="ygwc">
                            <i />
                            <p>购物车</p>
                            <span id="ygwcsl">0</span>
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
                <Footer02 />
            </div>
        );
    }
}

export default Place;
