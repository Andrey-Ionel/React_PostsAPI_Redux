import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albums: [],
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    getAlbums (state, acton) {
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

export const { getAlbums, toggleFavoriteAlbums } = albumsSlice.actions

export default albumsSlice.reducer;
