import React from 'react';


import flower_6 from '../../common/images/flower_7.png';
import Selection_button from '../../common/images/Selection_button.png';

export default class GiftList extends React.Component {

  render() {
    return (
      <div className='main1'>
        <h1 className='title'>中国鲜花网</h1>
        <ul>
          {
            this.props.cartList.map((item, index) => (
              <li className='increase' key={index} onClick={(e) => {
                e.stopPropagation();
                this.props.isBuy(item)
              }}>
                <img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${item.avatar}`} className='list-flower' />
                {item.isBuy ? <img src={Selection_button} className='Selection'/> : null}
                <div className='center-price'>
                  <h1>{item.title}</h1>
                  <p>{item.detail}</p>
                  <h2>{`￥${item.price}*${item.number}`}</h2>
                </div>
                <div className='add-subtract'>
                  <a href="javascript:;" className='add' onClick={(e) => {
                    e.stopPropagation();
                    this.props.addNum(item);
                  }}>+</a>
                  <a href="javascript:;" className='subtract' onClick={(e) => {
                    e.stopPropagation();
                    this.props.subtractNum(item)
                  }}>-</a>
                </div>
              </li>
            ))
          }

        </ul>
      </div>
    )
  }
}