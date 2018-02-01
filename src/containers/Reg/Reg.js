import React, {Component} from "react";
import "./Reg.less"
import actions from "../../store/actions/user"
import {connect} from "react-redux";
import MTitle from "../../components/MTitle/MTitle";
@connect(state=>({...state.user}),actions)
export default class Reg extends Component {
    constructor(){
        super();
        this.state={flag:true}
    }

    render() {
        return (
            <div className="regBox">
                <MTitle>注册</MTitle>
            <span className="regTxt">手机号码注册</span>
            <form>
                <span className="tel">中国大陆+86</span>
                <input type="text" placeholder="请输入注册手机号码" className="userName" ref={x=>this.userName=x} onBlur={this.change}/>
                <span className={this.state.flag?"hint":"hint select"}>{this.state.flag?"":"请输入正确的手机号码"}</span>
                <input type="text" placeholder="请输入注册密码" className="password" ref={x=>this.password=x}/>
                <span className="hint"><a href="javscript:;">请阅读,鲜花网网站用户协议</a></span>
                <button className="verify select" onClick={this.verification}>同意协议并注册</button>
            </form>
        </div>
        )
    }
    verification=()=>{
        let user=this.userName.value,
            password=this.password.value;
        this.setState({flag:false});
        if(/\d{11}/.test(user)){
            this.setState({flag:true});
            this.props.setRegAPI(user,password,this.props.history);
        }
    };
    change=()=>{
            if(!/\d{11}/.test(this.userName.value)){
                this.setState({flag:false});
                return
            }if(this.userName.value===""){
                this.setState({flag:true})
            }
            this.setState({flag:true})
    }
}