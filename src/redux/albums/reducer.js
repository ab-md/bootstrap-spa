import { ALBUMS_REQUEST_FAILURE, ALBUMS_REQUEST_SEND, ALBUMS_REQUEST_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    albumsData: [],
    error: ""
}

const albumsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ALBUMS_REQUEST_SEND:
            return {
                ...state,
                loading: true
            }
        case ALBUMS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                albumsData: action.payload
            }
        case ALBUMS_REQUEST_FAILURE:
            return {
                loading: false,
                albumsData: [],
                error: action.payload
            }
        default:
            return state;
    }

}

export default albumsReducer;