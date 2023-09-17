import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/logo';
import {
	Container,
	MenuItem,
	Box,
	IconButton,
	Menu,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContactButton from '../buttons/ContactButton';

const pages = ['Hem', 'Om oss', 'Galleri'];
const menuPages = ['Hem', 'Om oss', 'Galleri', 'Kontakta oss'];
const paths = ['/', 'om-oss', 'galleri', 'kontakta-oss'];

export default function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				position: { xs: 'fixed', md: 'sticky' },
				height: { xs: '4rem', md: '6rem' },
				bgcolor: { xs: 'dark.main', md: 'primary.main' },
			}}>
			<Box
				sx={{
					display: 'flex',
					ml: { xs: 0, md: 1 },
					p: 1,
					justifyContent: 'start',
				}}
				component={'a'}
				href="/">
				<Logo
					color="light"
					viewBox="0 0 72 74"
					sx={{
						width: { xs: '3rem', md: '5rem' },
						height: '5rem',
					}}
				/>
			</Box>
			<Container maxWidth={'true'} disableGutters>
				<Box
					sx={{
						display: { xs: 'none', md: 'flex' },
						gap: 3,
						justifyContent: 'end',
						alignItems: 'center',
						mr: 2.5,
					}}>
					{pages.map((page) => {
						return (
							<Link key={page} to={paths[menuPages.indexOf(page)]}>
								<Typography color={'text.light'} variant="h3">
									{page}
								</Typography>
							</Link>
						);
					})}
					<ContactButton.PrimaryContactButton />
				</Box>

				<Box
					sx={{
						display: { xs: 'flex', md: 'none' },
						justifyContent: 'end',
					}}>
					<IconButton
						size="large"
						aria-label="menu for navigation"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="light">
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}>
						{menuPages.map((page) => {
							return (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Link key={page} to={paths[menuPages.indexOf(page)]}>
										<Typography color={'dark'} variant="h4">
											{page}
										</Typography>
									</Link>
								</MenuItem>
							);
						})}
					</Menu>
				</Box>
			</Container>
		</AppBar>
	);
}
