const initialState = {
    userDetails : []   
};

const loginReducer = (state = initialState,action) => {
    switch(action.type){
        case 'USER_DETAILS':
            console.log('Here with data:', action);
            return{
                ...state,
                userDetails : action.payload
            };
    default:
        return state;
    }
}

export default loginReducer;