import { Avatar, Box, Grid, Grid2, IconButton, Paper, Stack, Typography } from "@mui/material";

// import varun from '../../assets/varun.png'
// import ryan from '../../assets/ryan.png'
import kirby from '../images/Kirby2.jpg'
import ryan from '../images/ryan.png'
import Varun from '../images/Varun.png'

import Image from "next/image";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function AboutUs() {
    return (
      <>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            marginBottom: 20,
            marginTop: 80,
            fontFamily: "monospace",
          }}
        >
          <b>About Us</b>
        </Typography>

        <Grid
          container
          justifyContent="center"
          spacing={4}
          width={"100%"}
          marginBottom={4}
        >
          <Grid item xs={12} md={6} lg={3} width={"100%"}>
            <Paper style={{ padding: 16, textAlign: "center", margin: "auto" }}>
              <IconButton>
                <Avatar sx={{ width: 200, height: 200 }}>
                  <Image src={Varun} alt={"Varun Thota"} layout="fill" />
                </Avatar>
              </IconButton>
              <Typography
                variant="h5"
                style={{ textAlign: "center", fontFamily: "monospace"}}
              >
                <b>Varun Thota</b>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                  fontFamily: "monospace",
                }}
              >
                Project Member
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ textAlign: "center", fontFamily: "monospace"}}
              >
                Varun is an excellent high school student at Saratoga High
                School located in Saratoga, California. He mainly worked on
                constructing and configuring the drone with Ryan, as well as developing
                the software used to collect CO2 concentration data
                from the adafruit sensor. He additionally helped with the development of
                both this website and GPS data collection script. In his free
                time, Varun likes to watch anime, play video games, and workout.
              </Typography>
              <Box
                marginTop={2}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <a
                    href="https://www.instagram.com/varunth0ta/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-customPurple"
                  >
                    <InstagramIcon
                      style={{ marginRight: 5, color: "fuchsia" }}
                    />
                    <span style={{ color: "fuchsia" }}>Instagram</span>
                  </a>
                </Box>
                <Box>
                  <a
                    href="https://www.facebook.com/profile.php?id=100068137131995"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    <FacebookIcon
                      style={{ marginRight: 5, color: "DodgerBlue" }}
                    />
                    <span style={{ color: "DodgerBlue" }}>Facebook</span>
                  </a>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Paper style={{ padding: 16, textAlign: "center", margin: "auto" }}>
              <IconButton>
                <Avatar sx={{ width: 200, height: 200 }}>
                  <Image src={ryan} alt={"Ryan Modafe"} layout="fill" />
                </Avatar>
              </IconButton>
              <Typography
                variant="h5"
                style={{ textAlign: "center", fontFamily: "monospace"}}
              >
                <b>Ryan Modafe</b>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                  fontFamily: "monospace",
                }}
              >
                Project Lead
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ textAlign: "center", fontFamily: "monospace"}}
              >
                Ryan is a student at Saratoga High School. He mainly worked on
                getting the project "off the ground," setting up the software of
                the drone and diving deep into ArduPilot's firmware, building a
                custom version at one point. He also set up the Raspberry Pi
                2W, using the lite OS, developed the arming check and GPS data
                collection scripts used for the drone, and created the
                visualization used for CO2 data on this website. In his free
                time, Ryan likes to learn more about deep learning, play piano,
                and watch movies.
              </Typography>
              <Box
                marginTop={2}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <a
                    href="https://www.facebook.com/profile.php?id=100080897269560"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    <FacebookIcon
                      style={{ marginRight: 5, color: "DodgerBlue" }}
                    />
                    <span style={{ color: "DodgerBlue" }}>Facebook</span>
                  </a>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={3} width={"100%"}>
            <Paper style={{ padding: 16, textAlign: "center", margin: "auto" }}>
              <IconButton>
                <Avatar sx={{ width: 200, height: 200 }}>
                  <Image src={kirby} alt={"Kirby Fung"} layout="fill" />
                </Avatar>
              </IconButton>
              <Typography
                variant="h5"
                style={{ textAlign: "center", fontFamily: "monospace"}}
              >
                <b>Kirby Fung</b>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                  fontFamily: "monospace",
                }}
              >
                Project Member
              </Typography>

              <Typography
                variant="subtitle1"
                style={{ textAlign: "center", fontFamily: "monospace"}}
              >
                Kirby is a student at Saratoga High School. During the
                introductory phase, he conducted research on determining the
                right hardware parts for the drone and ensuring that the parts
                would function together and be reliable. When building the
                drone, he CAD designed the drone legs and helped with soldering
                the connections between the drone parts. For the software, he
                helped with coding the raspberry pi to record CO2 measurements.
                In his free time, Kirby likes to play water polo, basketball,
                and woodwork.
              </Typography>
              <Box
                marginTop={2}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <Box>
                  <a
                    href="https://www.facebook.com/profile.php?id=100068137131995"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    <FacebookIcon
                      style={{ marginRight: 5, color: "DodgerBlue" }}
                    />
                    <span style={{ color: "DodgerBlue" }}>Facebook</span>
                  </a>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
}