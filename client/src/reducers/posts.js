// reducer -> function that accepts state and an action, based on action type it does some ops, switch
const reducer = (posts = [],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload; // all the posts
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

export default reducer;