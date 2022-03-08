import axios from "axios";
import { SINGLE_POST_REQUEST_FAILURE, SINGLE_POST_REQUEST_SEND, SINGLE_POST_REQUEST_SUCCESS } from "../actionTypes"

const singlePostAction = (postId) => (dispatch) => {

    dispatch({type: SINGLE_POST_REQUEST_SEND});

    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => dispatch({type: SINGLE_POST_REQUEST_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: SINGLE_POST_REQUEST_FAILURE, payload: error}))

}

export default singlePostAction;