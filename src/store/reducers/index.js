import {combineReducers} from 'redux'
import home from './home';
import classify from "./classify";
import user from "./user"
// {home:{currentLesson:'all'}}
export default combineReducers({
    home,classify,user
}); 
