import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts (state, acton) {
      state.posts = acton.payload
    },
    sortPosts (state, acton) {
      state.posts = acton.payload
    },
    searchPosts (state, acton) {
      state.posts = acton.payload
    },
    toggleFavoritePosts (state, action) {
      state.posts.map(post =>
        (post.id === action.payload.id)
          ? post.favoritePost = action.payload.favoritePost
          : post)
    }
  }
})

export const { getPosts, sortPosts, searchPosts, toggleFavoritePosts } = postsSlice.actions

export default postsSlice.reducer;
