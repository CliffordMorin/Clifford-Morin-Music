/*eslint-disable*/
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, Audiotrack, EmojiPeople } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

const StyledLink = styled(Link)`
    text-decoration: none;
	color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
		color: white;
    }
`;

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Teaching"
					buttonProps={{
						className: classes.navLink,
						color: 'transparent'
					}}
					buttonIcon={Apps}
					dropdownList={[
						<Link to="/lessons-page" className={classes.dropdownLink}>
							Private Lessons
						</Link>,
						<a
							href="https://drive.google.com/drive/folders/1mJ5AY0-GAoTjLURs3zHqGHMwA8_nHTQ6?usp=sharing"
							target="_blank"
							className={classes.dropdownLink}
						>
							Transcriptions
						</a>
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<StyledLink to="/music-play">
					<Button color="transparent" className={classes.navLink}>
						<Audiotrack className={classes.icons} /> My Music
					</Button>
				</StyledLink>
			</ListItem>
			<ListItem className={classes.listItem}>
				<StyledLink to="/contact-me">
					<Button color="transparent" className={classes.navLink}>
						<EmojiPeople className={classes.icons} /> Contact Me
					</Button>
				</StyledLink>
			</ListItem>
			<ListItem className={classes.listItem}>
				{/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
				<Tooltip
					id="instagram-twitter"
					title="Follow me on Linkedin"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://www.linkedin.com/in/morin-clifford-129888a9/"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + ' fab fa-linkedin'} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-facebook"
					title="Follow me on Facebook"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.facebook.com/CliffordMorin21"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + ' fab fa-facebook'} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-tooltip"
					title="Follow me on Instagram"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.instagram.com/_mellamocliff_/"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + ' fab fa-instagram'} />
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}
