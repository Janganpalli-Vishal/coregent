
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import p1 from '../assets/p1.svg';
import p2 from '../assets/p2.svg';
import p3 from '../assets/p3.svg';
import p4 from '../assets/p4.svg';
import p5 from '../assets/p5.svg';
import { Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});



const partners = [
	{ name: 'Fellomate', logo: p1},
	{ name: 'Vyuham Media', logo: p2 },
	{ name: 'MANA DRIVER', logo: p3 },
	{ name: 'Inkonsul', logo: p4 },
	{ name: 'WE', logo: p5 },
];

const Partner = () => {
	const theme = useTheme();
	return (
		<Container id="partner-section" maxWidth="xl"
			sx={{
				bgcolor: theme.palette.background.default,
				width: '100%',
                 backgroundColor:'transparent',
                 pt: { xs: 12, md: 16 },
                 pb: 8,
			}}
		>
			<Grid container alignItems="center" spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
				<Grid item size={{xs:12, md:6}} >
					<Typography
						data-aos="fade-right"
						data-aos-delay="100"
						variant="h3"
						sx={{
							...theme.typography.h3,
							color: theme.palette.primary.main,
							fontWeight: theme.typography.h3.fontWeight,
							fontSize: theme.typography.h3.fontSize,
							mb: theme.spacing(1),
							lineHeight: 1.1,
						}}
					>
						Powering Forward<br />Thinking{' '}
						<Box component="span" sx={{ color: theme.palette.warning.main, display: 'inline' }}>Companies</Box>
					</Typography>
					<Typography
						data-aos="fade-right"
						data-aos-delay="200"
						variant="body2"
						sx={{
							...theme.typography.body2,
							color: theme.palette.text.secondary,
							mt: theme.spacing(2),
							fontSize: theme.typography.body2.fontSize,
						}}
					>
						Delivering quality solutions that grow with you.
					</Typography>
				</Grid>
				<Grid item size={{xs:12, md:6}}>
					<Grid container spacing={3} justifyContent="center" alignItems="center">
						{partners.map((partner, idx) => (
							<Grid
							
                                
                                size={{xs:6, sm:4, md:4, lg:4}}
								key={partner.name}
								data-aos="zoom-in"
								data-aos-delay={300 + (idx * 100)}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									mb: { xs: theme.spacing(2), md: 0 },
								}}
							>
								<img src={partner.logo} width={'150px'}/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Partner;
