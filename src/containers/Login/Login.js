import React, {Component} from "react";
import "./Login.less";
import actions from "../../store/actions/user"
import {connect} from "react-redux";
import MTitle from "../../components/MTitle/MTitle";

@connect(state => ({...state.user}), actions)
export default class Login extends Component {
    constructor() {
        super();
        this.state = {flag: true, txt: ""}
    }
    render() {
        return (
            <div className="loginBox">
                <MTitle>登录</MTitle>
                <span className="loginTxt">登录</span>
                <form>
                    <input type="text" placeholder="请输入手机号码" className="userName" ref={x => this.userName = x}/>
                    <input type="text" placeholder="请输入密码" className="password" ref={x => this.password = x}/>
                    <span className={this.state.flag ? "hint" : "hint select"}>请输入用户名或密码</span>
                    <span className="hint suc">{this.state.txt}</span>
                    <button className="login select" onClick={this.LoginChange}>登录</button>
                    <button className="reg select" onClick={() => {
                        this.props.history.push("reg")
                    }}>注册
                    </button>
                </form>
            </div>
        )
    }

    LoginChange = () => {
        let userName = this.userName.value,
            password = this.password.value;
        this.setState({flag: false});
        if (userName !== "" && password !== "") {
            this.setState({flag: true, txt: "登录成功"});
            this.props.getLogin(userName, password, this.props.history);
            let state = localStorage.getItem("state");
            if (state) {
                state = JSON.parse(state);
                state = {flag: true, userName, stateList: state.stateList};
            } else {
                state = {flag: true, userName, stateList: [{userName,cart:[]}]}
            }

            localStorage.setItem("state", JSON.stringify(state))
        }
    }
}