import React from 'react';
import {Link} from 'react-router-dom';

/*
import actions from "../../store/actions/home";
import {connect} from "react-redux";

@connect(state => ({...state.home}), actions)*/




export default class HomeRecommend extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (<div>
          {/*  {this.props.recommend.map((item, index) => (
                <div key={index}><img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/` + item.img} alt={item.title}/>
                </div>
            ))}*/}

            {this.props.recommend.map((item, index) => <Link key={index} className="sortList" onClick={this.enterDetail} to={{pathname:`/classifydetail/recommends&${item.id}`,state:item}}>
                <img className="mainImg" src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${item.avatar}`} alt=""/>
                <p className="title">{item.title}</p>
                <p className="price">￥{item.price}</p>
            </Link>)}
        </div>)
    }
}
