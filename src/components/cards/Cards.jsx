//React Imports
import { Typography, Card, CardContent } from '@mui/material';
//Component Imports
import CustomCardMedia from './CustomCardMedia';
//Image Imports
import ExperienceImage from '../../assets/images/first-example.jpg';
import SolutionsImage from '../../assets/images/second-example.jpg';
import SatisfactionImage from '../../assets/images/third-example.jpg';
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

const Cards = {
	ExperienceCard,
	SolutionsCard,
	SatisfactionCard,
};

export default Cards;
