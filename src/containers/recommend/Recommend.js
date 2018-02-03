import React, {Component} from 'react';
import '../../common/css/reset.less';
import './recommend.less';

import flower_6 from '../../common/images/flower_7.png';
import Selection_button from '../../common/images/Selection_button.png';

export default class Recommend extends Component {
   render() {
      return (
         <div>
            <div className='head1'>
               <h1 className='headline '>
                  <span className='redact-right'>编辑</span>购物车</h1>
            </div>
            <div className='main1'>
               <h1 className='title'>中国鲜花网</h1>
               <ul>
                  <li className='increase'>
                     <img src={flower_6} className='list-flower'/>
                     <img src={Selection_button} className='Selection'/>
                     <div className='center-price'>
                        <h1>初见倾心 再见痴心</h1>
                        <p>鲜花</p>
                        <h2>￥606.00*1</h2>
                     </div>
                     <div className='add-subtract'>
                        <a href="javascript:;" className='add'>+</a>
                        <a href="javascript:;" className='subtract'>-</a>
                     </div>
                  </li>
                  <li className='increase'>
                     <img src={flower_6} className='list-flower'/>
                     <img src={Selection_button} className='Selection'/>
                     <div className='center-price'>
                        <h1>初见倾心 再见痴心</h1>
                        <p>鲜花</p>
                        <h2>￥606.00*1</h2>
                     </div>
                     <div className='add-subtract'>
                        <a href="javascript:;" className='add'>+</a>
                        <a href="javascript:;" className='subtract'>-</a>
                     </div>
                  </li>
                  <li className='increase'>
                     <img src={flower_6} className='list-flower'/>
                     <img src={Selection_button} className='Selection'/>
                     <div className='center-price'>
                        <h1>初见倾心 再见痴心</h1>
                        <p>鲜花</p>
                        <h2>￥606.00*1</h2>
                     </div>
                     <div className='add-subtract'>
                        <a href="javascript:;" className='add'>+</a>
                        <a href="javascript:;" className='subtract'>-</a>
                     </div>
                  </li>
                  <li className='increase'>
                     <img src={flower_6} className='list-flower'/>
                     <img src={Selection_button} className='Selection'/>
                     <div className='center-price'>
                        <h1>初见倾心 再见痴心</h1>
                        <p>鲜花</p>
                        <h2>￥606.00*1</h2>
                     </div>
                     <div className='add-subtract'>
                        <a href="javascript:;" className='add'>+</a>
                        <a href="javascript:;" className='subtract'>-</a>
                     </div>
                  </li>
               </ul>
            </div>
            <div className='footer1'>
               <div className='footer-top'>
                  <div className='check-all'>全选</div>
                  <div className='sum'><span>商品总数：0</span></div>
               </div>
               <div className='footer-bottom'>
                  <a href="javascript:;" className='select'>请选择商品</a>
               </div>
            </div>
         </div>
      )
   }
}