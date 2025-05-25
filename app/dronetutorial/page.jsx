import { Paper, Box, Typography, Container, Divider, Stack } from "@mui/material";
import MemoryIcon from '@mui/icons-material/Memory';
import Image from "next/image";
import DroneZeroWebsite from '../images/DroneZeroWebsite.jpg'
import Data from '../images/Data.png'
export default function DroneTutorial() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            marginTop: "10vh",
            width: "120vh",
            marginBottom: "10vh",
          }}
        >
          <Container maxWidth="100%">
            <Paper
              elevation={3}
              sx={{ padding: 4, margin: "auto", maxWidth: "100%" }}
            >
              <Typography
                variant="h4"
                sx={{ fontFamily: "monospace" }}
              >
                <b>Drone Tutorial</b> <br />
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontFamily: "monospace" }}
              >
                A step by step tutorial on using DroneZero's CO₂ monitoring
                drone
              </Typography>
              <Divider />
              <Stack spacing={2} sx={{ marginTop: 2 }}>
                <Stack direction="row" spacing={1}>
                  <MemoryIcon />
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontFamily: "monospace" }}
                  >
                    Autonomous Data Collection
                  </Typography>
                </Stack>
                <Container
                  maxWidth="100%"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    marginLeft: 2,
                  }}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1}>
                      <MemoryIcon />
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ fontFamily: "monospace" }}
                      >
                        Build and upload a Flight Path on QGroundControl (Note:
                        You need a ground control station to be able to use
                        autonomous flight, and there are other options like
                        Mission Planner or APM Planner 2.0)
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={1}>
                          <MemoryIcon />
                          <Typography
                            variant="body1"
                            gutterBottom
                            sx={{ fontFamily: "monospace" }}
                          >
                            Arm the drone in STABILIZE mode (Note: This mode is
                            not dependent on peripheral sensor malfunctions,
                            meaning control of the drone can be regained in such
                            a case)
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          <MemoryIcon />
                          <Typography
                            variant="body1"
                            gutterBottom
                            sx={{ fontFamily: "monospace" }}
                          >
                            Throttle up to slightly under the threshold of
                            thrust needed for the drone to ascend
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                          <MemoryIcon />
                          <Typography
                            variant="body1"
                            gutterBottom
                            sx={{ fontFamily: "monospace" }}
                          >
                            Set the drone to AUTO mode with drone switch B
                          </Typography>
                        </Stack>
                        <Container
                          maxWidth="100%"
                          sx={{ marginLeft: "auto", display: "flex" }}
                        >
                          <Stack spacing={2}>
                            <Stack direction="row" spacing={1}>
                              <MemoryIcon />
                              <Typography
                                variant="body1"
                                gutterBottom
                                sx={{ fontFamily: "monospace" }}
                              >
                                The drone will autonomously run the previously
                                loaded mission created according to the user’s
                                specific needs
                              </Typography>
                            </Stack>
                          </Stack>
                        </Container>
                      </Stack>
                      <Container
                        maxWidth="100%"
                        sx={{
                          justifyContent: "center",
                          alignContent: "center",
                          display: "block",
                        }}
                      >
                        <Image
                          src={DroneZeroWebsite}
                          width="auto"
                          height="auto"
                          alt="Transmitter"
                          objectFit="contain"
                          //style={{ float: 'right', aspectRatio: 'auto', size : 'auto' }}
                        />
                      </Container>
                    </Stack>
                  </Stack>
                </Container>
                <Stack direction="row" spacing={1}>
                  <MemoryIcon />
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontFamily: "monospace" }}
                  >
                    At the end of data collection, a file will be created
                    combining CO₂ ppm readings with their respective GPS
                    positions:
                  </Typography>
                </Stack>
                <Container
                  maxWidth="100%"
                  sx={{ justifyContent: "center", display: "flex" }}
                >
                  <Image
                    src={Data}
                    width={800}
                    height={400}
                    alt="Flight Data"
                  />
                </Container>
                <Stack direction="row" spacing={1}>
                  <MemoryIcon />
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontFamily: "monospace" }}
                  >
                    The onboard Raspberry Pi can be connected to a computer via
                    USB or WiFi to download the CSV file for further analysis
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Container>
        </Box>
      </>
    );
}