import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
//Material ui components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import styles from 'assets/jss/material-kit-react/views/albumStyle.js';

const useStyles = makeStyles(styles);

const Videos = () => {
	const classes = useStyles();
	return (
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={12} className={classes.videoContainer}>
				<iframe
					className={classes.video}
					width="560"
					height="315"
					src="https://www.youtube.com/embed/12gFQ2v3t18"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</GridItem>
			<GridItem xs={12} sm={12} md={12} className={classes.videoContainer}>
				<iframe
					className={classes.video}
					width="560"
					height="315"
					src="https://www.youtube.com/embed/Hcjy20E1Shg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</GridItem>
			<GridItem xs={12} sm={12} md={12} className={classes.videoContainer}>
				<iframe
					className={classes.video}
					width="560"
					height="315"
					src="https://www.youtube.com/embed/-TPttJ2l8iA"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</GridItem>

			<GridItem xs={12} sm={12} md={6} />
		</GridContainer>
	);
};

export default Videos;
