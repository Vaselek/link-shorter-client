import {TRANSFORM_LINK_ERROR, TRANSFORM_LINK_SUCCESS} from '../actions/transformLinkActions';

const initialState = {
    transformedLink: '',
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSFORM_LINK_SUCCESS:
            return {
                ...state,
                transformedLink: action.link
            }
        case TRANSFORM_LINK_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer;