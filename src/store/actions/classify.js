import * as Types from "../action-types";

import {getcakes, getChocolates, getFlowers, getGifts} from "../../api/classify";
import classify from "../reducers/classify";


let actions = {
    setgenre(val) {
        console.log(val);
    },
    getcakesAPI() {

        return function (dispatch, getState) { // redux-thunk
            let {genre} = getState().classify;
            switch (genre) {
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
            }
        };
    },
};
export default actions;