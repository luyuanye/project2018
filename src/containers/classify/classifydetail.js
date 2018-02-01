import React from 'react';
import './index.less';
import 'babel-polyfill';
import actions from "../../store/actions/classify";
import {connect} from "react-redux";

@connect(state => ({...state.classify}), actions)
export default class Detail extends React.Component {


    constructor() {
        super();
        this.state = {a: true, path: [], exhibition:[]}

    };

    getgenre = (val) => {

        let ary = val.id.split('&');
        this.setState({path: ary})
        this.props.getIdcakesAPI(ary[0]);//获取数据
        let a = this.props.commodity.map((item, index) => {
            if (item.id === val) {
                return item
            }
        });
    };

    async componentWillMount() {

        let detailList = this.props.location.state;
        if (!this.detailList) {
            console.log(this.props.location.state);
            this.setState({a: false});
            detailList = await this.getgenre(this.props.match.params)
        }

        /*
        * {
              "id":"1",
            "avatar": "../images/cake-1.jpg",
            "title": "果嘉年华(8寸)",
            "hot": "元祖授权销售",放在title拼接的子
            "detail": "元祖蛋糕",
            "sales": 333, //销量
            "price": 218,//最新价格
            "discountprice": 218, //原来价格
            "exhibition": [
              "../images/cake-1-1.jpg",
              "../images/cake-1-2.jpg",
              "../images/cake-1-3.jpg"
            ]
          },*/
    }

    componentDidUpdate() {
        if (!this.state.a) {
            let curAry = this.props.commodity;
            let curValue = [];
                curAry.forEach((item,index) => {
                if (item.id == this.state.path[1]) {
                    curValue = item;
                    this.setState({a:true})
                }
            });
            this.setState(curValue)
        }
    }

    render() {
        return <div className="detail">
                {this.state.avatar?
                    <div className="detailHeader">
                    <img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${this.state.avatar}`} alt=""/>
                        <div className="operate">
                        <p className="title">{this.state.title} <span>{this.state.detail}</span></p>
                        <span className="price">￥{this.state.price}</span>
                        <span className="discountprice">￥{this.state.discountprice}</span>
                        <span className="sales">{this.state.sales}人已付款</span>
                        </div>
                        <a  className='addShopping' href="javascript:;">加入购物车</a>
                    </div> : ""}
            {this.state.exhibition.map((item, index) => <div className="introduce" key={index}>
                <img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${item}`} alt=""/>
                </div>
            )}


        </div>
    }
}
