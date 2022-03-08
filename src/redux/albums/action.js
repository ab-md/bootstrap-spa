import axios from "axios";
import { ALBUMS_REQUEST_FAILURE, ALBUMS_REQUEST_SEND, ALBUMS_REQUEST_SUCCESS } from "../actionTypes"

const albumsAction = () => (dispatch) => {

    dispatch({type: ALBUMS_REQUEST_SEND});

    axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(response => dispatch({type: ALBUMS_REQUEST_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: ALBUMS_REQUEST_FAILURE, payload: error}))

}

export default albumsAction;