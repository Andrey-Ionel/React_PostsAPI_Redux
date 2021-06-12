import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducer/posts";
import commentsReducer from "./reducer/comments";
import albumsReducer from "./reducer/albums";

const rootReducer = combineReducers({ postsReducer, commentsReducer, albumsReducer });

export default createStore(rootReducer, applyMiddleware(thunk));