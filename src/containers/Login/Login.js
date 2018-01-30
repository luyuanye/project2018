import React, {Component} from "react";
import "./Login.less"
export default class Login extends Component {
    render() {
        return (
            <div className="loginBox">
                <span className="loginTxt">登录</span>
                <form>
                    <input type="text" placeholder="请输入手机号码" className="userName" />
                    <input type="text" placeholder="请输入密码" className="password"/>
                    <span className="hint">哎呦,忘记密码了</span>

                    <button className="login">登录</button>
                    <button className="reg select">注册</button>
                </form>
            </div>
        )
    }
}