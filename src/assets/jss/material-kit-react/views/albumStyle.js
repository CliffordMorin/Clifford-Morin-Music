import { container } from 'assets/jss/material-kit-react.js';

const albumStyle = {
	container: {
		...container,
		zIndex: '2',
		position: 'relative',
		paddingTop: '20vh',
		color: '#FFFFFF',
		paddingBottom: '200px'
	},
	cardHidden: {
		opacity: '0',
		transform: 'translate3d(0, -100px, 0)'
	},
	img: {
		maxWidth: '100%',
		height: 'auto',
		paddingBottom: '20px'
	},
	video: {
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		paddingBottom: '20px',
		position: 'absolute'
	},
	videoContainer: {
		...container,
		position: 'relative',
		paddingBottom: '56.25%',
		paddingTop: '25',
		height: '0'
	}
};

export default albumStyle;
