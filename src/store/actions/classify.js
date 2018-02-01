import * as Types from "../action-types";

import {getcakes, getChocolates, getFlowers, getGifts,getRecommends} from "../../api/classify";
import classify from "../reducers/classify";


let actions = {

    getIdcakesAPI(val) {
        return function (dispatch, getState) { // redux-thunk
            switch (val) {
                case "cakes":
                    dispatch({type: Types.GET_RECORD, payload: getcakes()});//蛋糕列表接口
                    break;
                case "chocolates":
                    dispatch({type: Types.GET_RECORD, payload: getChocolates()});//蛋糕列表接口
                    break;
                case "flowers":

                    dispatch({type: Types.GET_RECORD, payload: getFlowers()});//蛋糕列表接口
                    break;
                case "gifts":
                    dispatch({type: Types.GET_RECORD, payload: getGifts()});//蛋糕列表接口
                    break;
                case "recommends":
                    dispatch({type: Types.GET_RECORD, payload: getRecommends()});//推荐
                    break;

            }
        }
    },
    getcakesAPI(id) {
        return function (dispatch, getState) { // redux-thunk
            switch (id) {
                case "cakes":
                    dispatch({type: Types.GET_RECORD, payload: getcakes()});//蛋糕列表接口
                    break;
                case "chocolates":
                    dispatch({type: Types.GET_RECORD, payload: getChocolates()});//蛋糕列表接口
                    break;
                case "flowers":
                    dispatch({type: Types.GET_RECORD, payload: getFlowers()});//蛋糕列表接口
                    break;
                case "gifts":
                    dispatch({type: Types.GET_RECORD, payload: getGifts()});//蛋糕列表接口
                    break;
                case "recommends":

                    dispatch({type: Types.GET_RECORD, payload: getRecommends()});//蛋糕列表接口
                    break;

            }
        };
    },


};
export default actions;