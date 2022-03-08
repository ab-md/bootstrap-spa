import axios from "axios";
import { PHOTOS_REQUEST_FAILURE, PHOTOS_REQUEST_SEND, PHOTOS_REQUEST_SUCCESS } from "../actionTypes"

const photosAction = (albumId) => (dispatch) => {

    dispatch({type: PHOTOS_REQUEST_SEND});

    axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(response => dispatch({type: PHOTOS_REQUEST_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: PHOTOS_REQUEST_FAILURE, payload: error}))

}

export default photosAction;