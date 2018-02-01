import React from 'react';
import './tab.less'
import {NavLink} from 'react-router-dom'


export default class Tab extends React.Component {
    render() {
        return (<div className="tabList">
            <NavLink to={'/'} exact={true} className="iconfont icon-weibiaoti1"></NavLink>
            <NavLink to={'/class'} className="iconfont icon-iconfont1"></NavLink>
            <NavLink to={'/cart'} className="iconfont icon-gouwucheman"></NavLink>
            <NavLink to={'/personal '} className="iconfont icon-iconfontgerenzhongxin"></NavLink>
        </div>)
    }
}
