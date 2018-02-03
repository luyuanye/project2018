import * as Types from '../action-types';

let initState = {
  cartList: [],
  amount: 0,
  allPrice: 0
};

function cartReducer(state = initState, action) {
  switch (action.type) {
    case Types.GET_CART:
      return {...state, cartList: [...action.dataList], amount: action.amount, allPrice: action.allPrice} ;//获取到购物车数据
    case Types.CART_NUM:
      return {...state, cartList: [...action.productList], allPrice: action.allPrice};//添加商品数量
    case Types.SUBTRACT_NUM:
      return {...state, cartList: [...action.productList], allPrice: action.allPrice};//减少商品数量
    case Types.ISBUY:
      return {...state, cartList: [...action.productList], amount: action.amount,allPrice:action.allPrice};//是否选中商品
    case Types.ALL_CHECK:
      return {...state, cartList: [...action.productList], amount: action.amount,allPrice:action.allPrice}//全选商品
  }

  return state;
}

export default cartReducer;