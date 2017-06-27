import * as actions from '../actions'

const defaultState = {
    data : {
        items: {},
        fetchSuccess : false,
        fetchFailed: false,
        fetchInit: false
    }
}


const swrppleReducer = (state = defaultState, action) => { 
    switch(action){
        case actions.FETCH_ITEMS_INIT:
            return {
                ...defaultState
            }
        default:
            return state
    }
}


export default swrppleReducer;