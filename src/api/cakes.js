// 获取轮播图  
import axios from './index'

// 每一个接口返回的都是promise
export function getSliders() {
    return axios.get('/cakes')
}


// 获取所以课程 offset limit type
export function getLessons(offset, limit, type) {
    return axios.get(`/lessons/${offset}/${limit}/${type}`)
}

// 获取某一门课程  需要参数id
export function getLesson(id) {
    return axios.get(`/lesson/${id}`)
}
