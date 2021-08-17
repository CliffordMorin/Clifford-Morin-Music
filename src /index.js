import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.10.0';

// pages for this product
import Components from 'views/Components/Components.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import LessonsPage from 'views/LessonsPage/LessonsPage.js';
import MusicPlayPage from 'views/MusicPlayPage/MusicPlayPage';
import ContactPage from 'views/ContactPage/ContactPage';

var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path="/landing-page" component={LandingPage} />
			<Route path="/profile-page" component={ProfilePage} />
			<Route path="/login-page" component={LoginPage} />
			<Route path="/lessons-page" component={LessonsPage} />
			<Route path="/music-play" component={MusicPlayPage} />
			<Route path="/contact-me" component={ContactPage} />
			<Route path="/" component={Components} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
