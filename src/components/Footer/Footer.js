/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//link
import { Link } from "react-router-dom";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/landing-page" className={classes.block}>
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/music-play" className={classes.block}>
                My Music
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/contact-me" className={classes.block}>
                Contact Me
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://soundcloud.com/clifford-morin"
                className={classes.block}
                target="_blank"
              >
                SoundCloud
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://cliffordmorin.github.io/React-Portfolio/"
            target="_blank"
          >
            Clifford Morin
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
