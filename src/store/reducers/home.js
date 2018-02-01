import * as Types from '../action-types'


let initState = {
    sliders: [],
    recommend: []
}

function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_SLIDER:
            return {...state, sliders: action.payload}
        case Types.SET_RECOMMREND:
            return {...state, recommend: action.payload}
    }
    return state
}

export default home
