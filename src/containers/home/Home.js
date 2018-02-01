import React from 'react';
import {connect} from 'react-redux'
import actions from '../../store/actions/home'
import HomeList from "./HomeList";
import './home.less'
import HomeSlider from "./HomeSlider";
import Loading from "../../components/Loading/Loading";
import HomeRecommend from "./HomeRecommend";
import MTitle from "../../components/MTitle/MTitle";

@connect(state => ({...state.home}), actions)
export default class Home extends React.Component {

    componentDidMount() {
        if (this.props.sliders.length === 0) {
            this.props.getSlidersAPI()
        }
        // 获取产品
        if (this.props.recommend.length === 0) {
            this.props.getRecommendAPI()
        }

    }

    render() {
        return (<div className="homeBox">
         {/*   <MTitle>首页</MTitle>*/}
            {this.props.sliders.length ? <HomeSlider list={this.props.sliders}/> : <Loading/>}
            <HomeList/>
            <HomeRecommend recommend={this.props.recommend}/>
        </div>)

    }
}


