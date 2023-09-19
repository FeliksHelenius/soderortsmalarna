//React Imports
import React from 'react';
import { CardMedia, IconButton, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openModal } from '../../landingModalSlice';
import { PropTypes } from 'prop-types';
//Icon imports
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

//Default Styles
const cardMediaStyle = {
	height: '15rem',
	minWidth: { xs: '22rem', md: '26rem' },
	transition: 'all 300ms',
	position: 'relative',
	':hover:after': {
		display: 'block',
		transition: 'all 300ms',
		opacity: '1',
		content: "' '",
		background: 'rgba(46, 46, 46, 0.5)',
		position: 'relative',
		height: '100%',
		maxWidth: '100%',
	},
	':after': {
		display: 'block',
		opacity: { xs: '1', md: '0' },
		content: "' '",
		background: 'rgba(46, 46, 46, 0.5)',
		position: 'relative',
		height: '100%',
		maxWidth: '100%',
	},
};

export default function CustomCardMedia(props) {
	const [hovering, setHovering] = React.useState(null);
	const dispatch = useDispatch();

	return (
		<CardMedia
			onMouseOver={() => {
				setHovering(true);
			}}
			onMouseOut={() => {
				setHovering(null);
			}}
			sx={cardMediaStyle}
			image={props.image}>
			{/* For breakpoint md */}
			{hovering && (
				<Tooltip title={'Expand Image'}>
					<IconButton
						onClick={() => {
							dispatch(openModal(props.image));
						}}
						color="light"
						sx={{
							display: {},
							position: 'absolute',
							zIndex: '1',
							ml: 44,
							mt: 22,
						}}>
						<OpenInFullIcon />
					</IconButton>
				</Tooltip>
			)}
			{/* For breakpoint xs */}
			<IconButton
				onClick={() => {
					dispatch(openModal(props.image));
				}}
				color="light"
				sx={{
					display: { xs: 'block', md: 'none' },
					position: 'absolute',
					zIndex: '1',
					ml: 39,
					mt: 25,
				}}>
				<OpenInFullIcon />
			</IconButton>
		</CardMedia>
	);
}
CustomCardMedia.propTypes = {
	image: PropTypes.oneOfType([PropTypes.string]),
};
