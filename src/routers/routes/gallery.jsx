import { Box, Container, Divider, Typography } from '@mui/material';
import MainImageList from '../../components/imageList/MainImageList';
import GalleryModal from '../../components/modals/galleryModal';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Gallery() {
	return (
		<Container
			sx={{
				minHeight: '90svh',
				bgcolor: 'light.main',
			}}>
			<Box
				display={'flex'}
				justifyContent={'center'}
				py={5}
				flexDirection={{ xs: 'column', md: 'row' }}>
				<Box
					display={'flex'}
					flexDirection={'column'}
					sx={{
						width: { xs: '90svw', md: '25svw' },
						pr: { xs: 0, md: 10, lg: 5 },
						pb: { xs: 5, md: 0 },
						textAlign: { xs: 'center', md: 'left' },
					}}>
					{/* md view h1 */}
					<Typography
						color={'text.dark'}
						variant="h1"
						display={{ xs: 'none', md: 'block' }}>
						Bildgalleri av Våra Målningsarbeten
					</Typography>
					{/* xs view h3 */}
					<Typography
						color={'text.dark'}
						variant="h2"
						pt={5}
						display={{ xs: 'block', md: 'none' }}>
						Bildgalleri av Våra Målningsarbeten
					</Typography>
					{/* md view h4 */}
					<Typography
						color={'text.dark'}
						variant="h4"
						display={{ xs: 'none', md: 'block' }}
						pt={1}>
						Se våra målningsarbeten i bildgalleriet.
					</Typography>
					{/* xs view h5 */}
					<Typography
						color={'text.dark'}
						variant="h4"
						display={{ xs: 'block', md: 'none' }}
						pt={1}>
						Se våra målningsarbeten i bildgalleriet.
					</Typography>
					{/* md view p2 */}
					<Typography
						variant="p2"
						color={'text.dark'}
						pt={3}
						display={{ xs: 'none', md: 'block' }}>
						Som kund kan du känna dig trygg med att vi har erfarenhet av att
						måla alla typer av ytor. Vi har målat allt från villor, lägenheter
						och kontor.
					</Typography>
					{/* xs view p3 */}
					<Typography
						variant="p2"
						color={'text.dark'}
						pt={3}
						display={{ xs: 'block', md: 'none' }}>
						Som kund kan du känna dig trygg med att vi har erfarenhet av att
						måla alla typer av ytor. Vi har målat allt från villor, lägenheter
						och kontor.
					</Typography>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							flexWrap: 'nowrap',
							mt: 5,
							flexDirection: 'column',
						}}>
						<Typography variant="h4" color={'text.dark'}>
							Se mer på våra sociala medier
						</Typography>
						<Box display={'flex'} gap={1} mt={1}>
							<a
								href="https://www.facebook.com/soderortsmalarna/"
								rel="noreferrer"
								target="_blank">
								<FacebookIcon color="secondary" fontSize="large" />
							</a>
							<a
								href="https://www.instagram.com/soderortsmalarna/"
								rel="noreferrer"
								target="_blank">
								<InstagramIcon color="secondary" fontSize="large" />
							</a>
							{/* <IconButton
								color="light"
								sx={{
									':hover': { borderRadius: 2 },
								}}>
								<FacebookIcon color="secondary" />
								<a
									href="https://www.facebook.com/soderortsmalarna/"
									rel="noreferrer"
									target="_blank"></a>
							</IconButton>
							<IconButton
								color="light"
								sx={{
									':hover': { borderRadius: 2 },
								}}>
								<InstagramIcon color="secondary" />
								<a
									href="https://www.instagram.com/soderortsmalarna/"
									rel="noreferrer"
									target="_blank"></a>
							</IconButton> */}
						</Box>
					</Box>
				</Box>
				<Divider orientation={{ xs: 'horizontal', md: 'vertical' }} flexItem />
				<Box pl={{ xs: 0, md: 5 }} pt={{ xs: 5, md: 0 }}>
					<Typography
						color={'text.dark'}
						textAlign={'center'}
						variant="h3"
						display={{ xs: 'none', md: 'block' }}>
						Klicka på bilden för att se den i större format.
					</Typography>
					<Typography
						color={'text.dark'}
						textAlign={'center'}
						variant="h5"
						display={{ xs: 'block', md: 'none' }}>
						Klicka på bilden för att se den i större format.
					</Typography>
					<MainImageList />
				</Box>
			</Box>
			<GalleryModal />
		</Container>
	);
}
