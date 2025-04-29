'use client'

import { Box, Divider, Stack, Grid, Button, Typography, Grid2 } from "@mui/material";
import Video from "../components/video/Video";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";

import cost from "../app/images/cost.png";

export default function Home({ searchParams }) {
  return (
    <Grid2
      container
      sx={{
        display: "flex",
        width: "95%",
        flexGrow: 1,
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
        marginTop: 8
        // flexDirection: "column",
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
            // maxWidth: 1200,
            textAlign: "center",
            fontFamily: "monospace",
          }}
        >
          According to a 2022 Clean Air Fund survey, about one-third of 119
          countries could not establish CO2 monitoring networks due to financial
          and technical expertise restrictions. Here at DroneZero our purpose is
          to create a cost effective way and precise way of monitoring CO2
          levels in those 119 countries and more.
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
      <Grid2 item sx={{ justifyContent: "center", width: "100%", }}>
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
        <Box sx={{ display: "flex", justifyContent: "space-around", alignContent: "center", alignItems: "center" }}>
          <Box >
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
            Drones are a cost effective way to monitor CO2 levels. They are also
            a cost effective way to monitor other pollutants. They are also a
            cost effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants.
          </Typography>
        
          </Box>
          <Image src={cost} alt="Cost" width={400} height={400} style={{ borderRadius: 20}}/>
        </Box>
            <Divider variant="inset" style={{ marginTop: 50, marginBottom: 50, width: "90%" }}/>
        <Box sx={{ display: "flex", justifyContent: "space-around", alignContent: "center", alignItems: "center", marginBottom: 10 }}>
          <Image src={cost} alt="Cost" width={400} height={400} style={{ borderRadius: 20}}/>
          <Box >
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
            Drones are a cost effective way to monitor CO2 levels. They are also
            a cost effective way to monitor other pollutants. They are also a
            cost effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants. They are also a cost
            effective way to monitor other pollutants.
          </Typography>
        
          </Box>
          
        </Box>
      </Grid2>
    </Grid2>
  );
}