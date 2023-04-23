import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albums: [],
  isLoading: false,
  error: ''
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    loadingAlbums (state) {
      state.isLoading = true
    },
    getErrorAlbums (state, acton) {
      state.isLoading = false
      state.error = acton.payload.message
    },
    getAlbums (state, acton) {
      state.isLoading = false
      state.albums = acton.payload
    },
    toggleFavoriteAlbums (state, action) {
      state.albums.map(album =>
        (album.id === action.payload.id)
          ? album.favoriteAlbum = action.payload.favoriteAlbum
          : album)
    }
  }
})

export const { loadingAlbums, getErrorAlbums, getAlbums, toggleFavoriteAlbums } = albumsSlice.actions

export default albumsSlice.reducer;
