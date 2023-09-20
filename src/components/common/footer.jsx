import React from 'react';
import {
	AppBar,
	Container,
	Box,
	Grid,
	Typography,
	IconButton,
} from '@mui/material';
import FullLogo from '../../assets/logos/fullLogo';

//Material Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const pages = ['Hem', 'Om oss', 'Galleri', 'Kontakta oss'];
const routes = ['/', 'om-oss', 'galleri', 'kontakta-oss'];

export default function Footer() {
	return (
		<AppBar
			position="relative"
			sx={{
				bgcolor: { xs: 'primary.main', md: 'primary.main' },
			}}>
			<Container sx={{ flexDirection: 'column' }} color={'primary'}>
				<FullLogo
					color={'light'}
					viewBox="0 0 472 131"
					sx={{
						width: { xs: '180px', md: '472px' },
						height: { xs: '50px', md: '131px' },
						py: 4,
						ml: 0,
						display: { xs: 'none', md: 'block' },
					}}
				/>
				<Grid
					container
					sx={{
						flexDirection: { xs: 'column', md: 'row' },
						flexWrap: 'nowrap',
						alignItems: 'start',
						justifyContent: 'center',
						gap: { xs: 2, md: 4 },
						pb: { xs: 2, md: 4 },
						pt: { xs: 8, md: 4 },
						ml: { xs: 4, md: 0 },
					}}>
					{pages.map((page) => {
						return (
							<Link key={page} to={routes[pages.indexOf(page)]}>
								<Typography variant={'h5'}>{page}</Typography>
							</Link>
						);
					})}
				</Grid>

				<hr />
				<Grid
					container
					sx={{
						flexDirection: { xs: 'column', md: 'row' },
						flexWrap: 'nowrap',
						alignItems: 'start',
						pt: 4,
						pb: 8,
					}}>
					<Grid
						item
						container
						sx={{
							alignItems: 'center',
							justifyContent: { xs: 'start', md: 'center' },
							ml: { xs: -1, md: 0 },
						}}
						xs={6}>
						<IconButton
							color="light"
							sx={{
								gap: 1,
								transition: 'none',
								':hover': { borderRadius: 2 },
							}}>
							<PhoneIcon color="light.main" />
							<a href="tel:073-546 90 51" rel="noreferrer" target="_blank">
								<Typography variant="h5">073-546 90 51</Typography>
							</a>
						</IconButton>
					</Grid>
					<Grid
						item
						container
						sx={{
							alignItems: 'center',
							justifyContent: { xs: 'start', md: 'center' },
							ml: { xs: -1, md: 0 },
						}}
						xs={6}>
						<IconButton
							color="light"
							sx={{
								gap: 1,
								transition: 'none',
								':hover': { borderRadius: 2 },
							}}>
							<EmailIcon color="light.main" />
							<a
								href="mailto: rikard@soderortsmalarna.se"
								rel="noreferrer"
								target="_blank">
								<Typography variant="h5">rikard@soderortsmalarna.se</Typography>
							</a>
						</IconButton>
					</Grid>
					<Grid
						item
						container
						sx={{
							alignItems: 'center',
							justifyContent: { xs: 'start', md: 'center' },
							ml: { xs: -1, md: 0 },
						}}
						xs={6}>
						<IconButton
							color="light"
							sx={{
								gap: 1,
								transition: 'none',
								':hover': { borderRadius: 2 },
							}}>
							<FacebookIcon color="light.main" />
							<a
								href="https://www.facebook.com/soderortsmalarna/"
								rel="noreferrer"
								target="_blank">
								<Typography variant="h5">soderortsmalarna</Typography>
							</a>
						</IconButton>
					</Grid>
					<Grid
						item
						container
						sx={{
							alignItems: 'center',
							justifyContent: { xs: 'start', md: 'center' },
							ml: { xs: -1, md: 0 },
						}}
						xs={6}>
						<IconButton
							color="light"
							sx={{
								gap: 1,
								transition: 'none',
								':hover': { borderRadius: 2 },
							}}>
							<InstagramIcon color="light.main" />
							<a
								href="https://www.instagram.com/soderortsmalarna/"
								rel="noreferrer"
								target="_blank">
								<Typography variant="h5">soderortsmalarna</Typography>
							</a>
						</IconButton>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
}
