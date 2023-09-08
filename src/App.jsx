import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
function App() {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Footer />
		</React.Fragment>
	);
}

export default App;
