import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'GalleryModal',
	initialState: {
		value: false,
		image: null,
	},
	reducers: {
		openModal: (state, action) => {
			state.value = true;
			state.image = action.payload;
		},
		closeModal: (state) => {
			state.value = false;
		},
	},
});

export const { openModal, closeModal } = counterSlice.actions;

export default counterSlice.reducer;
