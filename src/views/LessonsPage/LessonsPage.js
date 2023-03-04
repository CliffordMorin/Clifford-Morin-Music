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
                      Flute/ Music Theory/ Music Production/ Composition/
                      Arranging
                    </h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Unlock your musical potential and take your skills to the next
                level with private music lessons taught by Clifford Morin. As an
                experienced musician proficient in saxophone, flute, clarinet,
                and piano, Clifford offers personalized lessons to students of
                all ages and skill levels. Whether you're just starting out or
                seeking to perfect your craft, Clifford's expertise and passion
                for music will help you achieve your goals.
              </p>
              <p>
                Clifford is also a seasoned music producer and composer fluent
                in jazz and classical theory, as well as South Indian Karnatic
                rhythm and composition. He is always looking for opportunities
                to share his knowledge and passion for music, providing a
                flexible learning experience tailored to each student's wants
                and needs.
              </p>
              <p>
                Currently, Clifford is accepting students of all ages for
                beginner to intermediate piano, flute, and clarinet lessons, as
                well as beginner to advanced saxophone, jazz/classical theory,
                composition, and Karnatic rhythm lessons. Lessons are available
                both in-person and online, making it easy and convenient for you
                to learn from the comfort of your own home.
              </p>
              <p>
                Don't wait any longer to unlock your full musical potential.
                Contact Clifford Morin today to book your private lesson and
                take the first step towards mastering your musical skills.
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
                                <p>1 hr- $85</p>
                                <p>30 min- $50</p>
                                <p>1 hr (remote)- $40</p>
                                <p>30 min (remote)- $70</p>
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
                                  "I recently had the pleasure of taking
                                  saxophone lessons with Clifford, and I can
                                  confidently say that it was an amazing
                                  experience. Clifford is a highly skilled and
                                  knowledgeable instructor who truly cares about
                                  the progress of his students. His passion for
                                  music is contagious, and he create's a
                                  comfortable and supportive learning
                                  environment that allows you to reach your full
                                  potential. During my lessons, I learned a lot
                                  about saxophone technique, music theory, and
                                  improvisation. Clifford was patient and
                                  encouraging throughout, and always provided
                                  clear and helpful feedback. He was also
                                  flexible in his teaching approach, tailoring
                                  the lessons to my specific goals and needs.
                                  Overall, I highly recommend Clifford to anyone
                                  looking to improve their saxophone playing.
                                  His expertise, passion, and dedication to his
                                  students make them a top-notch instructor.
                                  Thank you Clifford for an amazing saxophone
                                  learning experience!""
                                </p>
                                <p>- Jasmine</p>
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
                                <Star color="error" />
                                <p>
                                  "As a beginner clarinet player, I was nervous
                                  about taking lessons, but I can confidently
                                  say that my experience with Clifford was
                                  exceptional. Clifford is not only an
                                  incredibly talented clarinet player, but also
                                  an outstanding teacher. His enthusiasm for
                                  music is infectious and his patient,
                                  encouraging demeanor made me feel at ease
                                  throughout our lessons. With Clifford's
                                  guidance, I was able to make significant
                                  progress in a short amount of time. He
                                  tailored the lessons to my specific needs and
                                  skill level, which helped me to develop a
                                  strong foundation in technique and music
                                  theory. I particularly appreciated the way
                                  Clifford emphasized the importance of practice
                                  and provided me with tips to make my practice
                                  sessions more efficient and effective.
                                  Clifford has a deep understanding of the
                                  clarinet and a wealth of knowledge about
                                  various styles of music. His ability to teach
                                  in a way that is both informative and engaging
                                  is truly remarkable. I highly recommend
                                  Clifford as a clarinet teacher to anyone
                                  looking to improve their skills and deepen
                                  their love of music."
                                </p>
                                <p>- Emily</p>
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
                                <Star color="error" />
                                <p>
                                  "I recently had a jazz piano lesson with
                                  Clifford, and it was an incredible experience.
                                  As someone who has been playing classical
                                  piano for many years, I was looking to branch
                                  out into jazz and learn more about
                                  improvisation. Clifford was able to break down
                                  complex jazz concepts and techniques into
                                  digestible parts, and provide me with
                                  exercises and drills that helped me to better
                                  understand the style. He was patient,
                                  encouraging, and tailored the lesson to my
                                  level and interests. Not only did I learn a
                                  lot about jazz piano, but I also gained a
                                  deeper appreciation for the art form. I highly
                                  recommend Clifford to anyone looking to
                                  improve their jazz piano skills or learn more
                                  about the genre. Thank you again, Clifford!"
                                </p>
                                <p>- Jack</p>
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
                                  Music Production/ Recording (Logic)
                                </CardHeader>
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <p>
                                  "I had the pleasure of taking a music
                                  production lesson with Clifford, and it was an
                                  amazing experience. As someone who is new to
                                  music production, I was looking for guidance
                                  on the basics of recording, mixing, and
                                  mastering. Clifford was able to explain
                                  everything in a clear and concise manner, and
                                  walked me through the process step by step. He
                                  was patient, attentive to my questions, and
                                  always made sure I understood before moving on
                                  to the next topic. I also appreciated how
                                  Clifford encouraged me to be creative and
                                  experiment with different sounds and
                                  techniques. By the end of the lesson, I had a
                                  better understanding of music production and
                                  felt more confident in my ability to create my
                                  own music. I highly recommend Clifford to
                                  anyone looking to improve their music
                                  production skills or start their journey in
                                  this exciting field!"
                                </p>
                                <p>- Josh</p>
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
                                  "I've been taking saxophone lessons with
                                  Clifford for a few months now, and I can
                                  honestly say that he is an exceptional
                                  teacher. Not only is he highly skilled on the
                                  saxophone himself, but he is also incredibly
                                  patient and understanding with me as a
                                  student. Clifford has helped me improve my
                                  playing significantly in a short amount of
                                  time. He has a knack for breaking down complex
                                  techniques and concepts into
                                  easy-to-understand steps, and he always makes
                                  sure I fully grasp a concept before moving on
                                  to the next one. In addition to being a
                                  fantastic saxophone teacher, Clifford is also
                                  a great motivator. He genuinely care's about
                                  his students' progress and is always
                                  encouraging and supportive, even when we hit a
                                  rough patch. Overall, I highly recommend
                                  Clifford as a saxophone teacher. Whether
                                  you're a beginner or an experienced player,
                                  Clifford has the knowledge and expertise to
                                  help you take your playing to the next level.
                                  Thank you, Clifford, for all that you've
                                  taught me!"
                                </p>
                                <p>- David</p>
                              </CardBody>
                            </Card>
                            <Card className={classes.textCenter}>
                              <CardBody>
                                <CardHeader
                                  color="success"
                                  className={classes.cardTitle}
                                >
                                  Jazz Improvisation
                                </CardHeader>
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <Star color="error" />
                                <p>
                                  "I recently took a jazz improvisation lesson
                                  with Clifford, and I can confidently say that
                                  it was one of the most valuable experiences of
                                  my musical journey so far. Clifford is not
                                  only an incredibly skilled musician, but also
                                  an exceptional teacher who possesses a wealth
                                  of knowledge and a true passion for jazz
                                  music. He helped me understand the
                                  fundamentals of jazz improvisation and
                                  provided me with practical tools and
                                  techniques to enhance my improvisational
                                  skills. Clifford created a comfortable and
                                  supportive environment that allowed me to
                                  explore and experiment with my own
                                  improvisation. He offered insightful feedback,
                                  which helped me develop my ideas and expand my
                                  musical vocabulary. Moreover, Clifford
                                  introduced me to various jazz styles and
                                  artists that I had never heard of before,
                                  which broadened my horizons and inspired me to
                                  keep learning and practicing. Overall, I
                                  highly recommend Clifford to anyone who wants
                                  to improve their jazz improvisation skills or
                                  learn more about this beautiful genre of
                                  music. Thank you, Clifford, for a wonderful
                                  lesson!"
                                </p>
                                <p>- Blake</p>
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
