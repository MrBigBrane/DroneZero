import { Box, Divider, Stack, Grid, Button, Typography } from "@mui/material";
import Video from "../components/video/Video";

export default async function Home() {
  return (
    <>
      <Button href="/sign-in">Sign in</Button>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{mt: 10}}>
          <Grid size={10}>
            <Stack spacing={2} sx={{maxWidth: 600}}>
              <Typography 
                variant="h4"
                sx={{mt: 4}}
              >
                Our Mission
              </Typography>
              <Typography 
                variant="body1"
                sx={{mt: 2, mb: 4, maxWidth: 600}}
              >
                According to a 2022 Clean Air Fund survey, about one-third of 119 countries could not establish 
                CO2 monitoring networks due to financial and technical expertise restrictions. Here at DroneZero 
                our purpose is to create a cost effective way and precise way of monitoring CO2 levels in those
                119 countries and more.
              </Typography>
              <Divider variant="middle" flexItem sx={{width: "90%"}} />
            </Stack>
          </Grid>
          <Grid size={8}>
            <Video />
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
}