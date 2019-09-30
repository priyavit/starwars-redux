const initialState = {
    planetDetails : []   
};

const planetReducer = (state = initialState,action) => {
    switch(action.type){
        case 'PLANET_DETAILS':
            return{
                ...state,
                planetDetails : action.payload
            };
    default:
        return state;
    }
}

export default planetReducer;