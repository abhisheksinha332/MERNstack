export default (Posts= [] , action) => {
    // if(action.type === 'CREATE'){
    //     return action
    // }

    switch (action.type) {
        case 'FETCH_ALL':
            return Posts;
            
        case 'CREATE':
            return Posts;
           
    
        default:
            return Posts;
    }
}