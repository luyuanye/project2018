import * as Types from '../action-types'
import {getSliders, getRecommend} from "../../api/home";

let actions = {
    getSlidersAPI() {
        return function (dispatch, getState) {
            dispatch({type: Types.SET_SLIDER, payload: getSliders()})  // redux-promise的用法 可以将payload的promise执行 ，执行后将内容放到action.payload中进行派发
        }
    },

    getRecommendAPI() {
        return function (dispatch, getState) {
            dispatch({type: Types.SET_RECOMMREND, payload: getRecommend()})  // redux-promise的用法 可以将payload的promise执行 ，执行后将内容放到action.payload中进行派发
        }
    },
}
export default actions
