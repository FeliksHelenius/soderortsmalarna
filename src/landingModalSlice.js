import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'LandingModal',
	initialState: {
		value: false,
		image: null,
	},
	reducers: {
		openModal: (state, action) => {
			state.value = true;
			state.image = action.payload;
			console.log(state, action);
			console.log(state.value, state.image);
		},
		closeModal: (state) => {
			state.value = false;
		},
	},
});

export const { openModal, closeModal } = counterSlice.actions;

export default counterSlice.reducer;
