import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import NavPills from 'components/NavPills/NavPills.js';
import Parallax from 'components/Parallax/Parallax.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';

import profile from 'assets/img/faces/christian.jpg';

import studio1 from 'assets/img/examples/studio-1.jpg';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';
import work1 from 'assets/img/examples/olu-eletu.jpg';
import work2 from 'assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'assets/img/examples/mariya-georgieva.jpg';
import work5 from 'assets/img/examples/clem-onojegaw.jpg';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

const useStyles = makeStyles(styles);

export default function LessonPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<div>
			<Header
				color="transparent"
				brand="Clifford Morin"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 200,
					color: 'info'
				}}
				{...rest}
			/>
			<Parallax small filter image={require('assets/img/profile-bg.jpg').default} />
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
										<h6>Saxophone/ EWI/ Piano/ Karnetic Rhythm/ Clarinet/ Flute</h6>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.description}>
							<p>
								As a experienced performer and composer, Clifford is always looking for opportunities to
								share his knowledge and passion for music. Fluent in functional Piano, Flute,
								Saxophone’s, Clarinet, music theory, jazz theory, South Indian Karnetic Rhythm and
								Composition. Clifford is able to provide a flexible learning experience tailored to each
								student’s wants and needs. {' '}
							</p>
							<p>
								Clifford Morin is currently accepting students of all ages for beginner to intermediate
								Piano, flute, and clarinet lessons as well as Beginner to Advanced Saxophone, Jazz/
								Classical theory, composition, and Karnetic Rhythm lesson’s. He is primarily teaching
								out of his home in Philadelphia, PA. But, is willing to travel to neighboring towns for
								a travel fee. Please send an email with your contact information for any lesson
								inquiries.
							</p>
						</div>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
								<NavPills
									alignCenter
									color="primary"
									tabs={[
										{
											tabButton: 'Students',
											tabIcon: Camera,
											tabContent: (
												<GridContainer justify="center">
													<GridItem xs={12} sm={12} md={4}>
														<img alt="..." src={studio1} className={navImageClasses} />
														<img alt="..." src={studio2} className={navImageClasses} />
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<img alt="..." src={studio5} className={navImageClasses} />
														<img alt="..." src={studio4} className={navImageClasses} />
													</GridItem>
												</GridContainer>
											)
										},
										{
											tabButton: 'Testimonials',
											tabIcon: Favorite,
											tabContent: (
												<GridContainer justify="center">
													<GridItem xs={12} sm={12} md={4}>
														<Card className={classes.textCenter} style={{ width: '15rem' }}>
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
																<StarHalf color="error" />
																<p>
																	"Cliff is the best teacher ever. He has been
																	teaching our kids for 2 years and they have made an
																	immense amount of improvement. He is very flexible
																	with time and is always on time."
																</p>
																<p>- Students Name here</p>
															</CardBody>
														</Card>
														<img alt="..." src={work2} className={navImageClasses} />
														<img alt="..." src={work3} className={navImageClasses} />
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<img alt="..." src={work4} className={navImageClasses} />
														<img alt="..." src={work5} className={navImageClasses} />
													</GridItem>
												</GridContainer>
											)
										}
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
