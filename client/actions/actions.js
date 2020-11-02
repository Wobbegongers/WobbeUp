
export const ACTION_TYPES = {
    SET_ITEM:'SET_ITEM',
    SET_SEARCH_ITEM : 'SET_SEARCH_ITEM',
    SET_USERNAME : 'SET_USERNAME'
}

export const setUsername = (username) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_USERNAME,
        payload: username
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