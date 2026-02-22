import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import theme from "../config/theme";
const ContactSection = () => {
    const formRef = useRef();
    const [formStatus, setFormStatus] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const sendEmail = (e) => {
        console.log("hrllo");
        e.preventDefault();
        // Log form details
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            console.log("Form Data:");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        }
        emailjs
            .sendForm(
                "service_qjfxicf",
                "template_97lq3ds",
                formRef.current,
                "wJ7FZX1DMiChZSI4I"
            )
            .then(
                (result) => {
                    console.log("Message Sent:", result.text);
                    setFormStatus("success");
                },
                (error) => {
                    console.log("Error:", error.text);
                    setFormStatus("error");
                }
            );

        e.target.reset(); // Reset the form fields after submission
    };

    // services.js or inside your component file
    const services = [
        {
            title: "Web site Development",
            link: "/web-development",
        },
        {
            title: "Mobile app Development",
            link: "/mobile-app-development",
        },
        {
            title: "Digital Marketing",
            link: "/digital-marketing",
        },
        {
            title: "Dev Support & Service",
            link: "/dev-support",
        },
        {
            title: "UI/UX Designing",
            link: "/ui-ux-design",
        },
    ];

    return (
        <>
            {/* <Helmet>
        <title>Contact GreekLancer | Let’s Talk</title>
        <meta
          name="description"
          content="Get in touch with GreekLancer for your next global digital project. We’re here to help 24/7."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.greeklancer.com/contact" />

        <meta property="og:title" content="Contact GreekLancer" />
        <meta
          property="og:description"
          content="We’d love to hear about your project and help you succeed globally."
        />
        <meta property="og:url" content="https://www.greeklancer.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.greeklancer.com/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact GreekLancer | Let’s Talk" />
        <meta
          name="twitter:description"
          content="We’d love to hear about your project and help you succeed globally."
        />
        <meta
          name="twitter:image"
          content="https://www.greeklancer.com/assets/images/og/contact.jpg"
        />

        <meta
          name="keywords"
          content="contact greeklancer, get in touch, hire developers, digital services inquiry"
        />
      </Helmet> */}

            <Box sx={{ backgroundColor:"#f5f6fb" }}>
                <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 }}}>
                    <Box
                        sx={{
                            px: { xs: 0, md: 4 },
                            display: "flex",
                            flexDirection: {
                                xs: "column",
                                sm: "column",
                                md: "row",
                                lg: "row",
                            },
                            justifyContent: {
                                xs: "center",
                                sm: "center",
                                md: "space-between",
                                lg: "space-between",
                            },
                            alignItems: {
                                sm: "start",
                                xs: "start",
                                md: "center",
                                lg: "center",
                            },
                            height: {
                               
                                xs: "100vh",
                            },
                            // padding: {
                            //   xs: '40px 20px',
                            //   sm: '60px 40px',
                            //   md: '80px',
                            // },
                            gap: { xs: 0, md: 4 },
                        }}
                    >
                        {/* Left Section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-start",
                                height: {
                                    xs: "auto",
                                    sm: "auto",
                                    md: "50vh",
                                },
                            }}
                        >
                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="100"
                                sx={{
                                    fontFamily: "Mohave",
                                    fontSize: { xs: "55px", md: "96px" },
                                    fontWeight: 600,
                                    lineHeight: 1,
                                    mb: 0,
                                    color: theme.palette.primary.main,

                                }}
                            >
                                Let's get
                            </Typography>


                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="200"
                                sx={{
                                    fontFamily: "Mohave",
                                    fontSize: { xs: "55px", md: "96px" },
                                    fontWeight: 600,
                                    lineHeight: 1,
                                    mb: 2,
                                    color: theme.palette.primary.main,
                                }}
                            >
                                in <span style={{
                                    backgroundImage: "linear-gradient(to right, #FFCF23, #FFB623)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>Touch</span>
                            </Typography>
                        </Box>

                        {/* Right Section */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-start",
                                height: {
                                    xs: "auto",
                                    sm: "auto",
                                    md: "50vh",
                                },
                                mt: {
                                    xs: 4,
                                    sm: 4,
                                    md: 0,
                                },
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                        >
                            <Typography variant="body1" mb={0} color={theme.palette.text.secondary} sx={{ fontFamily: "Mohave" }}>
                                We're always excited to meet new people and explore new ideas.
                            </Typography>
                            <Typography
                                variant="body1"
                                color={theme.palette.text.secondary}
                                sx={{ marginBottom: "35px", fontFamily: "Mohave" }}
                            >
                                Contact us today and let's build something great together.
                            </Typography>
                        </Box>
                    </Box>

                    {/* form */}

                    <Grid container spacing={4} sx={{ px: { xs: '0', md: 4 }, pb: 10 }}>
                        {/* Left Side Content */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="100"
                                sx={{
                                    fontFamily: "Mohave",
                                    fontSize: { xs: "45px", md: "76px" },
                                    fontWeight: 600,
                                    lineHeight: 1,
                                    mb: 0,
                                    color: theme.palette.primary.main,

                                }}
                            >
                                Don't be afraid to
                            </Typography>


                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="200"
                                sx={{
                                    fontFamily: "Mohave",
                                    fontSize: { xs: "45px", md: "76px" },
                                    fontWeight: 600,
                                    lineHeight: 1,
                                    mb: 2,
                                    color: theme.palette.primary.main,
                                }}
                            >
                                say  <span style={{
                                    backgroundImage: "linear-gradient(to right, #FFCF23, #FFB623)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}>hello with us!
                                </span>
                            </Typography>
                            <Typography
                                variant="body2"
                                // sx={{ color: theme.palette.text.primary, mb: 4, fontFamily: "Mohave" }}
                                mb={4}
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="300"
                            >
                                We're friendly, approachable, and always up for a good
                                conversation.
                                <br />
                                Have an idea or just curious about what we do? Let's talk!
                            </Typography>

                            {/* Contact Details */}
                            <Box data-aos="fade-up" data-aos-duration="1400">
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <Box
                                        sx={{
                                            border: `1px solid ${theme.palette.divider}`,
                                            mr: "15px",
                                            width: "40px",
                                            height: "40px",
                                            color: theme.palette.primary.main,
                                            borderRadius: "5px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer"

                                        }}
                                        onClick={() => {
                                            window.location.href = "tel:+919000013167";
                                        }}
                                    >
                                        <PhoneIcon />
                                    </Box>
                                    <Box >
                                        <Typography
                                            variant="h5"
                                            color={theme.palette.text.primary}
                                            mb={0}
                                            fontWeight={400}
                                            sx={{
                                                cursor: "pointer",
                                                fontFamily: "Mohave",
                                            }}
                                        >
                                            Phone number
                                        </Typography>
                                        <Typography variant="body2">+91 9000013167, +91 9000012218</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={2}
                                mb={2}
                                data-aos="fade-up"
                                data-aos-duration="1600"
                            >
                                <Box
                                    sx={{
                                        border: `1px solid ${theme.palette.divider}`,
                                        mr: "15px",
                                        width: "40px",
                                        height: "40px",
                                        color: theme.palette.primary.main,
                                        borderRadius: "5px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        window.location.href =
                                            "mailto:info@coregentit.com?subject=Hello&body=I would like to contact you.";
                                    }}
                                >
                                    <EmailIcon />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        color={theme.palette.text.primary}
                                        mb={0}
                                        fontWeight={400}
                                        sx={{ fontFamily: "Mohave" }}
                                    >
                                        Drop a mail
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontFamily: "Mohave" }}>info@coregentit.com</Typography>
                                </Box>
                            </Box>

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={2}
                                mb={2}
                                data-aos="fade-up"
                                data-aos-duration="1800"
                            >
                                <Box
                                    sx={{
                                        border: `1px solid ${theme.palette.divider}`,
                                        mr: "15px",
                                        width: "40px",
                                        height: "40px",
                                        color: theme.palette.primary.main,
                                        borderRadius: "5px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <LocationOnIcon />
                                </Box>

                                <Box>
                                    <Typography
                                        variant="h5"
                                        color={theme.palette.text.primary}
                                        mb={0}
                                        fontWeight={400}
                                        sx={{ fontFamily: "Mohave" }}
                                    >
                                        Address
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontFamily: "Mohave" }}>
                                        Hyderabad, Telangana, India - 500098
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        to="https://www.google.com/maps/place/Capital+Park/@17.4469404,78.3836061,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb910d8d1c4f8b:0x6ef1b184af90fa3f!8m2!3d17.4469404!4d78.386181!16s%2Fg%2F11qh7h0l0z?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                                        variant="text"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            textDecoration: "underline",
                                            textTransform: "none",
                                            px: 0,
                                            py: 0,
                                        }}
                                    >
                                        See on Google Map
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right Side Form */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                sx={{
                                    backgroundColor: "background.default",
                                    padding: {xs:0, md: "30px"},
                                    borderRadius: "12px",
                                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.05)",
                                    height: "100%"
                                }}
                                component="form"
                                ref={formRef}
                                onSubmit={sendEmail}
                                autoComplete="off"
                            >
                                <Typography
                                    variant="h3"
                                    // color="text.primary"
                                    // fontWeight={400}
                                    mb={2}
                                    sx={{ fontFamily: "Mohave" }}
                                >
                                    Fill the form
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Full name"
                                            name="user_name"
                                            variant="standard"
                                            size="small"
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    color: theme.palette.text.primary,
                                                    fontFamily: "Mohave",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Email id"
                                            name="user_email"
                                            variant="standard"
                                            size="small"
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    color: theme.palette.text.primary,
                                                    fontFamily: "Mohave",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Phone number"
                                            name="user_phone"
                                            variant="standard"
                                            size="small"
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    color: theme.palette.text.primary,
                                                    fontFamily: "Mohave",
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            select
                                            label="Subject"
                                            name="user_subject"
                                            value={selectedService}
                                            onChange={(e) => setSelectedService(e.target.value)}
                                            variant="standard"
                                            size="small"
                                            sx={{
                                                "& .MuiInputBase-root": {
                                                    color: theme.palette.text.primary,
                                                    fontFamily: "Mohave",
                                                },
                                            }}
                                        >
                                            {services.map((service, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={service.title}
                                                    sx={{ color: theme.palette.primary.contrastText }}
                                                >
                                                    {service.title}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>

                                <TextField
                                    fullWidth
                                    label="Tell us about your interested in?"
                                    name="message"
                                    variant="standard"
                                    multiline
                                    rows={4}
                                    sx={{
                                        mt: 2,
                                        "& .MuiInputBase-root": {
                                            color: theme.palette.primary.contrastText,
                                        },
                                    }}
                                />

                                <FormControlLabel
                                    control={
                                        <Checkbox size="small" sx={{ color: theme.palette.primary.main }} />
                                    }
                                    label={
                                        <Typography variant="body2" mb={0} sx={{ fontFamily: "Mohave" }}>
                                            I agree to receive newsletter, Terms & conditions from
                                            coregent.
                                        </Typography>
                                    }
                                    sx={{ color: "primary.contrastText", mt: 2 }}
                                />

                                {formStatus === "success" && (
                                    <Typography color="green" mt={2}>
                                        Message sent successfully!
                                    </Typography>
                                )}
                                {formStatus === "error" && (
                                    <Typography color="red" mt={2}>
                                        Failed to send the message. Please try again.
                                    </Typography>
                                )}
                                <br />

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mt: 5,
                                        width: "100%",
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            mt: 3,
                                            textTransform: "none",
                                            bgcolor: theme.palette.primary.main,
                                            color: theme.palette.secondary.main,
                                            px: 15,
                                            py: 1,
                                            fontFamily: "Mohave",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ContactSection;
