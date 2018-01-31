
import axios from './index';
// 每个接口返回的都是promise
export function getcakes() {//蛋糕列表接口
    return axios.get('/cakes')
}
export function getChocolates() {//巧克力接口
    return axios.get('/chocolates')
}
export function getFlowers() {//花接口
    return axios.get('/flowers')
}
export function getGifts() {//礼物接口
    return axios.get('/gifts')
}