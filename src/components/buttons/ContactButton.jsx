import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PrimaryContactButton = ({ sx = [] }) => {
	return (
		<Link to={'/kontakta-oss'}>
			<Button
				variant="contained"
				color="action"
				sx={[
					{
						p: 2,
						color: 'light.main',
						transition: '300ms',
						':hover': { filter: 'grayscale(20%)' },
					},
					...(Array.isArray(sx) ? sx : [sx]),
				]}>
				<Typography variant="h4" sx={{ bgcolor: 'action' }}>
					Kontakta oss
				</Typography>
			</Button>
		</Link>
	);
};
//proptypes
PrimaryContactButton.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
		),
		PropTypes.func,
		PropTypes.object,
	]),
};

const SecondaryContactButton = ({ sx = [] }) => {
	return (
		<Link to={'/kontakta-oss'}>
			<Button
				variant="text"
				color="light"
				endIcon={<ArrowRightAltIcon />}
				sx={[
					{
						p: 2,
						color: 'light.main',
						transition: '300ms',
						':hover': { filter: 'grayscale(20%)' },
					},
					...(Array.isArray(sx) ? sx : [sx]),
				]}>
				<Typography variant="h5" fontWeight={'500'}>
					Kontakta oss
				</Typography>
			</Button>
		</Link>
	);
};
SecondaryContactButton.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
		),
		PropTypes.func,
		PropTypes.object,
	]),
};

const ContactButton = {
	PrimaryContactButton,
	SecondaryContactButton,
};

export default ContactButton;
