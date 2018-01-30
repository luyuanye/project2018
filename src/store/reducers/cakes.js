import * as Types from '../action-types'

let initState = {
    currentLesson: 'all',
    sliders: [],
    lesson: {
        list: [], // 课程的所有数据
        hasMore: true, // 默认有更多
        offset: 0, //从第0条开始获取c
        limit: 5,  // 限制一次获取条数
        isLoading: false  // 默认没有正在加载
    }
};

function cakes(state = initState, action) {
    switch (action.type) {
        case Types.GET_CAKES :
            return {...state, currentLesson: action.lesson}
    }
    return state
}

export default cakes
