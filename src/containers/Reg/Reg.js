import React, {Component} from "react";
import "./Reg.less"
export default class Reg extends Component {
    render() {
        return (
            <div className="regBox">
            <span className="regTxt">手机号码注册</span>
            <form>
                <span className="tel">中国大陆+86</span>
                <input type="text" placeholder="请输入注册手机号码" className="userName" />
                <input type="text" placeholder="请输入注册密码" className="password"/>
                <span className="hint"><a href="javscript:;">请阅读,鲜花网网站用户协议</a></span>
                <button className="verify select">同意协议并注册</button>
            </form>
        </div>
        )
    }
}