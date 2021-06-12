import {
  SET_ALBUMS,
  TOGGLE_FAVORITE_ALBUMS,
} from "../actions/index.js";

const initialState = {
  albums: [],
}

const albumsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALBUMS:
      return { ...state, albums: payload };
    case TOGGLE_FAVORITE_ALBUMS:
      return {
        ...state, albums: state.albums.map(album =>
          (album.id === payload.id)
            ? ({ ...album, favoriteAlbum: payload.favoriteAlbum })
            : album)
      }
    default:
      return state;
  }
}

export default albumsReducer;