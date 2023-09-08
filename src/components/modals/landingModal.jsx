import { Box, Button, Modal, Typography, Container } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../counterSlice';
//Icon Imports
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

export default function LandingModal() {
	const isOpen = useSelector((state) => state.landingModal.value);
	const image = useSelector((state) => state.landingModal.image);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(isOpen);
	});
	return (
		<Modal
			open={isOpen}
			onClose={() => dispatch(closeModal())}
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Box
					component={'img'}
					src={image}
					sx={{
						height: { xs: '60svh', md: '35rem' },
						width: { xs: '80svw', md: '30rem' },
						borderRadius: { xs: '0.5rem', md: '1.5rem' },
						py: '1rem',
					}}
				/>
				<Button
					variant="contained"
					color="light"
					onClick={() => {
						dispatch(closeModal());
					}}
					sx={{
						gap: 1,
						p: '0.5rem',

						position: 'relative',
					}}>
					<Typography variant="h4" color={'text.dark'}>
						Minimera Bild
					</Typography>
					<CloseFullscreenIcon color="dark" />
				</Button>
			</Container>
		</Modal>
	);
}
