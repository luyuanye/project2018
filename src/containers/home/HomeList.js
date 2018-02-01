import React from 'react';
import {NavLink} from 'react-router-dom'
import icon1 from '../../common/images/icon1.jpg'
import icon2 from '../../common/images/icon2.jpg'
import icon3 from '../../common/images/icon3.jpg'
import icon4 from '../../common/images/icon4.jpg'
import icon5 from '../../common/images/icon5.jpg'

export default class HomeLIst extends React.Component {
    render() {
        return (<div className="homeList">
            <NavLink to={'/1'}><i><img src={icon1} alt=""/></i><p>鲜花</p></NavLink>
            <NavLink to={'/2'}><i><img src={icon2} alt=""/></i><p>蛋糕</p></NavLink>
            <NavLink to={'/3'}><i><img src={icon3} alt=""/></i><p>礼品</p></NavLink>
            <NavLink to={'/4'}><i><img src={icon4} alt=""/></i><p>巧克力</p></NavLink>
            <NavLink to={'/class'}><i><img src={icon5} alt=""/></i><p>更多分类</p></NavLink>
        </div>)
    }
}
