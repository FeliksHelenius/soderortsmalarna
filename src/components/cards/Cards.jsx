//React Imports
import { Typography, Card, CardContent, Divider } from '@mui/material';
//Component Imports
import CustomCardMedia from './CardMedia';
//Image Imports
import ExperienceImage from '../../assets/images/first-example.jpg';
import SolutionsImage from '../../assets/images/second-example.jpg';
import SatisfactionImage from '../../assets/images/third-example.jpg';
//Icon imports

const defaultCardStyle = {
	maxWidth: { xs: '18rem', md: '20rem' },
	minHeight: '20rem',
	pb: 4,
	justifyContent: 'center',
	alignItems: 'center',
	transition: 'all 300ms',
	':hover': { md: { transform: 'translateY(-0.2rem)' } },
	bgcolor: { xs: 'dark.main', md: 'light.main' },
};

const defaultCardContentStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: { xs: 'left', md: 'center' },
	textAlign: { xs: 'left', md: 'center' },
	color: { xs: 'light.main', md: 'text.dark' },
};

const ExperienceCard = (props) => {
	return (
		<Card elevation={4} sx={defaultCardStyle} {...props}>
			<CustomCardMedia image={ExperienceImage} />
			<CardContent sx={defaultCardContentStyle}>
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
		<Card elevation={4} sx={defaultCardStyle} {...props}>
			<CustomCardMedia image={SolutionsImage} />
			<CardContent sx={defaultCardContentStyle}>
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
		<Card elevation={4} sx={defaultCardStyle} {...props}>
			<CustomCardMedia image={SatisfactionImage} />
			<CardContent sx={defaultCardContentStyle}>
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
