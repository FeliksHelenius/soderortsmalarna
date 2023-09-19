//React Imports
import { Typography, Card, CardContent } from '@mui/material';
//Component Imports
import CustomCardMedia from './CustomCardMedia';
//Image Imports
import ExperienceImage from '../../assets/images/first-example.jpg';
import SolutionsImage from '../../assets/images/second-example.jpg';
import SatisfactionImage from '../../assets/images/third-example.jpg';

import HousePaintingImage from '../../assets/images/gallery/soderortsmalarna17.jpg';
import CommercialPaintingImage from '../../assets/images/gallery/soderortsmalarna1.jpg';
import OutdoorsPaintingImage from '../../assets/images/gallery/soderortsmalarna24.jpg';
//style imports
import { defaultCardStyles } from './defaultCardStyles';

const ExperienceCard = (props) => {
	return (
		<Card elevation={4} sx={defaultCardStyles.defaultCardStyle} {...props}>
			<CustomCardMedia image={ExperienceImage} />
			<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
				<Typography variant={'h3'} sx={{ py: 2 }}>
					Erfarenhet och Expertis
				</Typography>
				<Typography variant={'p2'} width={'80%'}>
					Vårt team består av skickliga och erfarna målare som hanterar varje
					projekt med precision och omsorg.
				</Typography>
			</CardContent>
		</Card>
	);
};

const SolutionsCard = (props) => {
	return (
		<Card elevation={4} sx={defaultCardStyles.defaultCardStyle} {...props}>
			<CustomCardMedia image={SolutionsImage} />
			<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
				<Typography variant="h3" sx={{ py: 2 }}>
					Skräddarsydda Lösningar
				</Typography>
				<Typography variant={'p2'} width={'80%'}>
					Varje projekt är unikt, och vi skräddarsyr våra tjänster för att passa
					dina specifika behov och visioner.
				</Typography>
			</CardContent>
		</Card>
	);
};

const SatisfactionCard = (props) => {
	return (
		<Card elevation={4} sx={defaultCardStyles.defaultCardStyle} {...props}>
			<CustomCardMedia image={SatisfactionImage} />
			<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
				<Typography variant="h3" sx={{ py: 2 }}>
					Kundnöjdhet
				</Typography>
				<Typography variant="p2" width={'80%'}>
					Dina önskemål är vår främsta prioritet, och vi arbetar för att
					överträffa dina förväntningar.
				</Typography>
			</CardContent>
		</Card>
	);
};
// end of the first three cards

const ResidenceCard = (props) => {
	return (
		<Card sx={defaultCardStyles.defaultCardStyle} elevation={4} {...props}>
			<CustomCardMedia image={HousePaintingImage} />
			<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
				<Typography variant="h3">Målning av Bostäder</Typography>
				<Typography variant="p2" pt={2}>
					Från mysiga sovrum till rymliga vardagsrum specialiserar vi oss på att
					förvandla ditt hem till ett välkomnande och stilfullt utrymme.
				</Typography>
			</CardContent>
		</Card>
	);
};

const BusinessCard = (props) => {
	return (
		<Card sx={defaultCardStyles.defaultCardStyle} elevation={4} {...props}>
			<CustomCardMedia image={CommercialPaintingImage} />
			<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
				<Typography variant="h3">Målning av Företag</Typography>
				<Typography variant="p2" pt={2}>
					Vi förstår vikten av att bibehålla en professionell image för ditt
					företag. Våra kommersiella målningstjänster anpassas efter dina behov,
					oavsett om det är ett kontor, en restaurang eller en butik.
				</Typography>
			</CardContent>
		</Card>
	);
};

const OutdoorsCard = (props) => {
	return (
		<Card sx={defaultCardStyles.defaultCardStyle} elevation={4} {...props}>
			<CustomCardMedia image={OutdoorsPaintingImage} />
			<CardContent sx={defaultCardStyles.defaultCardContentStyle}>
				<Typography variant="h3">Utomhusmålning</Typography>
				<Typography variant="p2" pt={2}>
					Höj värdet på din fastighet med en väl omhändertagen fasad med hjälp
					av våra utomhusmålningstjänster. Vi använder hållbara, väderbeständiga
					färger för att skydda din investering.
				</Typography>
			</CardContent>
		</Card>
	);
};

const Cards = {
	ExperienceCard,
	SolutionsCard,
	SatisfactionCard,
	ResidenceCard,
	BusinessCard,
	OutdoorsCard,
};

export default Cards;
