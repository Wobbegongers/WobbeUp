import {ACTION_TYPES} from '../actions/actions'

const initialState = {
    list : []
}


export const wobbeReducer = (state = initialState, action) =>{
    switch(action.type){
        // Not finished yet!!!!
        case ACTION_TYPES.CREATE:
            return {
                ...state
            }

            
        default:
            return state;
        }
    }