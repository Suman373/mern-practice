// reducer for the posts 
import {combineReducers} from 'redux';
import posts from './posts'

export default combineReducers({
    posts : posts, // alt : posts, key = value
}); //
