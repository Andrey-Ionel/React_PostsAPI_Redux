import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    photos: [],
    totalCount: 0,
    error: ''
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        getErrorPhotos (state, action) {
            state.error = action.payload.message
        },
        getTotalCount (state, action) {
            state.totalCount = Number(action.payload)
        },
        getPhotos (state, action) {
            state.photos = state.photos.concat(action.payload)
        }
    }
})

export const {
    getErrorPhotos,
    getPhotos,
    getTotalCount
} = photosSlice.actions

export default photosSlice.reducer;
