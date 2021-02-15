export default (Posts= [] , action) => {
    // if(action.type === 'CREATE'){
    //     return action
    // }

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            
        case 'CREATE':
            return [...Posts,action.payload];
           
    
        default:
            return Posts;
    }
}