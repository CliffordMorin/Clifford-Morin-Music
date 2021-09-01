import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
//Sections
import AlbumSection from './Sections/AlbumSection';

import styles from 'assets/jss/material-kit-react/views/loginPage.js';

import image from 'assets/img/BG/contactBG.jpg';

const useStyles = makeStyles(styles);

export default function DiscographyPage(props) {
	const [ cardAnimaton, setCardAnimation ] = React.useState('cardHidden');
	setTimeout(function() {
		setCardAnimation('');
	}, 700);
	const classes = useStyles();
	const { ...rest } = props;

	return (
		<div>
			<Header absolute color="transparent" brand="Clifford Morin Music" rightLinks={<HeaderLinks />} {...rest} />
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage: 'url(' + image + ')',
					backgroundSize: 'cover',
					backgroundPosition: 'top center'
				}}
			>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={10}>
							<Card className={classes[cardAnimaton]}>
								<div>
									<CardHeader color="primary" className={classes.cardHeader}>
										<div className={classes.typo}>
											<h2 className={classes.title}>Discography</h2>
										</div>
									</CardHeader>

									<CardBody>
										<AlbumSection />
									</CardBody>
								</div>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
				<Footer whiteFont />
			</div>
		</div>
	);
}
