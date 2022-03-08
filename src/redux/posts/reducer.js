import { POSTS_REQUEST_FAILURE, POSTS_REQUEST_SEND, POSTS_REQUEST_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    postsData: [],
    error: ""
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case POSTS_REQUEST_SEND:
            return {
                ...state,
                loading: true
            }
        case POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                postsData: action.payload
            }
        case POSTS_REQUEST_FAILURE:
            return {
                loading: false,
                postsData: [],
                error: action.payload
            }

        default:
            return state;
    }

}

export default postsReducer;