import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Biography</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h5 className={classes.description}>
              Clifford Morin is an eclectic Saxophonist, multi-woodwind
              instrumentalist, producer and composer based out of Philadelphia.
              As a free lance musician Clifford regularly performs and records
              with many different style’s of music in NYC, Philadelphia, and
              Europe.
              <br />
              <br />
              Clifford has a BM in Jazz Performance from West Chester University
              where he studied with first call broadway woodwind musician Greg
              Riley and world renowned Jazz trumpeter and EVI player John Swana.
              <br />
              <br />
              Clifford also has a MM in Jazz Performance from Philadelphia's
              Temple University as well as attended Amsterdam Conservatory of
              Music (Netherlands) during his graduate studies. During his time
              at Temple university he was second alto in big band lead by Terell
              Stafford. He had the opportunity to perform at venue’s such as
              Jazz at the Lincoln center’s Appel Room, Dizzy’s Coca Cola Club,
              Kimmel Center, Amsterdam Blue Note and Bimhuis along side artist’s
              such as Jon Faddis, Joe Lovano, Jimmy Heath, John Clayton, René
              Marie, Sean Jones, Tim Warfield, Terell Stafford, Dick Oatts, Ann
              Hampton Calloway, Steve Coleman and Rodney Green. While at Temple
              he studied with Virtuosic Tenor Saxophonist Ben Schacter, world
              renowned woodwind and lead alto saxophonist of the Thad Jones Mel
              Lewis Jazz orchestra (Village Vanguard) for the last 40 years;
              Dick Oatts, along with other artist’s such as Tim Warfield, Warren
              Wolf, Mike Moreno, Jeff Tain Watts, Peter Bernstein, Alex Sipiagin
              and Rodney Green.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h5 className={classes.description}>
              During his studies at Amsterdam Conservatory of Music Clifford
              studied with Prodigy alto saxophonist Ben Van Gelder, Dutch tenor
              saxophonist Jasper Blom, and metropole orkest’s lead tenor
              saxophonist Leo Jannsen. Clifford was lead alto in the
              conservatory big band and performed at venue’s such as Bimhuis and
              Amsterdam Blue Note.
              <br />
              <br />
              During the summer of 2014, 2015, and 2019, Clifford was an artist
              in residence at Boysie Lowery Jazz/ Composition Residency in
              Wilmington Delaware where he recorded in Philadelphia’s WRTI
              studio, composed and performed with the Philadelphia String
              Quintet, performed at the Clifford Brown Jazz Festival and studied
              under artist’s such as Aaron Parks, Aaron Goldberg, Ari Hoenig,
              Aaron Diehl, Melissa Aldana, Warren Wolf, and Mike Boone to name a
              few.
              <br />
              <br />
              Clifford lived in Philadelphia for the last 7 years where he had
              an avid freelance performing and recording career. Performing with
              band’s such as Clifford Morin Quartet, Clifford & Friends, David
              Bamber Project, TMA (The Morning After Band), Philly' Finest,
              Steven Perry’s Dual Image, Habanero Latin Band, Arturo Stable not
              so latin trio, Arturo Stable not so latin Big band and many more.
              <br />
              <br />
              Most recently Clifford has been falling in love with R&B, Funk and
              Soul music and has been performing with some of Philadelphia's
              finest artist's such as pianist Eric Wortham (Adele), drummer
              Bernard Lambert (Justin Bieber, Future, Meek Mill, Lil Dirk),
              drummer Spanky McCurdy (Justin Timberlake, Jill Scott, Musiq
              Soulchild, Lady Gaga, Frank Ocean, Kanye West) to name a few.
              <br />
              <br />
              Since moving to Southern California Clifford has been performing
              and focusing on his own music and artist image as well as working
              on his debut album. Sometimes you just have to take a leap of
              faith and follow your dreams. Clifford is excited to be a part of
              the music scene in Southern California and is looking forward to
              what the future holds.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
