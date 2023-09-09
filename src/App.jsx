import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { ScrollRestoration } from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</React.Fragment>
	);
}

export default App;
