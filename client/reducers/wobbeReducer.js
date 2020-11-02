import {ACTION_TYPES} from '../actions/actions'

const initialState = {
    username: '',
    location: '',
    user_id: '',
    list : [],
    item : {},
    search : {}
}


export const wobbeReducer = (state = initialState, action) =>{

    switch(action.type){
        // Not finished yet!!!!
        case ACTION_TYPES.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }    

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
        case ACTION_TYPES.SET_ID:
            return{
                ...state,
                user_id : action.payload
            }
        case ACTION_TYPES.SET_LOCATION:
            return{
                ...state,
                location : action.payload
            }
            
        default:
            return state;
        }
    }