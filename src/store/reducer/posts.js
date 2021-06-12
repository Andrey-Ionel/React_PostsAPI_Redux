import {
  SET_POSTS,
  SORT_POSTS,
  SEARCH_POSTS,
  TOGGLE_FAVORITE_POSTS,
} from "../actions/index.js";

const initialState = {
  posts: [],
}

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload };
    case SORT_POSTS:
      return { ...state, posts: payload };
    case SEARCH_POSTS:
      return { ...state, posts: payload };
    case TOGGLE_FAVORITE_POSTS:
      return {
        ...state, posts: state.posts.map(post =>
          (post.id === payload.id)
            ? ({ ...post, favoritePost: payload.favoritePost })
            : post)
      }
    default:
      return state;
  }
}

export default postsReducer;