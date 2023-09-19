import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
//component imports
import Cards from '../cards/Cards';
import { Box } from '@mui/material';

//styles
const innerCarouselStyle = {
	display: 'flex',
	gap: 10,
};

//variants
const carouselVariants = {
	visible: { opacity: 1, x: 0, transition: { duration: 1 } },
	hidden: { opacity: 0, x: 0 },
};

export default function LandingPageCarousel({ sx = [] }) {
	const [width, setWidth] = useState(0);
	const carousel = useRef();
	const container = useRef();
	const isInView = useInView(container);
	const controls = useAnimation();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	return (
		<Box
			ref={container}
			sx={{
				width: '100svw',
			}}>
			<Box
				ref={carousel}
				component={motion.div}
				whileTap={'grabbing'}
				animate={controls}
				initial="hidden"
				variants={carouselVariants}
				sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}>
				<Box
					sx={innerCarouselStyle}
					component={motion.div}
					drag="x"
					dragConstraints={{ right: 0, left: -width }}>
					<Cards.ExperienceCard />
					<Cards.SolutionsCard />
					<Cards.SatisfactionCard />
					<Cards.ResidenceCard />
					<Cards.BusinessCard />
					<Cards.OutdoorsCard />
				</Box>
			</Box>
		</Box>
	);
}
LandingPageCarousel.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
		),
		PropTypes.func,
		PropTypes.object,
	]),
};
