import {combineReducers} from 'redux'
import home from './home';
import classify from "./classify";
import user from "./user"
import cakes from "./cakes"
import cart from "./cart"
// {home:{currentLesson:'all'}}
export default combineReducers({
    home,classify,user,cakes,cart
}); 
