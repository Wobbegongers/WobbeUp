
export const ACTION_TYPES = {
    CREATE: 'CREATE',
    SET_ITEM:'SET_ITEM',
    SET_SEARCH_ITEM : 'SET_SEARCH_ITEM',
}

export const setItem = (item)=> dispatch => {
    dispatch({
        type: ACTION_TYPES.SET_ITEM,
        payload: item,
    })
};

export const setSearchItem = (searchItem) => dispatch =>{
    dispatch({
        type : ACTION_TYPES.SET_SEARCH_ITEM,
        payload: searchItem
    })
};