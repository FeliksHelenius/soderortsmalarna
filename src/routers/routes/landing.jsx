import React from 'react';
import { Container, Box, Typography } from '@mui/material';
//Component Imports
import ContactButton from '../../components/buttons/ContactButton';
import Cards from '../../components/cards/Cards';
import LandingModal from '../../components/modals/landingModal';
//Background Image
import BackgroundImage from '../../assets/images/background.png';
import BackgroundImageMd from '../../assets/images/background-md.png';
import BackgroundImageXs from '../../assets/images/background-xs.png';

export default function Landing() {
	return (
		<React.Fragment>
			<Container
				maxWidth={false}
				disableGutters
				sx={{
					bgcolor: { xs: 'light.main', md: 'light.main' },
				}}>
				{/* Box for md view */}
				<Box
					sx={{
						display: { xs: 'none', md: 'flex' },
						backgroundImage: {
							md: `url(${BackgroundImageMd})`,
							lg: `url(${BackgroundImage})`,
						},
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
						backgroundSize: 'cover',
						height: '40svh',
						width: '100%',
						justifyContent: 'center',
						position: 'relative',
						textShadow: '0px 0px 4px black',
					}}>
					<Box textAlign={'center'}>
						<Typography color={'light.main'} pt={8} variant="h1">
							Söderortsmålarna AB
						</Typography>
						<Typography color={'light.main'} pt={1} variant="h3">
							Målare i Stockholm
						</Typography>
						<ContactButton.PrimaryContactButton sx={{ mt: 10 }} />
					</Box>
				</Box>
				{/* box for sm view */}
				<Box
					sx={{
						display: { xs: 'flex', md: 'none' },
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						mt: 8,
						backgroundImage: `url(${BackgroundImageXs})`,
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
						backgroundSize: 'contain',
						minHeight: '260px',
						textShadow: '0px 0px 10px black',
					}}>
					<Typography variant="h2" color={'light.main'} pt={0}>
						Söderortsmålarna AB
					</Typography>
					<Typography variant="h4" color={'light.main'} pt={1}>
						Målare i Stockholm
					</Typography>
					<ContactButton.SecondaryContactButton sx={{ p: 1, mt: 6 }} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 10,
						py: { xs: 10, md: 5 },
						flexDirection: { xs: 'column', md: 'row' },
					}}>
					<Cards.ExperienceCard />
					<Cards.SolutionsCard />
					<Cards.SatisfactionCard />
				</Box>
				<LandingModal />
			</Container>
		</React.Fragment>
	);
}
