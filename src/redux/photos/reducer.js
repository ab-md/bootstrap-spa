import {PHOTOS_REQUEST_FAILURE,PHOTOS_REQUEST_SEND,PHOTOS_REQUEST_SUCCESS } from "../actionTypes"

const initialState = {
    loading: false,
    photosData: [],
    error: ""
}

const photosReducer = (state = initialState, action) => {

    switch (action.type) {
        case PHOTOS_REQUEST_SEND:
            return {
                ...state,
                loading: true
            }
        case PHOTOS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                photosData: action.payload
            }
        case PHOTOS_REQUEST_FAILURE:
            return {
                loading: false,
                photosData: [],
                error: action.payload
            }
        default:
            return state;
    }

}

export default photosReducer;