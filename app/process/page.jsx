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
          variant="h4"
          textAlign={"center"}
          fontFamily={"monospace"}
          fontWeight={700}
        >
          Our Process
        </Typography>
        <Typography
          variant="h5"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={2}
        >
          1. Researching Components <br />
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
          <b>Key Components: </b>
          These are components vital to the function of the project's main
          objective: creating a CO2 monitoring system that uses GPS and a CO2
          sensor to monitor a drone's CO2 levels. <br />
        </Typography>
        <Grid2 container spacing={2} sx={{ alignItems: "center" }}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Companion Computer"}
              description={`The Raspberry Pi 2W is a small single board computer that processes all of the GPS and CO2 data and inputs them into a CSV. This file can later be extracted for further analysis.`}
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
          variant="h6"
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
          variant="h5"
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
          variant="h5"
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
          variant="h5"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={5}
          marginTop={10}
        >
          4. Flight Issues
        </Typography>
        <Grid2 container spacing={2} alignItems={"stretch"} margin={2}>
          <Grid2 size={{ md: 12, lg: 6 }}>
            <IssueCard
              title={"Drone Flipping"}
              description={`
            On the first takeoff attempt, the drone did not seem to be ready to ascend.
             Rather, it was tilting to one side and with an increase in throttle, it flipped.
            `}
              image={droneflip}
              title2={"Changing Frame Type"}
              description2={`
              Such an issue could be ascribed to the motors. Modern drone control algorithms allow for a significant portion of the control of the drone to be offloaded onto the flight controller.
              For example, in the stabilize mode, the flight controller controls the roll and pitch of the drone, ensuring that the drone does not tilt to one side. In this case, because the motors
              were mapped incorrectly to their corresponding position on the drone, the flight controller was controlling the wrong motors for 
              making adjustments to the roll and pitch. In almost all other drone frame configurations, motors 1 and 2 and 3 and 4 are diagonal to each other. In this configuration,
              the order of the motors (through QGC testing) was determined to fit the Betaflight X configuration, where motors 1 and 2 and 3 and 4 are parallel to each other.
              `}
              image2={betaflightx}
            />
          </Grid2>
          <Grid2 size={{ md: 12, lg: 6 }}>
            <IssueCard
              title={"Vibrations in Flight"}
              description={`
            During subsequent flights, the drone successfully ascended, but appeared to have very high frequency vibrations in all axes.

            `}
              image={vibration}
              title2={"Gyro Filtration"}
              description2={`
              Similar to the surface-level cause of the motor mismatch, the PID loop that provides feedback to the flight controller was resulting in unintended oscillations.
               The PID loop used to control the drone operates based on the error between the desired and actual position of the drone. In this case, the PID loop was too sensitive
               to subtle changes in the position of the drone, determined by the gyro. Thus in an attempt to correct the position of the drone, the PID loop was overcorrecting to the point
               where oscillations/vibrations occurred. In understanding this issue, the logical solution was to filter out the noise from the gyro, increasing the noise it filters from 20 Hz to 80 Hz. 
              `}
              image2={gyro}
            />
          </Grid2>
          <Grid2 size={{ sm: 12, md: 12 }}>
            <IssueCard
              title={"Hovering Instability"}
              description={`
            As the drone became more and more stable, a new symptom appeared: hovering instability. In manual modes, even when putting the throttle at 50%,
            the drone would slowly begin to either ascend or descend and when corrected, the drone would begin to move in the opposite direction, creating a cycle of up and down. In semi-autonomous modes like altitude hold or loiter, the drone would replicate the same behavior
            to a large degree.
            `}
              image={hoveroscillation}
              title2={"Dynamic Hover Learning + Tuning"}
              description2={`
              In order to address the issue of hovering at mid throttle in manual modes, the drone was flown in a semi-autonomous mode for 30 sec - 1 min where the
              ArduPilot software assigns the drone a hover value. The hover value is determined through adaptive learning and allows the hover value to be modified easily
              with changes in payload and weight distribution. Moreover, for alleviating the issue of hovering oscillations in semi-autonomous modes, the PID loop was
              tuned through trial and error. The default settings of the PID loop were not meant for a drone as powerful as our drone and thus, required rigorous testing.
              `}
              image2={pid}
            />
          </Grid2>
          {/* <Grid2 size={{ md: 12, lg: 6 }}>
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
          </Grid2> */}
          <Grid2 size={{ md: 12 }}>
            <IssueCard
              title={"Barometer Malfunction"}
              description={`
            During a test flight in the autonomous mode, about 30 seconds into the flight, the drone began to slowly ascend. At first,
            this seemed to be part of the normal behavior of the drone as ArduPilot advertises an expected margin of error of +/- 10 m from the desired altitude.
            However, the drone did not descend at any point and reached above 100 ft (desired altitude was about 10 feet). In looking over the logs, it was found that 
            the altitude the onboard barometer was reporting did not match the altitude the GPS triangulated. In fact, there were several sudden jumps in altitude while
            the GPS barometer gradually increased in altitude, suggesting that the barometer was not working properly. Even more, the barometer signaled errors at multiple points
            during the flight which seemed to be resolved almost instantaneously. Finally, the barometer's temperature readings ranged from below 0 degrees celsius to above 90 degrees, at which
            point it was determined that the barometer must be malfunctioning/defective.
            `}
              image={barometerissue}
              title2={"GPS + Alternate Barometer"}
              description2={
                <>
                  The barometer onboard the flight controller was not working
                  properly, but, because the GPS included a barometer, the next
                  course of action was to try and use that barometer.
                  Unfortunately, the process of using the GPS barometer was not
                  as simple as the process of using the onboard barometer. The
                  GPS barometer was not being detected by the ArduPilot software
                  and thus, to the flight controller it was as if it didn't
                  exist. To read more about the process of detecting the GPS
                  barometer, click{" "}
                  <a
                    href="https://discuss.ardupilot.org/t/unable-to-connect-to-external-dps310-barometer/131125"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "blue" }}
                  >
                    here
                  </a>
                  . The flight controller was suffering a lack of memory space
                  due to the various extraneous features present in the stable
                  version of ArduPilot. By removing any features unnecessary to
                  our project, the custom firmware was able to detect the GPS
                  barometer and function properly. Ultimately, a GPS
                  altitude-control method was used as the main method of
                  altitude control, but due to the possibility of having a loss
                  of signal, the GPS barometer was assigned as a failsafe.
                </>
              }
              image2={gpsaltitude}
            />
          </Grid2>
        </Grid2>
        <Typography
          variant="h5"
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
          <b>Software Algorithm:</b> Code developed to collect and log both CO2
          data and geospatial data which is vital to the success of the project.
        </Typography>
        <Grid2 container spacing={2} alignItems={"center"} marginBottom={5}>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Retrieving Flight Data"}
              description={`
                For users to see CO2 levels at specific locations, 
                the computer must be able to access geospatial data, 
                which would have to be retrieved from the drone’s flight 
                log. We can actively retrieve this geospatial data from the 
                drone by using a Python library called PyMavlink. PyMavlink 
                is a Python library that allows users to request specific types 
                of data from the drone’s flight log through Mavlink Telemetry. 
                We then modify this process by telling the computer to request data 
                in a specified interval.
              `}
              image="/images/code1.jpg"
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Retrieving CO2 Data"}
              description={`
                We use another Python library called adafruit_scd4x that 
                allows users to retrieve CO2 concentration levels read by 
                the sensor our drone has equipped. Adafruit_scd4x is a special 
                library made by the sensor’s developer, Adafruit, specifically 
                for the sensor we use, the SCD40, and the SCD41, which is its 
                sister component.
            `}
              image="/images/code2.jpg"
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Writing Geospatial Data and CO2 Data to Spreadsheet for Extraction"}
              description={`
                We take both the geospatial data collected from our drone and the CO2 concentration 
                data collected from the SCD40, the CO2 sensor, and then write to a .csv file. 
                A .csv file is basically a spreadsheet file and can be thought of as similar 
                to Excel. We format the data with a column for time, CO2 concentration, 
                longitude, latitude, and finally, altitude. The file is then created after 
                the drone is de-armed and manually extracted to be visualized on your personal 
                computer.
            `}
              image="/images/code3.jpg"
            />
          </Grid2>
        </Grid2>
        <Typography
          variant="h5"
          textAlign={"left"}
          fontFamily={"monospace"}
          margin={5}
          marginTop={10}
        >
          6. Website Visualization
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
          <b>Web-app Production:</b> Softwares used to produce the website
          visualization.
        </Typography>
        <Grid2 container spacing={2} alignItems={"stretch"} marginBottom={5}>
          <Grid2 size={{ sm: 12, md: 4, lg: 4 }}>
            <ProcessCard
              title={"Next.js"}
              description={
                <>
                  <b>React.js Framework: </b>Next.js builds on React.js, an HTML
                  + JavaScript language, and includes various optimizations that
                  simplify and improve the coding and user experience.
                  <br />
                  <br />
                  <b>Frontend: </b>As a frontend development point, Next.js
                  supports native React.js features and provides quick routing
                  features that enhance usability of the website.
                  <br />
                  <br />
                  <b>Backend: </b>Next.js uniquely supports a seamless backend
                  integration with SSR and pre-fetching of data.
                </>
              }
              image="/images/nextjs.webp"
            />
          </Grid2>
          <Grid2 size={{ sm: 12, md: 4, lg: 4 }}>
            <ProcessCard
              title={"Leaflet.js"}
              description={
                <>
                  <b>Maps API: </b>Leaflet.js, a React.js package, uses
                  OpenStreetView’s maps API for integration with websites.
                  <br />
                  <br />
                  <b>Geospatial Data: </b>Once a user uploads the .csv file,
                  Leaflet uses the GPS coordinates of each CO2 datapoint to plot
                  the flight path of the drone. Leaflet also allows color coding
                  of CO2 points based on the bracket of risk associated with the
                  CO2 concentration.
                  <br /> <br />
                  <b>Flight Comparison: </b>Users can upload multiple maps to be
                  compared at the same time.
                </>
              }
              image="/images/leafletjs.jpg"
            />
          </Grid2>
          <Grid2 size={{ sm: 12, md: 4, lg: 4 }}>
            <ProcessCard
              title={"Supabase"}
              description={
                <>
                  <b>Database: </b> Supabase is a free to use PostgreSQL
                  database hosted remotely, allowing for synchronization across
                  devices.
                  <br /> <br />
                  <b>Data Prep: </b>The frontend application converts the csv
                  file to a javascript object, stored in the .json format.
                  <br /> <br />
                  <b>Saving Data: </b>The user saves data, sending an
                  asynchronous request to the supabase API, storing data and
                  binding it to the user.
                </>
              }
              image="/images/supabase.webp"
            />
          </Grid2>
        </Grid2>
        <Typography
          variant="body1"
          textAlign={"center"}
          fontFamily={"monospace"}
          margin={5}
        >
          To view the project on GitHub, click{" "}
          <a
            href="https://github.com/MrBigBrane/DroneZero"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            here
          </a>
          .
        </Typography>
      </Box>
    </Grid2>
  );
}
