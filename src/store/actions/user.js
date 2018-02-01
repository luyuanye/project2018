import * as Types from '../action-types'
import {setReg,setLogin} from "../../api/user"

let actions = {
    setRegAPI(userName, pasword,hsitory) {
        return function (dispatch, getState) { // redux-thunk
            setReg(userName,pasword).then(function (data) { //data为我们的服务端返回的结果
                dispatch({type:Types.SET_REGISTER,user:data});
                setTimeout(()=>{
                    hsitory.push("/login");
                },500);
            }).catch(err=>{
                console.log(err);
            })
          }
        },
    getLogin(userName, pasword,hsitory){
        return function (dispatch, getState) { // redux-thunk
            setLogin(userName,pasword).then(function (data) { //data为我们的服务端返回的结果
                dispatch({type:Types.SET_LOGIN,userLogin:data});
                setTimeout(()=>{
                    hsitory.push("/personal");
                },500);
            }).catch(err=>{
                console.log(err);
            })
        }
    }
    };

export default actions
