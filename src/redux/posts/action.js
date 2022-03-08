import axios from "axios";
import { POSTS_REQUEST_SEND, POSTS_REQUEST_SUCCESS, POSTS_REQUEST_FAILURE } from "../actionTypes";

const postsAction = () => (dispatch) => {

    dispatch({type: POSTS_REQUEST_SEND});

    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => dispatch({type: POSTS_REQUEST_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: POSTS_REQUEST_FAILURE, payload: error}))

}

export default postsAction;