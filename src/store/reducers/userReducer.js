const INITIAL_STATE={
    user:null,
    rate:null
}

export function userReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'SET_USER':
        return{
            ...state,
            user:action.user
        }
        case 'SET_RATE':
        return{
            ...state,
            rate:action.rate
        }
        default:{
            return state;
        }
    }
}