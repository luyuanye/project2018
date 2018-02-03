import React from 'react';
import GiftList from "./GiftList";
import GiftFooter from "./GiftFooter";
import "./index.less"
import GiftHead from "./GiftHead";
import {connect} from 'react-redux';
import action from '../../store/actions/cart'

@connect(state => ({...state}), action)
export default class Cart extends React.Component {
  constructor() {
    super();
    //定义数据
    this.state = {
      gift: [],
      user:34234
    }
  }

  componentWillMount() {
    let datas = JSON.parse(localStorage.getItem('state'))||[];
    this.props.getCartList(datas,this.state.user);
  }

  render() {
    return (
      <div>
        <GiftHead/>
        <GiftList cartList={[...this.props.cart.cartList]}
                  addNum={this.props.addNum}
                  subtractNum={this.props.subtractNum}
                  isBuy={this.props.isBuy}
        />
        <GiftFooter amount={this.props.cart.amount} allCheck={this.props.allCheck} allPrice={parseFloat(this.props.cart.allPrice)}/>
      </div>
    )
  }
}