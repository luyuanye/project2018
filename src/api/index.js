import axios from 'axios'

axios.defaults.baseURL = "http://cxyxoa.store:3000"

//axios.defaults.withCredentials = true; // 允许
axios.interceptors.response.use(function (res) {
    return res.data
})

export default axios;
