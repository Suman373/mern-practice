// for fetching posts and forwarding to dispatches
import  * as api from '../api';

// ***ACTION CREATORS : funcs that return / dispatches some specific action****
// thunk allows us achieve async functionality with additional arrow function
// fetch post
export const getPosts = ()=> async(dispatch)=>{

        try {
            // fetch data from the response of the api
            const {data} = await api.fetchPosts();
            // data = the post
            // type-> action type, payload -> storing data
            dispatch( { type: 'FETCH_ALL', payload:data}); // dispatch an action
        } catch (error) {
            console.log(error.message);
        }

}

// create post
export const createPost = (post)=> async(dispatch)=>{
    try {
        const {data} = await api.createPost(post); // post array
        dispatch({type: 'CREATE', payload:data}); 
    } catch (error) {
        console.log(error);
    }
}

