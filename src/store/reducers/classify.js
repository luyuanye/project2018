import * as Types from '../action-types'

let initState = {
    genre: 'flowers', //需要获取什么内容
    commodity: [],//内容
    list:[],//每个内容的明细

};

function classify(state = initState, action) {

    switch (action.type) {
        case Types.GET_RECORD:
            return {...state,commodity: action.payload}
    }
    return state
}

export default classify
