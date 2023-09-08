import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import App from '../App';
import { Landing, About, Gallery, Contact } from './routes/routes';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorBoundary />,
			children: [
				{
					path: '/',
					element: <Landing />,
				},
				{
					path: '/om-oss',
					element: <About />,
				},
				{
					path: '/galleri',
					element: <Gallery />,
				},
				{
					path: '/kontakta-oss',
					element: <Contact />,
				},
			],
		},
	],
	{ basename: import.meta.env.DEV ? '/soderortsmalarna' : '/soderortsmalarna' }
);

export default router;
