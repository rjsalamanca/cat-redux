import * as actionTypes from '../actions/actionTypes';

const initialState = {
    activity: 'awake'
}

const oakleyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTION_EAT:
            return {
                ...state,
                activity: 'eating'
            }
        case actionTypes.ACTION_NAP:
            return {
                ...state,
                activity: 'napping'
            }
        case actionTypes.ACTION_PLAY:
            return {
                ...state,
                activity: 'playing'
            }
        default:
            return state;
    }
}

export default oakleyReducer;