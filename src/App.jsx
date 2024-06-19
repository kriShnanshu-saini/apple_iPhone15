import React from 'react';
import { Hero, Highlight, Navbar, Model, Features, HowItWorks, Footer } from '@components';

const App = () => {
	return (
		<main className='bg-black overflow-x-hidden'>
			<Navbar />
			<Hero />
			<Highlight />
			<Model />
			<Features />
			<HowItWorks />
			<Footer />
		</main>
	);
};

export default App;
