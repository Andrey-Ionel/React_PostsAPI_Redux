import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import postsReducer from "./reducer/posts";
import commentsReducer from "./reducer/comments";
import albumsReducer from "./reducer/albums";

const rootReducer = combineReducers({ postsReducer, commentsReducer, albumsReducer });

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
