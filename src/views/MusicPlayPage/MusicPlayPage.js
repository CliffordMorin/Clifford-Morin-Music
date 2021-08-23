import React, { useState, useRef } from 'react';
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
//Import Styles
import './styles/app.scss';
//Import Data
import data from './data';
//Material ui
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/landingPage.js';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

function MusicPlayPage(props) {
	//Ref
	const audioRef = useRef(null);
	//State
	const [ songs, setSongs ] = useState(data());
	const [ currentSong, setCurrentSong ] = useState(songs[0]);
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ songInfo, setSongInfo ] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0
	});
	const [ libraryStatus, setLibraryStatus ] = useState(false);
	//handler
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		//Calculate percentage for animation
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round(roundedCurrent / roundedDuration * 100);
		setSongInfo({ ...songInfo, currentTime: current, duration: duration, animationPercentage: animation });
	};
	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.active);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		if (isPlaying) audioRef.current.play();
	};

	//material ui
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Header
				color="info"
				routes={dashboardRoutes}
				brand="Clifford Morin Music"
				rightLinks={<HeaderLinks />}
				fixed
				{...rest}
			/>
			<div className={`App ${libraryStatus ? 'library-active' : ''}`}>
				<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
				<Song currentSong={currentSong} />
				<Player
					setSongInfo={setSongInfo}
					songInfo={songInfo}
					audioRef={audioRef}
					setIsPlaying={setIsPlaying}
					isPlaying={isPlaying}
					currentSong={currentSong}
					songs={songs}
					setCurrentSong={setCurrentSong}
					setSongs={setSongs}
				/>
				<Library
					setSongs={setSongs}
					isPlaying={isPlaying}
					audioRef={audioRef}
					songs={songs}
					setCurrentSong={setCurrentSong}
					libraryStatus={libraryStatus}
				/>
				<audio
					onTimeUpdate={timeUpdateHandler}
					onLoadedMetadata={timeUpdateHandler}
					ref={audioRef}
					src={currentSong.audio}
					onEnded={songEndHandler}
				/>
			</div>
		</div>
	);
}

export default MusicPlayPage;
