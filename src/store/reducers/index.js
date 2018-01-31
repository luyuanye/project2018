import {combineReducers} from 'redux'
import home from './home';
import classify from "./classify";

// {home:{currentLesson:'all'}}
export default combineReducers({
    home,classify
}); 
