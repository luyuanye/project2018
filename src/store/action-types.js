import axios from "../api";

export const SET_SLIDER = 'SET_SLIDER'

export const SET_RECOMMREND = 'SET_RECOMMREND' // 设置课程数据


//注册
export const SET_REGISTER="SET_REGISTER";
export const SET_LOGIN="SET_LOGIN";

//对数据进行排序
export const GET_PRICE="GET_PRICE";
export const GET_SALES="GET_SALES";

export const GET_RECORD="GET_RECORD";//获取列表数据



export const GET_CAKES ="GET_CAKES";//蛋糕列表接口
export const GET_CHOCOLATES="GET_CHOCOLATES";//巧克力接口
export const GET_FLOWERS="GET_FLOWERS";//花接口
export const GET_GIFTS="GET_GIFTS";//礼物接口

//获取购物车商品数据
export const GET_CART = 'GET_CART';

//增加商品数量
export const CART_NUM = 'CART_NUM';

//减少商品数量subtract
export const SUBTRACT_NUM = 'SUBTRACT_NUM';


//是否购此商品买商品
export const ISBUY = 'ISBUY';

//商品全选；
export const ALL_CHECK = "ALL_CHECK";
