import { COMMENTS_REQUEST_FAILURE, COMMENTS_REQUEST_SEND, COMMENTS_REQUEST_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    commentsData: [],
    error: ""
}

const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case COMMENTS_REQUEST_SEND:
            return {
                ...state,
                loading: true
            }
        case COMMENTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                commentsData: action.payload
            }
        case COMMENTS_REQUEST_FAILURE:
            return {
                loading: false,
                commentsData: [],
                error: action.payload
            }
        default:
            return state;
    }

}

export default commentsReducer;