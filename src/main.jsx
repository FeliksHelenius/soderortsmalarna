import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import router from './routers/mainRouter';
import Theme from './assets/colorTheme';
//redux
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={Theme}>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</ThemeProvider>
);
