import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postsReducer from '../store/reducer/posts';
import commentsReducer from '../store/reducer/comments';
import albumsReducer from '../store/reducer/albums';

const rootReducer = combineReducers({ postsReducer, commentsReducer, albumsReducer });

export default configureStore({
    reducer: rootReducer
});
