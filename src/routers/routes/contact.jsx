import {
	Box,
	Button,
	Container,
	TextField,
	Typography,
	IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Mail';

export default function Contact() {
	return (
		<Container>
			<Box
				py={10}
				display={'flex'}
				justifyContent={'center'}
				flexDirection={{ xs: 'column', md: 'row' }}>
				{/* The contact form */}
				<Box
					bgcolor={'dark.main'}
					p={{ xs: 5, md: 10 }}
					borderRadius={2}
					sx={{
						minWidth: { xs: '10rem', md: '26rem' },
					}}>
					{/* top header */}
					<Box>
						<Typography variant="h5" color={'text.dark'}>
							SKRIV VAD DU BEHÖVER HJÄLP MED
						</Typography>
						<Typography variant="h2" color={'light.main'} mt={1}>
							KONTAKTA OSS FÖR EN OFFERT
						</Typography>
					</Box>
					{/* the form */}
					<Box
						component={'form'}
						autoComplete="off"
						py={5}
						action="https://api.web3forms.com/submit"
						method="post"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							alignItems: 'center',
						}}>
						{/* The hidden input */}
						<input
							type="hidden"
							name="access_key"
							value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
						/>
						<TextField
							name="name"
							id="outlined-basic"
							required
							label={'Ditt Namn'}
							color="action"
						/>
						<TextField
							name="email"
							id="outlined-basic"
							required
							label={'Din Email'}
							color="action"
						/>
						<TextField
							type="tel"
							name="phone"
							id="outlined-basic"
							required
							label={'Ditt Telefonnummer'}
							color="action"
						/>
						<TextField
							name="message"
							id="outlined-basic"
							required
							label={'Din Förfrågan'}
							color="action"
							multiline
							rows={4}
							sx={{ mt: 5 }}
						/>
						{/* The submit button */}
						<Button
							type="submit"
							variant="contained"
							color="action"
							sx={{ width: '12rem', p: 2, mt: 2 }}>
							<Typography variant="h5" color={'light.main'}>
								Skicka Förfrågan
							</Typography>
						</Button>
					</Box>
				</Box>
				{/* The additional contact info */}
				<Box
					bgcolor={'primary.main'}
					borderRadius={2}
					display={'flex'}
					justifyContent={'center'}
					sx={{
						minWidth: { xs: '10rem', md: '26rem' },
						maxHeight: '24rem',
					}}>
					{/* top header */}
					<Box px={10} py={{ xs: 5, md: 10 }}>
						<Box>
							<Typography variant="h5" color={'text.dark'} mb={1}>
								LÅT OSS PRATA VID
							</Typography>
							<Typography variant="p2" color={'light.main'}>
								Nu ska vi måla! Ring oss eller skicka ett mejl för en offert. Vi
								återkommer så snart som möjligt och skickar vårt team av
								ambitiösa målare till dig.
							</Typography>
						</Box>
						{/* The contact info */}
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'start'}
							gap={1}
							ml={-1}
							mt={5}>
							<IconButton
								color="light"
								sx={{
									gap: 1,
									transition: 'none',
									':hover': { borderRadius: 2 },
								}}>
								<PhoneIcon color="light.main" />
								<a href="tel:073-546 90 51" rel="noreferrer" target="_blank">
									<Typography variant="h5">073-546 90 51</Typography>
								</a>
							</IconButton>
							<IconButton
								color="light"
								sx={{
									gap: 1,
									transition: 'none',
									':hover': { borderRadius: 2 },
								}}>
								<EmailIcon color="light.main" />
								<a
									href="mailto: rikard@soderortsmalarna.se"
									rel="noreferrer"
									target="_blank">
									<Typography variant="h5">
										rikard@soderortsmalarna.se
									</Typography>
								</a>
							</IconButton>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
