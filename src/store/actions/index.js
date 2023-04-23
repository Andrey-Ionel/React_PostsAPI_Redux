import api from '../../api';
import { getAlbums, toggleFavoriteAlbums } from '../reducer/albums';
import { getPosts, searchPosts, sortPosts, toggleFavoritePosts } from '../reducer/posts';
import { createComments, getComments } from '../reducer/comments';

export const getPostsRequest = () => {
  return async (dispatch) => {
    try {
      await api.get(`/posts`)
        .then(response => {
          dispatch(getPosts(response.data));
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAlbumsRequest = () => {
  return async (dispatch) => {
    try {
      await api.get(`/albums`)
        .then(response => {
          dispatch(getAlbums(response.data));
        })
    } catch (error) {
      console.log(error)
    }
  }
}


export const getSortPostsRequest = (value) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/posts?_sort=id&_order=${value}`);
      dispatch(sortPosts(response.data));
    } catch (error) {
      return console.log(error);
    }
  }
}

export const getSearchPostsRequest = (value) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/posts?title_like=${value}`);
      dispatch(searchPosts(response.data));
    } catch (error) {
      return console.log(error);
    }
  }
}

export const toggleFavoritePostsRequest = (id, favoritePost) => {
  return async (dispatch) => {
    try {
    await api.patch(`/posts/${id}`, {
      favoritePost,
    })
      .then(response => {
        dispatch(toggleFavoritePosts(response.data));
      })
      .catch(error => console.log(error));
    } catch (error) {
      return console.log(error);
    }
  }
}

export const toggleFavoriteAlbumsRequest = (id, favoriteAlbum) => {
  return async (dispatch) => {
    try {
      await api.patch(`/albums/${id}`, {
        favoriteAlbum,
      })
        .then(response => {
          dispatch(toggleFavoriteAlbums(response.data));
        }).catch(error => console.log(error));
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCommentsRequest = () => {
  return async (dispatch) => {
    try {
      await api.get(`/comments`)
        .then(response => {
          dispatch(getComments(response.data));
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error)
    }
  }
}

export const createCommentsRequest = (payload) => {
  return async (dispatch) => {
    try {
      await api.post(`/comments`, {
        path: location.pathname,
        author: payload.author,
        email: payload.email,
        commentTitle: payload.commentTitle,
        id: payload.id
      })
        .then(response => {
          dispatch(createComments(response.data));
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error)
    }
  }
}
