import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.10.0';

// pages for this product

import LandingPage from 'views/LandingPage/LandingPage.js';
import LessonsPage from 'views/LessonsPage/LessonsPage.js';
import MusicPlayPage from 'views/MusicPlayPage/MusicPlayPage';
import ContactPage from 'views/ContactPage/ContactPage';
import DiscographyPage from 'views/DiscographyPage/DiscographyPage';
import VideoPage from 'views/VideoPage/VideoPage';

var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path="/lessons-page" component={LessonsPage} />
			<Route path="/music-play" component={MusicPlayPage} />
			<Route path="/contact-me" component={ContactPage} />
			<Route path="/discography" component={DiscographyPage} />
			<Route path="/videos" component={VideoPage} />
			<Route path="/" component={LandingPage} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
