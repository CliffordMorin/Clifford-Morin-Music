import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Material ui components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import styles from 'assets/jss/material-kit-react/views/albumStyle.js';

const useStyles = makeStyles(styles);

const AlbumSection = () => {
	const classes = useStyles();
	return (
		<GridContainer>
			<GridItem xs={12} sm={6} md={4}>
				<a href="https://soundcloud.com/samuel-d-nobles/sets/murmur" target="_blank">
					<img
						className={classes.img}
						src="https://static.wixstatic.com/media/285c54_eed6f9dd492849fd987704d2cd317964~mv2.jpg/v1/fill/w_510,h_510,al_c,q_80,usm_0.66_1.00_0.01/Murmur%20Cover_JPG.webp"
						alt="..."
					/>
				</a>
			</GridItem>
			<GridItem xs={12} sm={6} md={4}>
				<a href="https://www.amazon.com/Latin-Pulse-Angy-Estrada/dp/B077V5Q7HP" target="_blank">
					<img
						className={classes.img}
						src="https://images-na.ssl-images-amazon.com/images/I/5122ptpu1cL.jpg"
						alt="..."
					/>
				</a>
			</GridItem>
		</GridContainer>
	);
};

export default AlbumSection;
