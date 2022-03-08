import { combineReducers } from "redux";
import albumsReducer from "./albums/reducer";
import commentsReducer from "./comments/reducer";
import photosReducer from "./photos/reducer";
import postsReducer from "./posts/reducer";
import singlePostReducer from "./singlePost/reducer";

const reducers = combineReducers({
    postsData: postsReducer,
    postData: singlePostReducer,
    commentsData: commentsReducer,
    albumsData: albumsReducer,
    photosData: photosReducer
})

export default reducers;