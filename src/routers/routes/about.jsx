import { Box, Button, Container, Divider, Typography } from '@mui/material';
//image imports
import BackgroundImage from '../../assets/images/about-background.jpg';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<Container>
			<Box py={10}>
				<Box px={{ xs: 2, md: 20 }}>
					<Typography variant="h2">Om Oss - Söderortsmålarna</Typography>
					<Divider />
					<br />
					<Typography variant="p2">
						På Söderortsmålarna AB är vi stolta över vår kundcentrerade
						inställning och våra många års erfarenhet inom måleri. Med vår
						kompetens kan vi försäkra dig om din nöjdhet med vårt arbete.
					</Typography>
					<Box pt={5}>
						<Typography variant="h3">Vår Erfarenhet</Typography>
						<Typography variant="p2">
							Vi är ett engagerat team av målare som är skickliga på att hantera
							en bred palett av projekt, från småskaliga uppgifter till
							omfattande entreprenader. Vi går bortom enbart målning och
							erbjuder extra tjänster såsom elektrikerarbete och
							golvinstallation för att hjälpa dig förverkliga din vision. Vår
							portfölj inkluderar projekt för bostadsrättsföreningar (Brfer),
							företag och enskilda bostadsägare.
						</Typography>
					</Box>
					<Box
						pt={5}
						display={'flex'}
						flexDirection={'column'}
						alignItems={'center'}>
						<Typography variant="p2">
							Vi ser med spänning fram emot möjligheten att måla och förvandla
							ditt drömhem. Tveka inte att kontakta oss för en kostnadsfri
							konsultation. Vi kan diskutera hur vi kan förvandla ditt utrymme
							till en mer behaglig och inspirerande miljö. Tack för att du
							överväger Söderortsmålarna AB som din målningspartner. Vi ser fram
							emot att samarbeta med dig!
						</Typography>
						<Button
							variant="outlined"
							sx={{
								mt: 5,
								borderColor: 'action.main',
								':hover': { borderColor: 'action.main' },
							}}>
							<Link to={'/kontakta-oss'}>
								<Typography color={'action.main'}>Kontakta oss</Typography>
							</Link>
						</Button>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
