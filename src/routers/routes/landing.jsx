import {
	Container,
	Box,
	Typography,
	Card,
	CardContent,
	Divider,
	Button,
} from '@mui/material';
import CustomCardMedia from '../../components/cards/CustomCardMedia';
import LandingModal from '../../components/modals/landingModal';
import Cards from '../../components/cards/Cards';
//illustration imports
import PainterIllustration from '../../assets/images/painter-illustration.jpg';
import MissionIllustration from '../../assets/images/mission-illustration.png';
//image imports
import HousePaintingImage from '../../assets/images/gallery/soderortsmalarna17.jpg';
import CommercialPaintingImage from '../../assets/images/gallery/soderortsmalarna1.jpg';
import OutdoorsPaintingImage from '../../assets/images/gallery/soderortsmalarna24.jpg';
import BackgroundImage from '../../assets/images/about-background.jpg';
//style imports
import { defaultCardStyles } from '../../components/cards/defaultCardStyles';
import { ArrowRightAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<Container
			disableGutters
			maxWidth={false}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'center',
					backgroundImage: `url(${BackgroundImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
					backgroundPositionY: 'top',
					minHeight: 'fit-content',
					height: { xs: '25rem', md: '60svh' },
					width: '100svw',
				}}>
				<Box pt={10}>
					<Typography
						variant="h1"
						color={'light.main'}
						textAlign={'center'}
						fontSize={{ xs: '2rem', md: '3rem' }}>
						Välkommen till Söderortsmålarna AB
					</Typography>
					<Typography
						variant="h3"
						color={'text.light'}
						textAlign={'center'}
						fontSize={{ xs: '1rem', md: '1.5rem' }}>
						Dina pålitliga målare från söderort.
					</Typography>
				</Box>
				<Box
					pt={{ xs: 5, md: 20 }}
					display={'flex'}
					flexDirection={{ xs: 'column', md: 'row' }}
					alignItems={'center'}
					gap={2}>
					<Link to="/kontakta-oss">
						<Button
							variant="contained"
							color="action"
							sx={{
								p: { xs: 1, md: 2 },
								':hover': { filter: 'grayscale(20%)' },
							}}>
							<Typography
								variant="h4"
								color={'light.main'}
								fontWeight={'bold'}
								fontSize={{ xs: '0.7rem', md: '1.25rem' }}>
								Kontakta oss
							</Typography>
						</Button>
					</Link>
					<Link to="/galleri">
						<Button
							variant="outlined"
							sx={{ p: { xs: 1, md: 2 }, background: '#00000028' }}>
							<Typography
								variant="h4"
								color={'light.main'}
								fontWeight={'bold'}
								fontSize={{ xs: '0.7rem', md: '1.25rem' }}>
								Se vårt galleri
							</Typography>
						</Button>
					</Link>
				</Box>
			</Box>
			{/* #region top of landing for desktop view */}
			<Box
				display={{ xs: 'none', md: 'flex' }}
				position={'relative'}
				flexDirection={'column'}
				mr={50}>
				<Box width={{ xs: '100svw', md: '25rem' }} pt={{ xs: 10, md: 15 }}>
					<Box position={'relative'}>
						<Divider component="div" role="presentation" textAlign={'left'}>
							<Typography
								variant="h2"
								color={'action.main'}
								fontWeight={'bold'}
								ml={1}
								fontSize={{ xs: '1rem', md: '1.75rem' }}>
								Vi Kan Måla
							</Typography>
						</Divider>
						<br />
						<Typography
							variant="p2"
							color={'text.dark'}
							fontSize={{ xs: '0.7rem', md: '0.9rem' }}>
							På Söderortsmålarna AB tvekar vi inte när det kommer till målning,
							med våran erfarenhet och kundcentrerad inställning så kan vi
							garantera att du blir nöjd med vårat arbete. Vi har målat allt
							från bostäder till företag och vi är stolta över att kunna erbjuda
							våra tjänster till dig.
						</Typography>
						<Box
							component={'img'}
							src={PainterIllustration}
							sx={{
								width: { xs: '10rem', md: '15rem' },
								position: 'absolute',
								top: '0',
								left: { xs: '120%', md: '125%' },
							}}
						/>
					</Box>
				</Box>
			</Box>
			<Box
				width={'25rem'}
				pt={15}
				ml={50}
				display={{ xs: 'none', md: 'block' }}>
				<Box position={'relative'} textAlign={'right'}>
					<Divider component="div" role="presentation" textAlign={'right'}>
						<Typography
							variant="h2"
							ml={1}
							color={'action.main'}
							fontWeight={'bold'}>
							Vårat Uppdrag
						</Typography>
					</Divider>
					<br />
					<Typography variant="p2" color={'text.dark'}>
						Vårat uppdrag är enkelt: att erbjuda högkvalitativa målningstjänster
						som överträffar våra kunders förväntningar. Vi förstår att ditt hem
						eller företag är en reflektion av din personlighet och varumärke.
						Därför tar vi stolthet i varje penseldrag och säkerställer att varje
						projekt blir ett konstverk.
					</Typography>
					<Box
						component={'img'}
						src={MissionIllustration}
						sx={{
							width: '15rem',
							position: 'absolute',
							top: '-10%',
							right: '135%',
						}}
					/>
				</Box>
			</Box>
			{/* #endregion of top landing desktop view */}
			{/* #region top of landing for mobile view */}
			<Box display={{ xs: 'flex', md: 'none' }}>
				{/* first section of text */}
				<Box>
					<Box>
						<Typography variant="h5" fontWeight={'bold'} color={'action.main'}>
							Vi Kan Måla
						</Typography>
						<Divider />
						<Typography>Hello world</Typography>
					</Box>
				</Box>
				{/* second section of text */}
			</Box>
			{/* #endregion of top landing for mobile view */}
			<Box
				mt={15}
				pb={5}
				bgcolor={'secondary.main'}
				width={'100%'}
				sx={{
					backgroundColor: '#003366',
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300264D'/%3E%3Cstop offset='1' stop-color='%23003366'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%230079F2' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230079F2' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`,
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
				}}>
				<Divider component="div" role="presentation" sx={{ pt: 5 }}>
					<Typography variant="h2" color={'light.main'}>
						Våra Tjänster och Kvaliteter
					</Typography>
				</Divider>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						pt: 5,
						gap: 10,
					}}>
					<Card sx={defaultCardStyles.defaultCardStyle} elevation={4}>
						<CustomCardMedia image={HousePaintingImage} />
						<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
							<Typography variant="h3" color={'text.dark'}>
								Målning av Bostäder
							</Typography>
							<Typography variant="p2" color={'text.dark'} pt={2}>
								Från mysiga sovrum till rymliga vardagsrum specialiserar vi oss
								på att förvandla ditt hem till ett välkomnande och stilfullt
								utrymme.
							</Typography>
						</CardContent>
					</Card>
					<Card sx={defaultCardStyles.defaultCardStyle} elevation={4}>
						<CustomCardMedia image={CommercialPaintingImage} />
						<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
							<Typography variant="h3" color={'dark.dark'}>
								Målning av Företag
							</Typography>
							<Typography variant="p2" color={'dark.dark'} pt={2}>
								Vi förstår vikten av att bibehålla en professionell image för
								ditt företag. Våra kommersiella målningstjänster anpassas efter
								dina behov, oavsett om det är ett kontor, en restaurang eller en
								butik.
							</Typography>
						</CardContent>
					</Card>
					<Card sx={defaultCardStyles.defaultCardStyle} elevation={4}>
						<CustomCardMedia image={OutdoorsPaintingImage} />
						<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
							<Typography variant="h3" color={'dark.dark'}>
								Utomhusmålning
							</Typography>
							<Typography variant="p2" color={'dark.dark'} pt={2}>
								Höj din fastighets gatukonst med våra utomhusmålningstjänster.
								Vi använder hållbara, väderbeständiga färger för att skydda din
								investering.
							</Typography>
						</CardContent>
					</Card>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 10,
						py: 5,
						flexDirection: { xs: 'column', md: 'row' },
					}}>
					<Cards.ExperienceCard />
					<Cards.SolutionsCard />
					<Cards.SatisfactionCard />
				</Box>
			</Box>
			<Box width={'50rem'} textAlign={'left'} py={10}>
				<Typography variant="h2" color={'action.main'} ml={1}>
					Tveka inte över att kontakta oss för en offert!
				</Typography>
				<br />
				<Typography variant="p2" color={'text.dark'}>
					Vi ser fram emot möjligheten att måla och förverkliga ditt drömhus.
					Tveka inte att kontakta oss för en gratis konsultation, och låt oss
					diskutera hur vi kan förvandla ditt utrymme till en trevligare och
					inspirerande miljö. Tack för att du överväger Söderortsmålarna AB som
					din målningspartner. Vi ser fram emot att arbeta med dig!
				</Typography>
				<Box
					display={'flex'}
					justifyContent={'start'}
					alignItems="center"
					gap={2}
					mt={5}>
					<Link to="/kontakta-oss">
						<Button variant="outlined" color="action" sx={{ p: 1 }}>
							<Typography variant="h4" color={'action.main'}>
								Kontakta oss
							</Typography>
						</Button>
					</Link>

					<Link to="/om-oss">
						<Button
							variant="outlined"
							endIcon={<ArrowRightAlt color="primary" />}
							sx={{ p: 1 }}>
							<Typography variant="h4" color="primary">
								Läs mer
							</Typography>
						</Button>
					</Link>
				</Box>
			</Box>
			<LandingModal />
		</Container>
	);
}
