import { configureStore, combineReducers } from '@reduxjs/toolkit'
import postsReducer from '../store/reducer/posts';
import commentsReducer from '../store/reducer/comments';
import albumsReducer from '../store/reducer/albums';
import photosReducer from '../store/reducer/photos';

const rootReducer = combineReducers({ postsReducer, commentsReducer, albumsReducer, photosReducer });

export default configureStore({
    reducer: rootReducer
});
