
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contactus = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <Box id="contact-section" sx={{ backgroundColor:"#f5f6fb", minHeight: '70vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box
                data-aos="fade-up"
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: { xs: theme.spacing(16), md: theme.spacing(20) },
                    pb: { xs: theme.spacing(4), md: theme.spacing(8) },
                }}
            >
                <Typography
                    variant="h3"
                    align="center"
                    data-aos="fade-up"
                    sx={{
                        ...theme.typography.h3,
                        color: theme.palette.primary.main,
                        fontWeight: theme.typography.h3.fontWeight,
                        fontSize: { xs: '3.2rem', md: theme.typography.h2.fontSize },
                        mb: theme.spacing(1),
                        lineHeight: 1.0,
                    }}
                >
                    Tell Me About Your
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    data-aos="fade-up"
                    sx={{
                        ...theme.typography.h3,
                        color: theme.palette.warning.main,
                        fontWeight: theme.typography.h3.fontWeight,
                        fontSize: { xs: '2.2rem', md: theme.typography.h2.fontSize },
                        mb: theme.spacing(2),
                        lineHeight: 1.1,
                    }}
                >
                    Next Project
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                    data-aos="fade-up"
                    sx={{
                        ...theme.typography.body2,
                        color: theme.palette.text.secondary,
                        maxWidth: 520,
                        mx: 'auto',
                        mb: theme.spacing(4),
                        fontSize: theme.typography.body2.fontSize,
                    }}
                >
                    Share your vision with us, and together we’ll build intelligent, scalable solutions that shape what’s next.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ mt: theme.spacing(2), mb: theme.spacing(2) }} data-aos="zoom-in">
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            px: theme.spacing(4),
                            py: theme.spacing(1.5),
                            borderRadius: '0px',
                            fontWeight: 500,
                            fontSize: 16,
                            textTransform: 'none',
                            minWidth: 180,
                            boxShadow: 'none',
                            '&:hover': {
                            	bgcolor: theme.palette.primary.main,
                            	color: theme.palette.warning.main,
                            },

                        }}
                    >
                        Download Quote
                    </Button>
                    <Button
                        onClick={() => {
                          navigate('/contact');
                          window.scrollTo(0, 0);
                        }}
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.warning.main,
                            px: theme.spacing(4),
                            py: theme.spacing(1.5),
                            borderRadius: '0px',
                            fontWeight: 500,
                            fontSize: 16,
                            textTransform: 'none',
                            minWidth: 180,
                            boxShadow: 'none',
                            // '&:hover': {
                            // 	bgcolor: theme.palette.primary.dark || theme.palette.primary.main,
                            // 	color: theme.palette.warning.main,
                            // },
                        }}
                    >
                        Contact Now
                    </Button>
                </Stack>
            </Box>
            <Box sx={{ width: '100%', mt: 'auto' }} data-aos="fade-up">
                <Divider
                    sx={{
                        my: theme.spacing(4),
                        height: '1px',
                        border: 'none',
                        backgroundImage:
                            'linear-gradient(to right, #80808029, #808080db, #80808029) !important',
                    }}

                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', px: { xs: theme.spacing(2), md: theme.spacing(10) }, pb: theme.spacing(2) }}>
                    <Typography variant="caption" sx={{ color: theme.palette.text.primary }}>
                        Copyright © 2026 Coregent Technologies
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(3) }}>
                        <Link href="#" color="inherit" sx={{ color: theme.palette.primary.main }}><FacebookIcon fontSize="small" /></Link>
                        <Link href="#" color="inherit" sx={{ color: theme.palette.primary.main }}><InstagramIcon fontSize="small" /></Link>
                        <Link href="#" color="inherit" sx={{ color: theme.palette.primary.main }}><LinkedInIcon fontSize="small" /></Link>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
                        <Link href="#" underline="hover" sx={{ color: theme.palette.text.primary, fontSize: 14 }}>Privacy policies</Link>
                        <Link href="#" underline="hover" sx={{ color: theme.palette.text.primary, fontSize: 14 }}>Terms & Conditions</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Contactus;
