import React, { Component } from 'react';
import Head from "./head";
import Footer02 from "./footer2";
import $ from "jquery";
import Store from "../redux/Store";

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            shopnum:0,
            cart_arr:[],
            name:Store.getState()
        }
        this.onchang=this.onchang.bind(this);
        this.jicr=function() {
            var i = $(".ycr").val();
            i--;
            $(".ycr").val(i);
        }
        this.jacr=function() {
            var i = $(".ycr").val();
            i++;
            $(".ycr").val(i);
        }
    }
    onchang(){
        this.setState({name:Store.getState()})
    }
    componentDidMount(){
        Store.subscribe(this.onchang);
        console.log(this.state.cart_arr);
            if(this.state.name.user){
                var _this=this;
                $.ajax({
                    type: "get",
                    url: "http://linge669.com/data/userinfo.php",
                    data: {
                        username:_this.state.name.user
                    },
                    dataType: "json",
                    success: function (data) {
                        var arr=data[0];
                        let shop=JSON.parse(arr.shop_id);
                        console.log(shop);
                        $.ajax({
                            type: "post",
                            url: "http://route.showapi.com/268-1",
                            dataType: "json",
                            data: {
                                showapi_appid: "69207", //这里需要改成自己的appid
                                showapi_sign: "e26879ad01c04542837b013535d41e9a", //这里需要改成自己的应用的密钥secret
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
                                var list_arr=result.showapi_res_body.pagebean.contentlist;
                               let str="";
                               let l_count=0;
                               shop.map(function(item,i){
                                   var index=item.oIndex; 
                                   l_count+=Number(item.sum);
                                   _this.setState({shopnum:l_count});
                                   str+=`<ul class="h-productlist" key=${i}>
                                        <li class="h-td h-td-check">
                                            <input type="checkbox" id="key1" class="h-cbxipt"/>
                                            <label fro="key1" class="h-tdselected"></label>
                                        </li>
                                        <li class="h-td h-td-item">
                                            <div class="h-td-inner">
                                                <div class="h-td-pic">
                                                    <span></span>
                                                </div>
                                                <div class="h-td-proname">
                                                    <a>${list_arr[index].name}</a>
                                                    <span>1件起订</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="h-td h-td-info">
                                            <div class="h-td-mod">
                                                <p>类型：单程</p>
                                                <p>套餐：机场-青衣站</p>
                                            </div>
                                        </li>
                                        <li class="h-td h-td-price">
                                            <div class="h-price-single">
                                                <b>￥${list_arr[index].cityId}</b>
                                            </div>
                                        </li>
                                        <li class="h-td h-td-amount">
                                            <div class="h-td-amount-single">
                                                <div class="h-amount-wrap">
                                                    <span class="h-minus h-mpbtn" oIndex=${index}>-</span>
                                                    <input
                                                            type="Number"
                                                            class="ycr"
                                                            index=${item.oIndex}
                                                            value=${item.sum}
                                                            min=${0}
                                                        />
                                                    <span class="h-plus h-mpbtn" oIndex=${index}>+</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="h-td h-td-sum">
                                            <b class="h-pro-price">￥${item.sum*294}</b>
                                        </li>
                                        <li class="h-td h-td-operate">
                                            <span class="h-td-del" index=${item.oIndex}>删除</span>
                                        </li>
                                    </ul>`
                               })
                               $(".h-cartproduct").append(str);
                               $(".h-minus").on("click",function(){
                                    var i = $(".ycr").val();
                                    if (i <= 0) {
                                        i = 0;
                                    }
                                    i--;
                                    $(".ycr").val(i);
                                    var obj={
                                        oIndex:$(this).attr("oIndex"),
                                        sum:$(".ycr").val()

                                    }
                                    console.log(obj)
                               })
                               $(".h-plus").on("click",function(){
                                var i = $(".ycr").val();
                                i++;
                                $(".ycr").val(i);
                           })
                            }
                        });

                }
            });

        } 
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
                                    <span>已选商品 <b id="h-allCount">{this.state.shopnum}</b> 件</span>
                                </div>
                                <div className="h-allprice">
                                    <span>实付款：￥<b id="h-allPrices">{this.state.shopnum*294}</b></span>
                                </div>
                                <div className="jiesuanbtn">
                                    <button id="gojiesuan">去结算</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer02/>
            </div>
        );
    }
}

export default Cart;
