import axios from './index'

// 轮播图 // 每一个接口返回的都是promise
export function getSliders() {
    return axios.get('/sliders')
}
export function getRecommend() {
    return axios.get('/recommends')
}
