import api from "../../api/index";
export const SET_POSTS = "SET_POSTS";
export const SET_ALBUMS = "SET_ALBUMS";
export const SORT_POSTS = "SORT_POSTS";
export const SEARCH_POSTS = "SEARCH_POSTS";
export const TOGGLE_FAVORITE_POSTS = "TOGGLE_FAVORITE_POSTS";
export const TOGGLE_FAVORITE_ALBUMS = "TOGGLE_FAVORITE_ALBUMS";
export const GET_COMMENTS = "GET_COMMENTS";
export const CREATE_COMMENTS = "CREATE_COMMENTS";

export const getPostsRequest = () => {
  return async (dispatch) => {
    await api.get(`/posts`)
      .then(response => {
        dispatch({ type: SET_POSTS, payload: response.data });
      })
  }
}

export const getAlbumsRequest = () => {
  return async (dispatch) => {
    await api.get(`/albums`)
      .then(response => {
        dispatch({ type: SET_ALBUMS, payload: response.data });
      })
  }
}

export const getSortPostsRequest = (value) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/posts?_sort=id&_order=${value}`);
      dispatch({ type: SORT_POSTS, payload: response.data });
    } catch (error) {
      return console.log(error);
    }
  }
}

export const getSearchPostsRequest = (value) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/posts?title_like=${value}`);
      dispatch({ type: SEARCH_POSTS, payload: response.data });
    } catch (error) {
      return console.log(error);
    }
  }
}

export const toggleFavoritePostsRequest = (id, favoritePost) => {
  return async (dispatch) => {
    await api.patch(`/posts/${id}`, {
      favoritePost,
    })
      .then(response => {
        dispatch({ type: TOGGLE_FAVORITE_POSTS, payload: response.data });
      })
      .catch(error => console.log(error));
  }
}

export const toggleFavoriteAlbumsRequest = (id, favoriteAlbum) => {
  return async (dispatch) => {
    await api.patch(`/albums/${id}`, {
      favoriteAlbum,
    })
      .then(response => {
        dispatch({ type: TOGGLE_FAVORITE_ALBUMS, payload: response.data });
      })
      .catch(error => console.log(error));
  }
}

export const getCommentsRequest = () => {
  return async (dispatch) => {
    await api.get(`/comments`)
      .then(response => {
        dispatch({ type: GET_COMMENTS, payload: response.data });
      })
      .catch(error => console.log(error));
  }
}

export const createCommentsRequest = (payload) => {
  return async (dispatch) => {
    await api.post(`/comments`, {
      path: location.pathname,
      author: payload.author,
      email: payload.email,
      commentTitle: payload.commentTitle,
      id: payload.id
    })
      .then(response => {
        dispatch({ type: CREATE_COMMENTS, payload: response.data });
      })
      .catch(error => console.log(error));
  }
}
