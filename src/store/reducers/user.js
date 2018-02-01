import * as Types from '../action-types'

let initState={

};
function user(state = initState, action) {
    switch (action.type) {
        case Types.SET_REGISTER:
            console.log("user写入成功");
            return ({...state, user: action.user});
        case Types.SET_LOGIN:
            console.log("user写入成功");
            return ({...state, Login: action.userLogin});
    }
    return state;
}

export default user
