import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  isLoading: false,
  error: ''
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadingPosts (state) {
      state.isLoading = true
    },
    getErrorPosts (state, action) {
      state.isLoading = false
      state.error = action.payload.message
    },
    getPosts (state, action) {
      state.isLoading = false
      state.posts = action.payload
    },
    sortPosts (state, action) {
      state.posts = action.payload
    },
    searchPosts (state, action) {
      state.posts = action.payload
    },
    toggleFavoritePosts (state, action) {
      state.posts.map(post =>
        (post.id === action.payload.id)
          ? post.favoritePost = action.payload.favoritePost
          : post)
    }
  }
})

export const {
  loadingPosts,
  getErrorPosts,
  getPosts,
  sortPosts,
  searchPosts,
  toggleFavoritePosts
} = postsSlice.actions

export default postsSlice.reducer;
