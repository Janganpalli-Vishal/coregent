// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";

// const ClientExperience = () => {
//   const theme = useTheme();

//   const experienceData = [
//     {
//       id: 1,
//       label: "Strategic Clarity from Day One",
//       description:
//         "We begin with research, alignment, and structured planning — ensuring every decision serves your long-term business goals.",
//     },
//     {
//       id: 2,
//       label: "Detail-Oriented Execution",
//       description:
//         "From design systems to final deployment, every element is refined with precision and professional discipline.",
//     },
//     {
//       id: 3,
//       label: "On-Time, On-Point Delivery",
//       description:
//         "Timelines are respected. Milestones are tracked. You receive consistent progress without last-minute surprises.",
//     },
//     {
//       id: 4,
//       label: "Scalable Solutions",
//       description:
//         "We build systems designed to grow with your business — structured for today, scalable for tomorrow.",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         py: { xs: 8, md: 14 },
//         backgroundColor: "#F5F6FA", // light grey like screenshot
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* ================= TOP SECTION ================= */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//             flexDirection: { xs: "column", md: "row" },
//             mb: { xs: 6, md: 10 },
//             gap: 4,
//           }}
//         >
//           {/* LEFT HEADING */}
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: 500,
//               maxWidth: "520px",
//               color: theme.palette.primary.main,
//               lineHeight: 1.3,
//             }}
//           >
//             The Quality You Experience
//             <br />
//             with Coregent
//           </Typography>

//           {/* RIGHT PARAGRAPH */}
//           <Typography
//             variant="body2"
//             sx={{
//               maxWidth: "420px",
//               lineHeight: 1.7,
//               color: theme.palette.text.secondary,
//             }}
//           >
//             Every engagement is built on structure, precision, and
//             accountability — delivering solutions that are not just creative,
//             but dependable.
//           </Typography>
//         </Box>

//         {/* ================= CARDS ================= */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               sm: "repeat(2, 1fr)",
//               md: "repeat(4, 1fr)",
//             },
//             gap: { xs: 4, md: 5 },
//           }}
//         >
//           {experienceData.map((item) => (
//             <Card
//               key={item.id}
//               sx={{
//                 borderRadius: "12px",
//                 backgroundColor: "#EFEFEF",
//                 boxShadow: "none",
//                 height: "100%",
//               }}
//             >
//               <CardContent
//                 sx={{
//                   p: { xs: 4, md: 5 },
//                   display: "flex",
//                   flexDirection: "column",
//                   height: "100%",
//                 }}
//               >
//                 {/* PILL LABEL */}
//                 <Box
//                   sx={{
//                     alignSelf: "flex-start",
//                     backgroundColor: "#E4E7F2",
//                     px: 3,
//                     py: 1,
//                     borderRadius: "30px",
//                     mb: 6,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: "14px",
//                       fontWeight: 500,
//                       color: theme.palette.primary.main,
//                     }}
//                   >
//                     {item.label}
//                   </Typography>
//                 </Box>

//                 {/* DESCRIPTION */}
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     lineHeight: 1.7,
//                     color: theme.palette.text.secondary,
//                     fontSize: "15px",
//                   }}
//                 >
//                   {item.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ClientExperience;


import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

const ClientExperience = () => {
  const theme = useTheme();

  const experienceData = [
    {
      id: 1,
      label: "Strategic Clarity from Day One",
      description:
        "We begin with research, alignment, and structured planning — ensuring every decision serves your long-term business goals.",
    },
    {
      id: 2,
      label: "Detail-Oriented Execution",
      description:
        "From design systems to final deployment, every element is refined with precision and professional discipline.",
    },
    {
      id: 3,
      label: "On-Time, On-Point Delivery",
      description:
        "Timelines are respected. Milestones are tracked. You receive consistent progress without last-minute surprises.",
    },
    {
      id: 4,
      label: "Scalable Solutions",
      description:
        "We build systems designed to grow with your business — structured for today, scalable for tomorrow.",
    },
    {
      id: 5,
      label: "Transparent Communication",
      description:
        "Clear reporting and open discussions ensure alignment at every stage of the project lifecycle.",
    },
    {
      id: 6,
      label: "Long-Term Partnership",
      description:
        "Beyond delivery, we stay committed — supporting growth, optimization, and continuous improvement.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        // backgroundColor: "#F5F6FA",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* TOP SECTION */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            mb: { xs: 6, md: 10 },
            gap: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              maxWidth: "520px",
              color: theme.palette.primary.main,
              lineHeight: 1.3,
            }}
          >
            The Quality You Experience
            <br />
            with Coregent
          </Typography>

          <Typography
            variant="body2"
            sx={{
              maxWidth: "420px",
              lineHeight: 1.7,
              wordSpacing:1.5,
              color: theme.palette.text.secondary,
            }}
          >
            Every engagement is built on structure, precision, and
            accountability — delivering solutions that are not just creative,
            but dependable.
          </Typography>
        </Box>

        {/* HORIZONTAL SCROLL CARDS */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            pb: 2,

            /* Hide scrollbar */
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {experienceData.map((item) => (
            <Card
              key={item.id}
              sx={{
                border:'1px solid lightgrey',
                width: "calc(30.333% - 20px)",
                minWidth: { xs: 280, md: 320 },
                minHeight: { xs: 300, md: 350 },
                flexShrink: 0,
               
                boxShadow: "none",
                scrollSnapAlign: "start",
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 4, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* PILL LABEL */}
                <Box
                  sx={{
                    alignSelf: "flex-start",
                    backgroundColor: "#E4E7F2",
                    px: 3,
                    py: 1,
                    borderRadius: "30px",
                    mb: 6,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>

                {/* DESCRIPTION */}
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.7,
                    color: theme.palette.text.secondary,
                    fontSize: "15px",
                    mt:9
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientExperience;
