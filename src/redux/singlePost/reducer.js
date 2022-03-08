import { SINGLE_POST_REQUEST_FAILURE, SINGLE_POST_REQUEST_SEND, SINGLE_POST_REQUEST_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    postData: {},
    error: ""
}

const singlePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_POST_REQUEST_SEND:
            return {
                ...state,
                loading: true,
            }
        case SINGLE_POST_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                postData: action.payload
            }
        case SINGLE_POST_REQUEST_FAILURE:
            return {
                loading: false,
                postData: {},
                error: action.payload
            }
        default:
            return state;
    }
}

export default singlePostReducer;