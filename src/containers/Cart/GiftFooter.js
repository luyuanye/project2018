import React from 'react';

export default class GiftFooter extends React.Component {

  render() {
    console.log(this.props.allPrice);
    return (
      <div className='footer1'>
        <div className='footer-top'>
          <div className='check-all' onClick={this.props.allCheck}>全选</div>
          <div className='sum'><span>商品总数：{this.props.amount}</span></div>
        </div>
        <div className='footer-bottom'>
          <a href="javascript:;"
             className={this.props.allPrice > 0 ? 'select select-color' : "select"}>{this.props.allPrice > 0 ? `￥ ${this.props.allPrice}` : '请选择商品'}</a>
        </div>
      </div>
    )
  }
}