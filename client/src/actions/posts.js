// for fetching posts and forwarding to dispatches
import  * as api from '../api';
// constants
import { FETCH_ALL, CREATE , UPDATE , DELETE, LIKE_POST} from '../constants/actionTypes';
// ***ACTION CREATORS : funcs that return / dispatches some specific action****
// thunk allows us achieve async functionality with additional arrow function
// fetch post

export const getPosts = ()=> async(dispatch)=>{

        try {
            // fetch data from the response of the api
            const {data} = await api.fetchPosts();
            // data = the post
            // type-> action type, payload -> storing data
            dispatch( { type: FETCH_ALL, payload:data}); // dispatch an action
        } catch (error) {
            console.log(error.message);
        }

}

// create post
export const createPost = (post)=> async(dispatch)=>{
    try {
        const {data} = await api.createPost(post); // post array
        dispatch({type: CREATE, payload:data}); 
    } catch (error) {
        console.log(error);
    }
}


// update post
export const updatePost = (id, post) => async(dispatch)=>{
    try{
        const { data } = await api.updatePost(id,post); // sends the updatedpost
        dispatch({type: UPDATE, payload:data});
    }catch(error){
        console.log(error);
    }
}

// delete post
export const deletePost = (id,post)=> async(dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    }catch(error){
        console.log(error);
    }
}

// like post (same as edit post as we are changing the state of the post only)
export const likePost = (id) => async(dispatch)=>{
    try {
        const {data} = await api.likePost(id);
        dispatch({ type: LIKE_POST , paylod : data});

    } catch (error) {
        console.log(error);
    }
}
