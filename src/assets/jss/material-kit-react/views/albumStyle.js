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
	}
};

export default albumStyle;
