import { Button, Typography } from "@mui/material";
import Video from "../components/video/Video";

export default async function Home() {
  return (
    <>
      <Button href="/sign-in">Sign in</Button>
      <Typography 
        variant="h4"
        sx={{mt: 4}}
      >
        Purpose
      </Typography>
      <Typography 
        variant="body1"
      >
        According to a 2022 Clean Air Fund survey, about one-third of 119 countries could not establish 
        CO2 monitoring networks due to financial and technical expertise restrictions. Here at DroneZero 
        our purpose is to create a cost effective way and precise way of monitoring CO2 levels in those
         119 countries and more.
      </Typography>
      <Video />
    </>
  );
}
