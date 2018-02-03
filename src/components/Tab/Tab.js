import React from 'react';
import './tab.less'
import {NavLink} from 'react-router-dom'


export default class Tab extends React.Component {
  constructor(){
      super();
      this.state={flag:"/personal",cart:"/cart"}
  }
    render() {
        return (<div className="tabList">
            <NavLink to={'/'} exact={true} className="iconfont icon-weibiaoti1"></NavLink>
            <NavLink to={'/class'} className="iconfont icon-iconfont1"></NavLink>
            <NavLink to={this.state.flag==="/personal"?"/cart":"/login"} className="iconfont icon-gouwucheman"></NavLink>
            <NavLink to={this.state.flag} className="iconfont icon-iconfontgerenzhongxin"></NavLink>
        </div>)
    }
    componentWillMount(){
      setInterval(()=>{
          let state=localStorage.getItem("state");
          if(state){
              state=JSON.parse(state);
              if(state.flag){
                  this.setState({flag:"/personal"})
              }
          }else {
              this.setState({flag:"/login"})
          }
      },1000)
    }
}
