// 轮播图
import axios from './index'

// 每一个接口返回的都是promise
export function getSliders() {
    return axios.get('/sliders')
}
