import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Check from '@material-ui/icons/Check';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import SnackbarContent from 'components/Snackbar/SnackbarContent.js';
import Clearfix from 'components/Clearfix/Clearfix.js';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//emailJS
import emailjs from 'emailjs-com';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js';

const useStyles = makeStyles(styles);
const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_YOUR_USER_ID;

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function EmailSection() {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			(result) => {
				console.log(result.text);
				handleClick();
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem cs={12} sm={12} md={8}>
					<h2 className={classes.title}>Send Me An Email</h2>
					<h4 className={classes.description}>
						For any inquiries regarding a private lesson or performing. Please send an email below or at my
						email address cliffordmorinmusic@gmail.com. Thank You!
					</h4>
					<form onSubmit={sendEmail} className={classes.form} id="emailForm">
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<CustomInput
									labelText="Your Name"
									id="from_name"
									name="from_name"
									formControlProps={{
										fullWidth: true
									}}
								/>
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<CustomInput
									labelText="Your Email"
									id="email"
									name="email"
									formControlProps={{
										fullWidth: true
									}}
								/>
							</GridItem>
							<CustomInput
								labelText="Your Message"
								id="message"
								name="message"
								formControlProps={{
									fullWidth: true,
									className: classes.textArea
								}}
								inputProps={{
									multiline: true,
									rows: 5
								}}
							/>
							<GridItem xs={12} sm={12} md={4}>
								<Button type="submit" form="emailForm" color="primary">
									Send Message
								</Button>
							</GridItem>
						</GridContainer>
					</form>
				</GridItem>
			</GridContainer>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Email Sent!
				</Alert>
			</Snackbar>
		</div>
	);
}
