// constants
import { FETCH_ALL, CREATE , UPDATE , DELETE, LIKE_POST} from '../constants/actionTypes';

// reducer -> function that accepts state and an action, based on action type it does some ops
const reducer = (posts = [],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload; // all the posts
        case CREATE:
            return [...posts,action.payload]; // create post
        case UPDATE:
        case LIKE_POST:
        // edited post, implement change else same post 
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);
        case DELETE:
            // delete post
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default reducer;