import React from 'react';
import './index.less';
import 'babel-polyfill';
import actions from "../../store/actions/classify";
import {connect} from "react-redux";
import MTitle from "../../components/MTitle/MTitle";


@connect(state => ({...state.classify}), actions)
export default class Detail extends React.Component {


    constructor() {
        super();

        this.state = {a: true, path: [], exhibition: []}

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
        if (!this.props.location.state) {
            this.setState({a: false});
            await this.getgenre(this.props.match.params)
        } else {
            this.setState(this.props.location.state)
        }

    }

    componentDidUpdate() {
        if (!this.state.a) {
            let curAry = this.props.commodity;
            let curValue = [];
            curAry.forEach((item, index) => {
                if (item.id == this.state.path[1]) {
                    curValue = item;
                    this.setState({a: true})
                }
            });
            this.setState(curValue)
        }
    }

    addShop = () => {
        let loState = localStorage.getItem("state");
        let userState = true;//先假设用户已经登陆
        if (loState) {
            !JSON.parse(loState).flag ? userState = false : null;
        } else {
            userState = false
        }
        if (!userState) {
            this.props.history.location.pathname = "";
            this.props.history.push('/login')
        } else {
            let curContent = JSON.parse(loState);// {"flag":true,"userName":"435","stateList":[]}
            let {userName, stateList} = curContent;
            let curState = this.state;//当前页面的详细信息；
            let kkary = this.props.match.params.id.split('&');
            let conState = {
                userName,   //  新的当前购物车信息
                cart: [{
                    class:kkary[0],
                    avatar: curState.avatar,
                    title: curState.title,
                    detail: curState.detail,
                    price: curState.price,
                    number:1,
                    isBuy:true
                }]
            };
            let curConState = {
                class:kkary[0],
                avatar: curState.avatar,
                title: curState.title,
                detail: curState.detail,
                price: curState.price,
                number:1,
                isBuy:true
            };

            let kk = false;

            stateList.forEach((item, index) => {

                if (userName == item.userName) {
                    //里面已经有当前用户的记录了，
                    kk = true;
                    let curkk = false;
                    item.cart.forEach((item, index) => {
                        if (item.title == this.state.title) {
                            curkk = true;
                            return
                        }
                    });
                    if (!curkk) {
                        item.cart.push(curConState);
                        localStorage.setItem("state",JSON.stringify(curContent));
                        this.props.history.location.pathname = "";
                        this.props.history.push('/cart')
                    }


                    return false;
                }
            });
            if (!kk) {
                stateList.push(conState);
                localStorage.setItem("state",JSON.stringify(curContent));
                this.props.history.location.pathname = "";
                this.props.history.push('/cart')
            }

        }
    };

    render() {
        return <div className="detail">
            <MTitle>{this.state.title}</MTitle>
            {this.state.avatar ?
                <div className="detailHeader">
                    <img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${this.state.avatar}`} alt=""/>
                    <div className="operate">
                        <p className="title">{this.state.title} <span>{this.state.detail}</span></p>
                        <span className="price">￥{this.state.price}</span>
                        <span className="discountprice">￥{this.state.discountprice}</span>
                        <span className="sales">{this.state.sales}人已付款</span>
                    </div>
                    <a className='addShopping' href="javascript:;" onClick={this.addShop}>加入购物车</a>
                </div> : ""}
            {this.state.exhibition.map((item, index) => <div className="introduce" key={index}>
                    <img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${item}`} alt=""/>
                </div>
            )}


        </div>
    }
}
