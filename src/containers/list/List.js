import React, {Component} from 'react';
import '../../common/css/reset.less';
import './list.less';
import actions from "../../store/actions/user"
import Bg from "../../common/images/bg.png"
import Yuan from "../../common/images/yuan.png"

import {connect,} from "react-redux";
import {Link} from "react-router-dom"
@connect(state => ({...state.user}), actions)
export default class List extends Component {
   render() {
      return (
         <div className='bg-col'>
            <div className='head'>
               <img src={Bg} alt=""/>
               <a href='javascript:;' className='user'>
                  <img src={Yuan}/>
               </a>
            </div>
            <div className='main'>
               <div className='pouch'>
                  <span className='iconfont icon-qianbao'><i>我的荷包</i></span>
               </div>
               <div className='order'>
                     <span className='iconfont icon-dingdanguanli'>
                        <i>全部订单</i>
                     </span>
                  <div className='task'>
                     <ul>
                        <li>
                           <p className='iconfont icon-shizhong_l'>
                              <i className='dispatching'>今日配送</i>
                           </p>
                        </li>
                        <li>
                           <p className='iconfont icon-ziyuan'>
                              <i className='dispatching'>待付款</i>
                           </p>
                        </li>
                        <li>
                           <p className='iconfont icon-distribution'>
                              <i className='dispatching'>配送中</i>
                           </p>
                        </li>
                        <li className='go-border'>
                           <p className='iconfont icon-querenfuwu'>
                              <i className='dispatching'>确认服务</i>
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className='footer'>
               <ul>
                  <li>
                        <span className='icon-bgCol iconfont icon-xiaoxi'>
                           <i className='information'>消息</i>
                        </span>
                  </li>
                  <li>
                        <span className='icon-bgCol iconfont icon-shared'>
                           <i className='information'>分享</i>
                        </span>
                  </li>
                  <li>
                        <span className='icon-bgCol iconfont icon-settings'>
                           <i className='information'>设置</i>
                        </span>
                  </li>
                  <li>
                        <span className='icon-bgCol iconfont icon-guanyuwomen'>
                           <i className='information'>关于我们</i>
                        </span>
                  </li>
                  <li className='bot' >
                        <span className='icon-bgCol iconfont icon-bangzhuzhongxin'>
                           <i className='information'>帮助</i>
                        </span>
                  </li>
               </ul>
            </div>
         </div>
      )
   }
}