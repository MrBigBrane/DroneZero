'use client'

import { Box, Divider, Stack, Grid, Button, Typography, Grid2 } from "@mui/material";
import Video from "../components/video/Video";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";

import cost from "../app/images/cost.png";
import accessibility from "../app/images/accessibility.jpg";


export default function Home({ searchParams }) {
  return (
    <Grid2
      container
      sx={{
        display: "flex",
        width: "85%",
        flexGrow: 1,
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
        marginTop: 8,
      }}
    >
      <Grid2 item sx={{ height: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            mt: 4,
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
          }}
        >
          Welcome to DroneZero!
        </Typography>
        <Video />
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            mb: 4,
            textAlign: "left",
            fontFamily: "monospace",
            fontSize: 20,
          }}
        >
          <b>Our Mission</b>: Each year, as global CO₂ emissions
          rise, the seemingly distant worry of climate change becomes
          increasingly real. To effectively tackle this growing concern, we must first
          understand the root of the issue: the sources of emissions. <br />
          <br />
          Our product, DroneZero, collects precise CO₂ measurements in both
          rural and urban areas, providing users access to real-time, relevant
          data. Once a monitoring session is complete, the data is exported as a
          CSV file for further geospatial analysis in our user-friendly map
          visualization, offering immediate insights into CO₂ emissions on a
          local scale. <br />
          <br />
          <b>
            But DroneZero is more than just a tool - it's a step towards regaining
            control over our planet.
          </b>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 6 }}>
          <Button
            variant="contained"
            size="large"
            href="/mapview?tutorial=true"
            endIcon={<ArrowRight />}
          >
            Map Tutorial
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="/dronetutorial"
            endIcon={<ArrowRight />}
          >
            Drone Tutorial
          </Button>
        </Box>

        <Divider variant="middle" style={{ marginTop: 50, marginBottom: 50 }} />
      </Grid2>
      <Grid2 item sx={{ justifyContent: "center", width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
          }}
        >
          Why DroneZero
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
            width: "90%",
            margin: "auto",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              1. Cost
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: 600,
                // textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              Problem: The cost of CO2 monitoring systems is too high (over 250M
              USD for one satellite) and technological challenges with creating
              them have caused underdeveloped countries to
              forgo developing their own CO2 monitoring network and instead rely on
              international datasets or local monitoring efforts. According to a 2022 Clean Air Fund
              survey, about one-third of 119 countries could not establish CO2
              monitoring networks due to financial and technical expertise
              restrictions.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: 600,
                // textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              Our solution: To lower the cost of CO2 monitoring systems, we
              created a low-cost drone that can monitor CO2. This drone is easy
              to operate and provides accurate data at low cost. A fleet of
              these drones can be used in place of or complement satellite CO2 monitoring
              systems.
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Image
            src={cost}
            alt="Cost"
            width={400}
            height={400}
            style={{ borderRadius: 20 }}
          />
          </Box>
        </Box>
        <Divider
          variant="inset"
          style={{ marginTop: 50, marginBottom: 50, width: "90%" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
            marginBottom: 10,
            width: "90%",
            margin: "auto",
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Image
            src={accessibility}
            alt="Accessibility"
            width={400}
            height={400}
            style={{ borderRadius: 20, marginRight: 20 }}
          />
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              2. Accessibility
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: 600,
                // textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              Problem: Current CO2 monitoring systems use satellites which
              require technical expertise which many countries do not have.
              Furthermore, satellites have low resolution when monitoring CO2
              and cannot provide real time CO2 monitoring data.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: 600,
                // textAlign: "center",
                fontFamily: "monospace",
              }}
            >
              Our solution: A drone system will solve these issues as it doesn’t
              require as much technical expertise to operate and can monitor at
              any time with an easy and efficient retrieval of the data.
            </Typography>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
}