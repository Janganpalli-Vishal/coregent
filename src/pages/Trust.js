
import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CountUp from '../reactbits/CountUp';
import { Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const stats = [
	{ value: 50, suffix: '+', label: 'Projects Delivered' },
	{ value: 30, suffix: '+', label: 'Trusted Clients' },
	{ value: 6, suffix: '+', label: 'Industry Experience' },
	{ value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const Trust = () => {
	const theme = useTheme();
	const [start, setStart] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const handleScroll = () => {
			if (!ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			if (rect.top < window.innerHeight && rect.bottom > 0) {
				setStart(true);
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Container maxWidth="xl"
			ref={ref}
			sx={{
				bgcolor: theme.palette.background.default,
                py: 8,
				position: 'relative',
				overflow: 'hidden',
				
                    backgroundColor:'transparent',
					
			}}
		>
			<Grid container alignItems="center" justifyContent="center" sx={{ position: 'relative', zIndex: 1 }} py={8}>
				<Grid size={{xs:12, md:6}}>
					<Box data-aos="fade-right" data-aos-delay="100">
						<Typography
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
							Built on Trust.<br />
							Measured by{' '}
							<Box component="span" sx={{ color: theme.palette.warning.main, display: 'inline' }}>Impact.</Box>
						</Typography>
						<Typography
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
					</Box>
				</Grid>
				<Grid size={{xs:12, md:6}} display={'flex'} justifyContent={'end'} alignContent={'center'}>
					<Box
						data-aos="fade-down"
						data-aos-delay="200"
						sx={{
							width: '100%',
							maxWidth: 440,
							mx: { xs: 'auto', md: 0 },                                      
							bgcolor: 'transparent',
							borderRadius: theme.shape ? theme.shape.borderRadius : '10px',
							boxShadow: 'none',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<Grid container columns={2} sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 'none' }}>
							{stats.map((stat, i) => (
								<Grid
									item
									xs={1}
                                    size={{xs:1}}
									key={stat.label}
									
									sx={{
										borderRight: i % 2 === 0 ? `1.5px solid ${theme.palette.divider}` : 'none',
										borderBottom: i < 2 ? `1.5px solid ${theme.palette.divider}` : 'none',
										py: { xs: theme.spacing(3), md: theme.spacing(4) },
										px: { xs: theme.spacing(1), md: theme.spacing(2) },
										textAlign: 'center',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										minWidth: 0,
									}}
								>
									<Typography
										variant="h2"
										sx={{
											...theme.typography.h2,
											color: theme.palette.primary.main,
											fontWeight: theme.typography.h2.fontWeight,
											fontSize: theme.typography.h2.fontSize,
											mb: theme.spacing(1),
											lineHeight: 1.1,
										}}
									>
										<CountUp
                                            to={stat.value}
											start={start ? 0 : undefined}
											end={stat.value}
											duration={2}
											useEasing
										/>
										{stat.suffix}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											...theme.typography.body2,
											color: theme.palette.text.primary,
											fontSize: theme.typography.body2.fontSize,
										}}
									>
										{stat.label}
									</Typography>
								</Grid>
							))}
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Trust;
