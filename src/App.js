import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import Pages
import About from './pages/About';
import ContactUs from './pages/Contact';
import MusicPlay from './pages/MusicPlay';
import Lessons from './pages/Lessons';
import Nav from './components/Nav';
import Footer from './components/Footer';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//hashRouter conditional rendering
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<About />
					</Route>
					<Route path="/myMusic" exact>
						<MusicPlay />
					</Route>
					<Route path="/lessons" exact>
						<Lessons />
					</Route>
					<Route path="/contact" exact>
						<ContactUs />
					</Route>
				</Switch>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
