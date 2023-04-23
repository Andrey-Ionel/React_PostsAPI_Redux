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
    getErrorPosts (state, acton) {
      state.isLoading = false
      state.error = acton.payload.message
    },
    getPosts (state, acton) {
      state.isLoading = false
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

export const {
  loadingPosts,
  getErrorPosts,
  getPosts,
  sortPosts,
  searchPosts,
  toggleFavoritePosts
} = postsSlice.actions

export default postsSlice.reducer;
