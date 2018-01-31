import React from 'react';
import {connect} from 'react-redux';
import ClassifyOption from "./ClassifyOption";
import ClassifyList from "./ClassifyList";
import "./index.less";
import actions from "../../store/actions/classify";

@connect(state=>({...state.classify}),actions)
export default class Sort extends React.Component {
    constructor(props){
      super(props);

    };
    componentDidMount(){

        this.props.getcakesAPI();//获取数据
     /*   let a = setInterval(()=>{
            console.log(this.props.commodity);
            clearInterval(a)
        },1)*/
    }
  render(){
    return <div className="sort ">

        <ClassifyOption/>
        <ClassifyList recordList = {this.props.commodity} />
    </div>
  }

}

