import { Box, Grid2, Paper, Typography } from "@mui/material";
import ProcessCard from "../../components/ui/ProcessCard";
import Image from "next/image";
import wiring from "../images/wiring.png"
import componentplacement from "../images/componentplacement.jpg"
import componentplacement2 from "../images/componentplacement2.jpg"
import IssueCard from "../../components/ui/IssueCard";
import droneflip from "../images/droneflip.png"
import betaflightx from "../images/betaflightx.svg"
import vibration from "../images/vibration.png"
import gyro from "../images/gyro.png"
import pid from "../images/pid.jpg"
import hoveroscillation from "../images/hoveroscillation.png"
import barometerissue from "../images/barometerissue.png"
import gpsaltitude from "../images/gpsaltitude.webp"
import RPICard from "../../components/ui/RPICard";

export default function ProcessPage() {
  return (
    <Grid2 container marginTop={10}>
      <Box sx={{ width: "100%", margin: 1 }}>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontFamily={"monospace"}
          fontWeight={700}
        >
          Our Process
        </Typography>
        <Typography
          variant="h4"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={2}
        >
          1. Researching Components <br />
        </Typography>
        <Typography
          variant="h5"
          textAlign={"center"}
          fontFamily={"monospace"}
          margin={5}
          border={1}
          padding={2}
          borderRadius={2}
        >
          <b>Key Components: </b>
          These are components vital to the function of the project's main
          objective: creating a CO2 monitoring system that uses GPS and a CO2
          sensor to monitor a drone's CO2 levels. <br />
        </Typography>
        <Grid2 container spacing={2} sx={{ alignItems: "center" }}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Raspberry Pi 2W"}
              description={
                "The Raspberry Pi is a small single board computer that processes all of the GPS and CO2 data and inputs them into a CSV"
              }
              image="/images/rpi.png"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"CO2 Sensor"}
              description={`
                     The Adafruit SCD40 CO2 sensor provides CO2
                measurements in PPM(parts per million). It measures true CO2
                instead of estimating the CO2 concentration based on VOC/gas
                concentrations
                `}
              image="/images/co2sensor.jpg"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"GPS Module"}
              description={`
                The GEP-M10-DQ GPS Module provides data on the GPS coordinates
                of the drone and also measures the air pressure with a built in
                barometer which is used to help the drone determine its
                altitude.
                `}
              image="/images/gps.png"
            />
          </Grid2>
        </Grid2>
        <Typography
          variant="h5"
          textAlign={"center"}
          fontFamily={"monospace"}
          margin={5}
          border={1}
          padding={2}
          borderRadius={2}
        >
          <b>Drone Components:</b> These are the components necessary for
          successful drone operation and flight
        </Typography>
        <Grid2 container spacing={4} alignItems={"center"}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Flight Controller"}
              description={`
                The flight controller, chosen to be the SpeedyBee F405 V4, is the brain of the
                drone. It receives commands from the user and sends them to the
                motors and ESCs.
                `}
              image="/images/flightcontroller.jpg"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"ESC"}
              description={`
                The ESC (Electronic Speed Controller) is responsible for the
                motors of the drone. It receives commands from the flight
                controller and sends them to the motors. For compatibility and convenience,
                the SpeedyBee F405 V4 4-in-1 ESC with a 55 Amp rating was used.
                `}
              image="/images/esc.webp"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Motor"}
              description={`
                The motor is responsible for controlling the thrust of the drone. It receives commands from the flight
                controller and sends them to the motors. Considering the ~750 gram weight of the drone and 55 Amp rating
                of the ESC, the 2550KV T-Motor Velox V2306 V3 was chosen.
                `}
              image="/images/motor.png"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Battery"}
              description={`
                The battery is responsible for providing power to the drone. It receives commands from the flight
                controller and sends them to the motors. Due to the need for a moderate flight time, the use of a 2550 KV motor,
                and financial constraint, a 1500 mAh 4S LiPo battery was chosen.
                `}
              image="/images/dronebattery.png"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Receiver"}
              description={`
                The receiver is responsible for receiving commands from the user through RF communication via the transmitter.
                To simplify the flexibility of using more than 6 channels, the FlySky iA6B receiver (with the FS-i6X transmitter) was chosen with a serial protocol
                supporting up to 10 channels.
                `}
              image="/images/receiver.png"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Propellers"}
              description={`
              The propellers are responsible for providing lift for flight. Their speed is controlled by the motors. 
              In order to ensure smooth flight, 3 blade 5 inch propellers were chosen. 
              `}
              image="/images/propellers.jpg"
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Drone Frame"}
              description={`
              The frame is responsible for supporting the weight of the drone, as well as the battery. 
              In order to ensure stability and strength, a lightweight carbon fiber frame was chosen.
              `}
              image="/images/droneframe.jpg"
            />
          </Grid2>
        </Grid2>
        <Typography
          variant="h4"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={5}
          marginTop={10}
        >
          2. Planning the Build
        </Typography>
        <Typography
          variant="h6"
          textAlign={"center"}
          fontFamily={"monospace"}
          margin={5}
          border={1}
          padding={2}
          borderRadius={2}
        >
          <b>Component Placement:</b> In order to have an effective build, it is
          important to place the components in a way that optimizes wiring.
        </Typography>{" "}
        <Grid2 container spacing={2} alignItems={"center"} marginBottom={5}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Image
              src={componentplacement}
              alt="Component Placement"
              height={500}
              style={{ justifySelf: "center", marginBottom: 20 }}
            />
            <Typography
              variant="body1"
              textAlign={"center"}
              fontFamily={"monospace"}
              marginLeft={5}
              marginRight={5}
            >
              <b>Battery Placement: </b>The battery could be placed on the
              bottom or the top of the frame. But, because of the terrain upon
              which the drone could be used (rocky, uneven, etc...), it was
              decided to place the battery on the top, avoiding any damage.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Image
              src={componentplacement2}
              alt="Component Placement"
              height={500}
              style={{ justifySelf: "center", marginBottom: 20 }}
            />
            <Typography
              variant="body1"
              textAlign={"center"}
              fontFamily={"monospace"}
              marginLeft={5}
              marginRight={5}
            >
              <b>Raspberry Pi Placement: </b> The Raspberry Pi, originally
              having been the 4 Model B+, was too large to be able to be safely
              placed on the top of the frame. Moreover, the battery's placement
              on the top of the frame would have caused damage to the battery,
              so the Raspberry Pi model was changed to the significantly smaller
              Zero series, allowing both the rpi and battery to be on the top of
              the frame.
            </Typography>
          </Grid2>
        </Grid2>
        <Paper
          style={{
            padding: 16,
            textAlign: "center",
            margin: "auto",
            width: "50%",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Image
            src={wiring}
            alt="Component Placement"
            height={500}
            style={{ justifySelf: "center", marginBottom: 20 }}
          />
          <Typography
            variant="body1"
            textAlign={"center"}
            fontFamily={"monospace"}
          >
            Wiring diagram for soldering. Black wires are ground, red wires are
            high voltage, and other colors are for data.
          </Typography>
        </Paper>
        <Typography
          variant="h4"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={5}
          marginTop={10}
        >
          3. Building the Drone
        </Typography>
        <Typography
          variant="h6"
          textAlign={"center"}
          fontFamily={"monospace"}
          margin={5}
          border={1}
          padding={2}
          borderRadius={2}
        >
          <b>Component Placement:</b> In order to have an effective build, it is
          important to place the components in a way that optimizes wiring.
        </Typography>
        <Typography
          variant="h4"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={5}
          marginTop={10}
        >
          4. Flight Issues
        </Typography>
        <Grid2 container spacing={2} alignItems={"center"} marginBottom={5}>
          <Grid2 size={{ md: 12, lg: 6 }} >
            <IssueCard
              title={"Drone Flipping"}
              description={`
            In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
            `}
              image={droneflip}
              title2={"Changing Frame Type"}
              description2={`
              In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
              `}
              image2={betaflightx}
            />
          </Grid2>
          <Grid2 size={{ md: 12, lg: 6 }} >
            <IssueCard
              title={"Oscillations in Flight"}
              description={`
            In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
            `}
              image={vibration}
              title2={"Gyro Filtration"}
              description2={`
              In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
              `}
              image2={gyro}
            />
          </Grid2>
          <Grid2 size={{ sm: 12, md: 12, lg: 6 }} >
            <IssueCard
              title={"Hovering Instability"}
              description={`
            In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
            `}
              image={hoveroscillation}
              title2={"Dynamic Hover Learning + Tuning"}
              description2={`
              In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
              `}
              image2={pid}
            />
          </Grid2>
          <Grid2 size={{ md: 12, lg: 6 }} >
            <IssueCard
              title={"Drone Flipping"}
              description={`
            In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
            `}
              image={droneflip}
              title2={"Changing Frame Type"}
              description2={`
              In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
              `}
              image2={betaflightx}
            />
          </Grid2>
          <Grid2 size={{ md: 12 }} >
            <IssueCard
              title={"Barometer Malfunction"}
              description={`
            In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
            `}
              image={barometerissue}
              title2={"GPS + Alternate Barometer"}
              description2={`
              In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
              `}
              image2={gpsaltitude}
            />
          </Grid2>
        </Grid2>
        <Typography
          variant="h4"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={5}
          marginTop={10}
        >
          5. RPI
        </Typography>
        <Typography
          variant="h6"
          textAlign={"center"}
          fontFamily={"monospace"}
          margin={5}
          border={1}
          padding={2}
          borderRadius={2}
        >
          <b>Software Algorithm:</b> Code developed to collect and log both CO2 data and Geospatial data vital to ensure the mission of our product.
        </Typography>
        <Grid2 container spacing={2} alignItems={"center"} marginBottom={5}>
          <Grid2 size={{ md: 12 }} >
            <RPICard
              title={"Raspberry Pi"}
              description={`
            In order to ensure smooth flight, 3 blade 5 inch propellers were chosen.
            `}
              image="/images/code1.jpg"
            />
          </Grid2>
          
        </Grid2>
      </Box>
    </Grid2>
  );
}
