const defaultCardStyle = {
	minWidth: { xs: '22rem', md: '26rem' },
	minHeight: '30rem',
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
	alignItems: 'center',
	textAlign: 'center',
	color: { xs: 'light.main', md: 'text.dark' },
};

export const defaultCardStyles = { defaultCardStyle, defaultCardContentStyle };
