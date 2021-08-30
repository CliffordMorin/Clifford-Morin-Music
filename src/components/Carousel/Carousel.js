import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';

// material-ui components

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';

import group1 from 'assets/img/cliffGroups/group1.jpeg';
import group2 from 'assets/img/cliffGroups/group2.jpeg';
import group3 from 'assets/img/cliffGroups/group3.jpeg';
import group4 from 'assets/img/cliffGroups/group4.jpeg';
import group5 from 'assets/img/cliffGroups/group5.jpeg';
import group6 from 'assets/img/cliffGroups/group6.jpeg';
import group7 from 'assets/img/cliffGroups/group7.jpeg';
import panda1 from 'assets/img/pandanap/panda1.jpg';
import panda2 from 'assets/img/pandanap/panda2.jpg';
import panda3 from 'assets/img/pandanap/panda3.jpg';
import panda4 from 'assets/img/pandanap/panda4.jpg';

export default function SectionCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	};

	return (
		<GridContainer justify={'center'}>
			<GridItem xs={12} sm={12} md={10}>
				<Card>
					<Carousel {...settings}>
						<div>
							<img src={group1} alt="First slide" className="slick-image" />
						</div>
						<div>
							<img src={group2} alt="Second slide" className="slick-image" />
						</div>
						<div>
							<img src={group3} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={group4} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={group5} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={group6} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={group7} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={panda1} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={panda2} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={panda3} alt="Third slide" className="slick-image" />
						</div>
						<div>
							<img src={panda4} alt="Third slide" className="slick-image" />
						</div>
					</Carousel>
				</Card>
			</GridItem>
		</GridContainer>
	);
}
