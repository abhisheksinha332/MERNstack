export default (Posts= [] , action) => {
    // if(action.type === 'CREATE'){
    //     return action
    // }

    switch (action.type) {
        case 'DELETE':
            return Posts.filter((Post) => Post._id !== action.payload);
        case 'UPDATE':
            return Posts.map((Post)=> Post._id === action.payload._id ? action.payload : Post);
        case 'FETCH_ALL':
            return action.payload;
            
        case 'CREATE':
            return [...Posts,action.payload];
           
        default:
          return Posts;
    }
}