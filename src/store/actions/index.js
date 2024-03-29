import api from '../../api';
import { getAlbums, getErrorAlbums, loadingAlbums, toggleFavoriteAlbums } from '../reducer/albums';
import {
  getErrorPosts,
  getPosts,
  loadingPosts,
  searchPosts,
  sortPosts,
  toggleFavoritePosts
} from '../reducer/posts';
import { createComments, getComments } from '../reducer/comments';
import { getPhotos, getErrorPhotos, getTotalCount } from '../reducer/photos';
import axios from 'axios';

export const getPostsRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingPosts())
      await api.get(`/posts`)
        .then(response => {
          dispatch(getPosts(response.data));
        })
    } catch (error) {
      dispatch(getErrorPosts(error))
    }
  }
}

export const getPhotosRequest = (page, totalCount) => {
  return async (dispatch) => {
    try {
      await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
        .then(response => {
          dispatch(getPhotos(response.data));
          if(!totalCount) {
            dispatch(getTotalCount(response.headers['x-total-count']));
          }
        })
    } catch (error) {
      dispatch(getErrorPhotos(error))
    }
  }
}

export const getAlbumsRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingAlbums())
      await api.get(`/albums`)
        .then(response => {
          dispatch(getAlbums(response.data));
        })
    } catch (error) {
      dispatch(getErrorAlbums(error))
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
