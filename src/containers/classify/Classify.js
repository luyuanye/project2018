import React from 'react';
import {connect} from 'react-redux';
import ClassifyOption from "./ClassifyOption";
import ClassifyList from "./ClassifyList";
import "./index.less";
import actions from "../../store/actions/classify";
import MTitle from "../../components/MTitle/MTitle";



@connect(state=>({...state.classify}),actions)
export default class Sort extends React.Component {
    constructor(props){
      super(props);

    };
    componentDidMount(){

        this.props.getcakesAPI(this.props.match.params.id);//获取数据
     /*   let a = setInterval(()=>{
            console.log(this.props.commodity);
            clearInterval(a)
        },1)*/
    }
  render(){
    return <div className="sort ">
        <MTitle>分类</MTitle>
        <ClassifyOption/>
        <ClassifyList name={this.props.match.params.id} recordList = {this.props.commodity}  />
    </div>
  }

}

