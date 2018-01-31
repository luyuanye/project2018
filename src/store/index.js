import {createStore, applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger' // 查看代码更新
import reduxThunk from 'redux-thunk'   // 
import reduxPromise from 'redux-promise'  // 开发一些promise
import reducer from './reducers/index' // 拿到reducers文件夹下的index文件

let store = createStore(reducer, applyMiddleware(reduxLogger, reduxThunk, reduxPromise))

window._store = store  // 为了测试
export default store

