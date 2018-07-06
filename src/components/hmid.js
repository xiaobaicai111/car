import React, { Component } from 'react';
import "../css/hao.css";
import "../mock/mock";
import $ from "jquery";

class Hmid extends Component {
    constructor(props){
        super(props)
        this.state={
            arr:[]
        }
    }

    
    componentDidMount(){
        var _this = this;
        $.ajax({
            type: "get",
            url: "http://www.baidu.com/api",
            dataType: "json",
            success: function (data) {
                console.log(data);
                _this.setState({arr:data.user})
            }
        });


    }

    componentDidUpdate(){
        var roundlistWidth = $(".h-roundlist").width();
        var liWidth = $(".h-youji").width()+20;
        var cols = Math.floor(roundlistWidth/liWidth);
        var arrHeight = [];
        var aLi = document.getElementsByClassName("h-youji");
        for(var i=0;i<cols;i++){
            aLi[i].style.top = 0;
			aLi[i].style.left = liWidth * i + "px";
            arrHeight.push(aLi[i].offsetHeight);
        }

        function colsMin(num){
            for(var j = num;j < aLi.length;j++){
                aLi[j].style.left = aLi[getMinIndex(arrHeight)].style.left;
				aLi[j].style.top = arrHeight[getMinIndex(arrHeight)] + "px";
				arrHeight[getMinIndex(arrHeight)] += aLi[j].offsetHeight;
            }
        }
        colsMin(cols);

        function getMinIndex(arr){
            var minVal = Math.min.apply(null,arr);
            var minIndex = arr.indexOf(minVal);
            return minIndex;
        }

    }


    render() {
        console.log(this.state);
        


        return (
            <div>
                <div id="h-explore">
                    <div className="h-world">
                        <div className="h-exploretit">
                            <h2>探索世界</h2>
                            <p>如果用心去感受，世界的每个角落都如此精彩</p>
                        </div>
                        <ul className="h-countrytj">
                            <li>
                                <img src={require('../image/aozhou.jpg')} alt="澳大利亚" title="澳大利亚Australia"/>
                                <h2>澳大利亚</h2>
                                <p>Australia</p>
                            </li>
                            <li>
                                <img src={require('../image/japan.jpg')} alt="日本" title="日本Japan"/>
                                <h2>日本</h2>
                                <p>Japan</p>
                            </li>
                            <li>
                                <img src={require('../image/singapore.jpg')} alt="新加坡" title="新加坡Singapore"/>
                                <h2 style={{width:'580px'}}>新加坡</h2>
                                <p style={{width:'580px'}}>Singapore</p>
                            </li>
                            <li>
                                <img src={require('../image/thailand.jpg')} alt="泰国" title="泰国Thailand"/>
                                <h2 style={{width:'580px'}}>泰国</h2>
                                <p style={{width:'580px'}}>Thailand</p>
                            </li>
                            <li>
                                <img src={require('../image/hongkong.jpg')} alt="中国香港" title="中国香港Hongkong"/>
                                <h2>中国香港</h2>
                                <p>Hongkong</p>
                            </li>
                            <li>
                                <img src={require('../image/taiwan.jpg')} alt="中国台湾" title="中国台湾Taiwan"/>
                                <h2>中国台湾</h2>
                                <p>Taiwan</p>
                            </li>
                            <li>
                                <img src={require('../image/macao.jpg')} alt="中国澳门" title="中国澳门Macao"/>
                                <h2>中国澳门</h2>
                                <p>Macao</p>
                            </li>
                            <li>
                                <img src={require('../image/korea.jpg')} alt="韩国" title="韩国Korea"/>
                                <h2>韩国</h2>
                                <p>Korea</p>
                            </li>
                            <li>
                                <img src={require('../image/america.jpg')} alt="美国" title="美国United States"/>
                                <h2 style={{width:'580px'}}>美国</h2>
                                <p style={{width:'580px'}}>United States</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="h-flowerworld">
                    <div className="h-flower">
                        <div className="h-flowertit">
                            <h2>花花世界</h2>
                            <p>世界的精彩在于你看待世界的角度</p>
                        </div>
                        <div className="h-flowerpic">
                            <ul className="h-flowerlist">
                                <li>
                                    <img src={require('../image/withfriend.jpg')} />
                                    <p>跟朋友一起疯</p>
                                </li>
                                <li>
                                    <img src={require('../image/andhe.jpg')} />
                                    <p>和他(她)的小世界</p>
                                </li>
                                <li>
                                    <img src={require('../image/withparent.jpg')} />
                                    <p>同长辈的慢旅行</p>
                                </li>
                                <li>
                                    <img src={require('../image/withbaby.jpg')} />
                                    <p>带宝宝去看童话</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="h-roundtheworld">
                    <div className="h-round">
                        <div className="h-roundtit">
                            <h2>环球体验家</h2>
                            <p>借助你的眼睛，让后来者看到世界的精彩</p>
                        </div>

                        <ul className="h-roundlist">
                            {
                                this.state.arr.map(function(item,i){
                                    return(
                                        <li className="h-youji" key={i}>
                                            <img src={item.picurl}/>
                                            <div className="h-roundtext">
                                                <b>{item.title}</b>
                                                <p>{item.text}</p>
                                            </div>
                                        </li>

                                    )
                                     
                                })
                            }
                           
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Hmid;
