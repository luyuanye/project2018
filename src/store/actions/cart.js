import * as Types from '../action-types';
import {getCartData} from '../../api/home';


let actions = {
    total(datalist) {
        if (datalist.some(item => item.isBuy)) {
            let pitchOn = datalist.filter(item => item.isBuy)
            let num = 0
            pitchOn.map(item => {
                num += item.price * item.number;
            })
            return num;
        }
        return 0;
    }
    ,
    getCartList(datas,user) {
        return function (dispatch, getState) { // redux-thunk
            // getCartData().then((data) => {
            //   let amount = data.filter(item => item.isBuy);
            //   amount = amount.length;
            //   dispatch({type: Types.GET_CART, dataList: data, amount, allPrice: actions.total(data)})
            // })
            // redux-promise的用法  可以将payload的promise执行，执行后将内容放到action.payload中进行派发{type:'SEL_SLIDERS' ,payload:[{},{},{}]}
            // let data = datas.stateList.find(item=>item.userName==user);

            datas=datas.stateList[0].cart;
            let amount = datas.filter(item => item.isBuy);
            amount = amount.length;
            dispatch({type: Types.GET_CART, dataList: datas, amount, allPrice: actions.total(datas)})
        }
    },
    addNum(cartId) {
        return function (dispatch, getState) {
            let productList = getState().cart.cartList;
            let productIndex = productList.findIndex(item => {
                return cartId == item;
            })
            productList[productIndex].number += 1;

            dispatch({type: Types.CART_NUM, productList, allPrice: actions.total(productList)})
        }
    },
    subtractNum(cartId) {
        return function (dispatch, getState) {
            let productList = getState().cart.cartList;
            let productIndex = productList.findIndex(item => {
                return cartId == item;
            })
            if (productList[productIndex].number === 1) {
                return
            }
            productList[productIndex].number -= 1;
            dispatch({type: Types.CART_NUM, productList, allPrice: actions.total(productList)})
        }

    },
    isBuy(cartId) {
        return function (dispatch, getState) {
            let productList = getState().cart.cartList;
            let productIndex = productList.findIndex(item => {
                return cartId == item;
            })
            productList[productIndex].isBuy = !productList[productIndex].isBuy;
            let amount = productList.filter(item => item.isBuy);
            amount = amount.length;
            dispatch({type: Types.ISBUY, productList, amount, allPrice: actions.total(productList)})
        }
    },
    allCheck() {
        return function (dispach, getState) {
            let productList = getState().cart.cartList;
            let isAll = productList.every(item => item.isBuy)
            if (isAll) {
                productList.forEach(item => item.isBuy = false);
            } else {
                productList.forEach(item => item.isBuy = true);
            }
            let amount = productList.filter(item => item.isBuy);
            amount = amount.length;

            dispach({type: Types.ALL_CHECK, productList, amount, allPrice: actions.total(productList)})
        }
    }

}


export default actions;
