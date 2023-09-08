import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
	palette: {
		primary: {
			main: '#003366',
		},
		secondary: {
			main: '#0988b0',
		},
		action: {
			main: '#d54708',
		},
		text: {
			header: '#fff',
			light: '#dfdfdf',
			dark: '#808080',
		},
		dark: {
			main: '#404040',
		},
		light: {
			main: '#fff',
		},
		background: {
			paper: '#fff',
		},
	},
	typography: {
		h1: {
			fontSize: '3rem',
			fontWeight: 400,
			fontFamily: 'Roboto',
		},
		h2: {
			fontSize: '1.75rem',
			fontWeight: 400,
			fontFamily: 'Roboto',
		},
		h3: {
			fontSize: '1.5rem',
			fontWeight: 400,
			fontFamily: 'Roboto',
		},
		h4: {
			fontSize: '1.25rem',
			fontWeight: 400,
			fontFamily: 'Roboto',
		},
		h5: {
			fontSize: '1rem',
			fontWeight: 400,
			fontFamily: 'Roboto',
		},
		paragraph: {
			fontSize: '1rem',
			fontWeight: 400,
			fontFamily: 'Poppins',
		},
		p2: {
			fontSize: '0.9rem',
			fontWeight: 400,
			fontFamily: 'Poppins',
		},
	},

	// components: {
	// 	MuiCardMedia: {
	// 		styleOverrides: {
	// 			root: {
	// 				':hover:after': {
	// 					content: "'dsdsd'",
	// 					background: 'rgba(255,255,255,.5)',
	// 					width: '100%',
	// 					height: '100%',
	// 					position: 'relative',
	// 				},
	// 			},
	// 		},
	// 	},
	// },
});

export default Theme;
