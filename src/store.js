import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export default configureStore({
	reducer: {
		landingModal: counterReducer,
	},
});
