import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments (state, acton) {
      state.comments = acton.payload
    },
    createComments (state, action) {
      (action.payload.commentTitle.trim() && action.payload.email.trim() && action.payload.author.trim())
        ? state.comments = [...state.comments, action.payload]
        : state
    }
  }
})

export const { getComments, createComments } = commentsSlice.actions

export default commentsSlice.reducer;
