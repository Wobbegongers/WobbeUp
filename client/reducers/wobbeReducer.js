import {ACTION_TYPES} from '../actions/actions'

const initialState = {
    list : [],
    item : {},
    search : {}
}


export const wobbeReducer = (state = initialState, action) =>{

    switch(action.type){
        // Not finished yet!!!!
        case ACTION_TYPES.SET_ITEM:
            return {
                ...state,
                item : {...action.payload}
            }
            
        case ACTION_TYPES.SET_SEARCH_ITEM:
            return{
                ...state,
                search:{...action.payload}
            }
            
        default:
            return state;
        }
    }