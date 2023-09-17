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

export const defaultCardStyles = { defaultCardStyle, defaultCardContentStyle };
