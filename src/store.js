import { configureStore } from '@reduxjs/toolkit';
import landingModalSlice from './landingModalSlice';
import galleryModalSlice from './galleryModalSlice';

export default configureStore({
	reducer: {
		landingModal: landingModalSlice,
		galleryModal: galleryModalSlice,
	},
});
