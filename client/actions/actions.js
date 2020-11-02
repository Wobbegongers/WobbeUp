
export const ACTION_TYPES = {
    SET_ITEM:'SET_ITEM',
    SET_SEARCH_ITEM : 'SET_SEARCH_ITEM',
    SET_USERNAME : 'SET_USERNAME',
    SET_ID : 'SET_ID',
    SET_LOCATION : 'SET_LOCATION'

}

export const setUsername = (username) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_USERNAME,
        payload: username
    })
}
export const setID = (ID) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_ID,
        payload: ID
    })
}
export const setLocation = (location) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_LOCATION,
        payload: location
    })
}

export const setItem = (item)=> dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_ITEM,
        payload: item
    })
};

export const setSearchItem = (searchItem) => dispatch =>{
    dispatch({
        type : ACTION_TYPES.SET_SEARCH_ITEM,
        payload: searchItem
    })
};