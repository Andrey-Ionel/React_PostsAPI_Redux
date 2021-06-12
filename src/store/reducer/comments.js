import {
  GET_COMMENTS,
  CREATE_COMMENTS
} from "../actions/index.js";

const initialState = {
  comments: [],
}

const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS:
      return { ...state, comments: payload };
    case CREATE_COMMENTS:
      return (payload.commentTitle.trim() && payload.email.trim() && payload.author.trim())
        ? { ...state, comments: [...state.comments, payload] }
        : state
    default:
      return state;
  }
}

export default commentsReducer;