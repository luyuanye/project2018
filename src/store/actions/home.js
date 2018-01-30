import * as Types from '../action-types'
import {getSliders} from '../../api/home'


let actions = {
    getSlisersAPI() {
        return function (dispatch, getState) { // redux-thunk
            dispatch({type: Types.SET_SLIDERS, payload: getSliders()})  // redux-promise的用法  可以将payload的promise执行，执行后将内容放到action.payload中进行派发{type:'SEL_SLIDERS' ,payload:[{},{},{}]}
        }
    }
}
export default actions
