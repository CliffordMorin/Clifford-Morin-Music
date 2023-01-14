import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import videoLinks from "./videoLinks";
//Material ui components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/albumStyle.js";

const useStyles = makeStyles(styles);

const Videos = () => {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      {videoLinks.map(({ link, title }) => (
        <GridItem xs={12} sm={12} md={12} className={classes.videoContainer}>
          <iframe
            className={classes.video}
            width="560"
            height="315"
            src={link}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Videos;
