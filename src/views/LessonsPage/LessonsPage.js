import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Star from "@material-ui/icons/Star";
import StarHalf from "@material-ui/icons/StarHalf";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import profile from "assets/img/cliffCloseUp/img1.jpeg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function LessonPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Clifford Morin Music"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        className={classes.mainImg}
        image={require("assets/img/cliffBG/teaching.jpeg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Private Lessons</h3>
                    <h6>
                      Saxophone/ EWI/ Piano/ Guitar/ Karnetic Rhythm/ Clarinet/
                      Flute/ Music Theory
                    </h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                As a experienced performer and composer, Clifford is always
                looking for opportunities to share his knowledge and passion for
                music. Fluent in functional Piano, Flute, Saxophone’s, Clarinet,
                music theory, jazz theory, South Indian Karnetic Rhythm and
                Composition. Clifford is able to provide a flexible learning
                experience tailored to each student’s wants and needs.{" "}
              </p>
              <p>
                Clifford Morin is currently accepting students of all ages for
                beginner to intermediate Piano, flute, and clarinet lessons as
                well as Beginner to Advanced Saxophone, Jazz/ Classical theory,
                composition, and Karnetic Rhythm lesson’s. He is primarily
                teaching out of his home in Philadelphia, PA. But, is willing to
                travel to neighboring towns for a travel fee. Please send an
                email with your contact information for any lesson inquiries.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "My Rates",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={8}>
                            <Card>
                              <CardBody>
                                <CardHeader
                                  color="info"
                                  className={classes.cardTitle}
                                >
                                  Pricing
                                </CardHeader>
                                <p>1 hour lesson- $90</p>
                                <p>30 min lesson- $50</p>
                                <i>
                                  rates ares subject to change based proximity
                                </i>
                                <p>
                                  Cancelation Policy: Please send an email or
                                  phone call within 24hrs of your scheduled
                                  lesson in case of an emergency or need to
                                  cancel your lesson. This gives Clifford time
                                  to adjust his schedule if necessary. There
                                  will be a $25 cancelation fee added to your
                                  next lesson should you fail to notify Clifford
                                  during this window of time.
                                </p>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Testimonials",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={8} md={6}>
                            <Card className={classes.textCenter}>
                              <CardBody>
                                <CardHeader
                                  color="success"
                                  className={classes.cardTitle}
                                >
                                  Saxophone
                                </CardHeader>
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <p>
                                  "Cliff is the best teacher ever. He has been
                                  teaching our kids for 2 years and they have
                                  made an immense amount of improvement. He is
                                  very flexible with time and is always on
                                  time."
                                </p>
                                <p>- Students Name here</p>
                              </CardBody>
                            </Card>
                            <Card className={classes.textCenter}>
                              <CardBody>
                                <CardHeader
                                  color="info"
                                  className={classes.cardTitle}
                                >
                                  Clarinet
                                </CardHeader>
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <StarHalf color="error" />
                                <p>
                                  "Cliff is the best teacher ever. He has been
                                  teaching our kids for 2 years and they have
                                  made an immense amount of improvement. He is
                                  very flexible with time and is always on
                                  time."
                                </p>
                                <p>- Students Name here</p>
                              </CardBody>
                            </Card>
                            <Card className={classes.textCenter}>
                              <CardBody>
                                <CardHeader
                                  color="warning"
                                  className={classes.cardTitle}
                                >
                                  Piano
                                </CardHeader>
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <StarHalf color="error" />
                                <p>
                                  "Cliff is the best teacher ever. He has been
                                  teaching our kids for 2 years and they have
                                  made an immense amount of improvement. He is
                                  very flexible with time and is always on
                                  time."
                                </p>
                                <p>- Students Name here</p>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={8} md={6}>
                            <Card className={classes.textCenter}>
                              <CardBody>
                                <CardHeader
                                  color="primary"
                                  className={classes.cardTitle}
                                >
                                  Guitar
                                </CardHeader>
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <StarHalf color="error" />
                                <p>
                                  "Cliff is the best teacher ever. He has been
                                  teaching our kids for 2 years and they have
                                  made an immense amount of improvement. He is
                                  very flexible with time and is always on
                                  time."
                                </p>
                                <p>- Students Name here</p>
                              </CardBody>
                            </Card>
                            <Card className={classes.textCenter}>
                              <CardBody>
                                <CardHeader
                                  color="success"
                                  className={classes.cardTitle}
                                >
                                  Saxophone
                                </CardHeader>
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <p>
                                  "Cliff is the best teacher ever. He has been
                                  teaching our kids for 2 years and they have
                                  made an immense amount of improvement. He is
                                  very flexible with time and is always on
                                  time."
                                </p>
                                <p>- Students Name here</p>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
