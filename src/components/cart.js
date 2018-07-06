import React, { Component } from 'react';
import Head from "./head";

class Cart extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Head />
                <div id="h-shop">
                    <div className="h-selectshop">
                        <div className="h-cartbar">
                            <ul className="h-steplist">
                                <li className="h-stepitem h-stepfirst">
                                    <div>1</div>
                                    <p>我的购物车</p>
                                </li>
                                <li className="h-stepitem">
                                    <div>2</div>
                                    <p>确认订单信息</p>
                                </li>
                                <li className="h-stepitem">
                                    <div>3</div>
                                    <p>在线支付</p>
                                </li>
                                <li className="h-stepitem h-steplast">
                                    <div>4</div>
                                    <p>支付成功</p>
                                </li>
                            </ul>
                        </div>
                        <p className="h-tipslogin">现在 <span>登录</span> 你购物车中的产品将被永久保存哦！</p>
                        <div className="h-cartth">
                            <div className="h-th h-cartth-check">
                                <input type="checkbox" id="h-thSelectAll"/>
                                <label fro="h-thSelectAll"  className="h-selected"></label>
                            </div>
                            <div className="h-th h-th-item"> 产品信息</div>
                            <div className="h-th h-th-info"></div>
                            <div className="h-th h-th-price">单价</div>
                            <div className="h-th h-th-num">数量</div>
                            <div className="h-th h-th-sum">总价</div>
                            <div className="h-th h-th-setting">操作</div>
                        </div>
                        <div className="h-carttable">
                            <div className="h-cartproduct">
                                <ul className="h-productlist">
                                    <li className="h-td h-td-check">
                                        <input type="checkbox" id="key1" className="h-cbxipt"/>
                                        <label fro="key1" className="h-tdselected"></label>
                                    </li>
                                    <li className="h-td h-td-item">
                                        <div className="h-td-inner">
                                            <div className="h-td-pic">
                                                <span></span>
                                            </div>
                                            <div className="h-td-proname">
                                                <a>香港机场快线车票(单程/双程)</a>
                                                <span>1件起订</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="h-td h-td-info">
                                        <div className="h-td-mod">
                                            <p>日期：2018-07-13</p>
                                            <p>类型：单程</p>
                                            <p>套餐：机场-青衣站</p>
                                        </div>
                                    </li>
                                    <li className="h-td h-td-price">
                                        <div className="h-price-single">
                                            <b>￥99</b>
                                        </div>
                                    </li>
                                    <li className="h-td h-td-amount">
                                        <div className="h-td-amount-single">
                                            <div className="h-amount-wrap">
                                                <span className="h-minus h-mpbtn">-</span>
                                                <input type="text" value="1" className="h-amount-num" autoComplete="off" readOnly/>
                                                <span className="h-plus h-mpbtn">+</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="h-td h-td-sum">
                                        <b className="h-pro-price">￥99</b>
                                    </li>
                                    <li className="h-td h-td-operate">
                                        <span className="h-td-del">删除</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-border"></div>
                        <div className="h-jiesuan">
                            <div className="h-float h-select-box">
                                <input type="checkbox" id="h-floatselectall"/>
                                <label fro="h-floatselectall" className="h-fl-selected"></label>
                                <span>&nbsp;全选</span>
                            </div>
                            <div className="h-float h-del-select">
                                <span id="h-delsetall">批量删除</span>
                            </div>
                            <div className="h-float h-jsbtn">
                                <div className="h-shopnum">
                                    <span>已选商品 <b id="h-allCount">1</b> 件</span>
                                </div>
                                <div className="h-allprice">
                                    <span>实付款：￥<b id="h-allPrices">99</b></span>
                                </div>
                                <div className="jiesuanbtn">
                                    <button id="gojiesuan">去结算</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Cart;
