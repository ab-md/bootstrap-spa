import axios from "axios";
import { COMMENTS_REQUEST_FAILURE, COMMENTS_REQUEST_SEND, COMMENTS_REQUEST_SUCCESS } from "../actionTypes"

const commentsAction = (postId) => (dispatch) => {

    dispatch({type: COMMENTS_REQUEST_SEND});

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => dispatch({type: COMMENTS_REQUEST_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: COMMENTS_REQUEST_FAILURE, payload: error}))

}

export default commentsAction;