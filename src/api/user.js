import axios from "./index"
export function setReg(username,password){
    console.log("请求发送");
    return axios.post("/register",{username,password})
}
export function setLogin(username,password){
    console.log("请求发送");
    return axios.post("/login",{username,password})
}