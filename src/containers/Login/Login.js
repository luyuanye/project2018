import React, {Component} from "react";
import "./Login.less";
import actions from "../../store/actions/user"
import {connect} from "react-redux";
import MTitle from "../../components/MTitle/MTitle";
@connect(state=>({...state.user}),actions)
export default class Login extends Component {
    constructor(){
        super();
        this.state={flag:true}
    }

    render() {
        return (
            <div className="loginBox">
                <MTitle>登录</MTitle>
                <span className="loginTxt">登录</span>
                <form>
                    <input type="text" placeholder="请输入手机号码" className="userName" ref={x=>this.userName=x}/>
                    <input type="text" placeholder="请输入密码" className="password" ref={x=>this.password=x}/>
                    <button className="login select" onClick={this.LoginChange}>登录</button>
                    <button className="reg select" onClick={()=>{this.props.history.push("reg")}}>注册</button>
                </form>
            </div>
        )
    }
    LoginChange=()=>{
        let userName=this.userName.value,
            password=this.password.value;
        if(userName!==""&&password!==""){
            this.props.getLogin(userName,password,this.props.history);
            let state=localStorage.getItem("state");
            if(state){
                state=JSON.parse(state);
                state={flag:true,userName,stateList:state.stateList};
            }else {
                state={flag:true,userName,stateList:[]}
            }
            localStorage.setItem("state",JSON.stringify(state))
        }
    }
}