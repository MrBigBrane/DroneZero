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
import soldering from "../images/soldering.jpg"
import bullet from "../images/BulletConnectors.jpg"
import attach from "../images/AttachingComponents.jpg"
import LegAttach from "../images/DroneLegAttached.webp"


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
        <Grid2
          container
          spacing={2}
          sx={{ alignItems: "center", alignContent: "center" }}
        >
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ProcessCard
              title={"Companion Computer"}
              description={`The Raspberry Pi 2W is a small single board computer that processes all of the GPS and CO2 data and inputs them into a CSV. This file can later be extracted for further analysis.`}
              image="/images/rpi.png"
              link="https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/"
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
              link="https://www.adafruit.com/product/5187"
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
              link="https://geprc.com/product/gep-m10-series-gps-module/"
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
              link="https://www.amazon.com/SpeedyBee-F405-Flight-Controller-Stack/dp/B0CX89LZQF/ref=sr_1_1?crid=OPFAWMKQ069D&dib=eyJ2IjoiMSJ9.m3Sp7pLUIqWelYht77Ox1BAfbrJoCewKpdbZrNY-sOmamCmMX0FOq2ikSlMAXgCl1emX5vMXrC1qtWYXW4y-srZYKn9CsvBvU7dn4jKYMmYknHESVwY_f9dE8YV5xpM7EBByfKo3sOHkD_-TmVNDxpVmUimucbqpQ8WbOQCLccgo-lzWC-T9ngphmgpAUZwj19eKN6f2rC_kXie10IakUaepgIjNcQ5uzFncm1I3SIl0LxFVeHxkDfuV7iYvMqsCOcOB0h4VSD6TtBfwNKxtvhfhMxCBpC4unNxijgKDzm0.3ztvLCKwOmJpazUoTqrUh3mnmDjAnJ65qrQIcRJZdzo&dib_tag=se&keywords=speedybee+f405+v4&qid=1747629904&s=toys-and-games&sprefix=speedy%2Ctoys-and-games%2C157&sr=1-1"
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
              link="https://www.amazon.com/SpeedyBee-F405-Flight-Controller-Stack/dp/B0CX89LZQF/ref=sr_1_1?crid=OPFAWMKQ069D&dib=eyJ2IjoiMSJ9.m3Sp7pLUIqWelYht77Ox1BAfbrJoCewKpdbZrNY-sOmamCmMX0FOq2ikSlMAXgCl1emX5vMXrC1qtWYXW4y-srZYKn9CsvBvU7dn4jKYMmYknHESVwY_f9dE8YV5xpM7EBByfKo3sOHkD_-TmVNDxpVmUimucbqpQ8WbOQCLccgo-lzWC-T9ngphmgpAUZwj19eKN6f2rC_kXie10IakUaepgIjNcQ5uzFncm1I3SIl0LxFVeHxkDfuV7iYvMqsCOcOB0h4VSD6TtBfwNKxtvhfhMxCBpC4unNxijgKDzm0.3ztvLCKwOmJpazUoTqrUh3mnmDjAnJ65qrQIcRJZdzo&dib_tag=se&keywords=speedybee+f405+v4&qid=1747629904&s=toys-and-games&sprefix=speedy%2Ctoys-and-games%2C157&sr=1-1"
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
              link="https://www.aliexpress.us/item/3256805639898807.html?spm=a2g0o.productlist.main.3.332261fd1wL9DB&algo_pvid=72af29e2-b1e1-4a80-a645-3138c2d9f9b8&algo_exp_id=72af29e2-b1e1-4a80-a645-3138c2d9f9b8-1&pdp_npi=4%40dis!USD!20.93!5.81!!!20.93!5.81!%402103205117357836385202880ee790!12000034489088948!sea!US!0!ABX&curPageLogUid=NX7dtmXUuOpv&utparam-url=scene%3Asearch%7Cquery_from%3A&_gl=1*h9jv5d*_gcl_aw*R0NMLjE3MzU1MDY3OTIuQ2p3S0NBaUFnOFM3QmhBVEVpd0FPMi1SNnV5eDBzWUp0QTBOTGNuUGxIYjlVX3hNaFpQUnRfcWFTa1BpM0NvalF2N0o3MEJHTzR5QTVob0NFazBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE3MzU1MDY3OTIuQ2p3S0NBaUFnOFM3QmhBVEVpd0FPMi1SNnV5eDBzWUp0QTBOTGNuUGxIYjlVX3hNaFpQUnRfcWFTa1BpM0NvalF2N0o3MEJHTzR5QTVob0NFazBRQXZEX0J3RQ..*_gcl_au*MTE5MzUwMzg1LjE3MzQxMjAzMzc.*_ga*NjcxODM0MzI1MTU3MDE4LjE3MzQxMjAzMzQ3MzE.*_ga_VED1YSGNC7*MTczNTc4MzY0MS41LjEuMTczNTc4MzY4Ny4xNC4wLjA"
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
              link="https://www.amazon.com/dp/B07V1TYR3P?ref=cm_sw_r_cp_ud_dp_59VGMMKB0R3EP0280CBN&ref_=cm_sw_r_cp_ud_dp_59VGMMKB0R3EP0280CBN&social_share=cm_sw_r_cp_ud_dp_59VGMMKB0R3EP0280CBN&_encoding=UTF8&newOGT=1&th=1"
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
              link="https://www.amazon.com/FLYSKY-Transmitter-Controller-Receiver-Upgrade/dp/B07Z8VCB45/ref=sr_1_3?crid=2RJO4QUJYLQ9X&dib=eyJ2IjoiMSJ9.RE0-WjvtVpeM48YKpHwJynD1Dxaj_ailylH4HNc182fBVwaKEoj_6JohMxdzjHcw3T1tKhF04GQLlrtSY7CkUcL_xw-t9QB8NB3oUmBhnUFAITGGd7G9OfeNiwv2cx436HE5d5HqbBuwfGnsHXNn-H-oVJo4hIOg03j9NqS47FN5Bap14F50fHZbPu1BExi43fIQzChTlX-ndjL-Md396l4-sbBb26NPC0spGxRy_UL19nCYI5rOZw8x1_N7OuYUjXCgAN3CM6XPQ8npNcgr8dfpspm2ilYsdIaiDjGF8XyxenNmkRwxqFGtpplfOJksUcUfA9YsHnBpvYhsgrsiTCLZj9cSPcdwTTIwconBLXQ.Sas2wCaxWKf69bSXYB5DwutPDKLusrJXl0I1qlNR9JQ&dib_tag=se&keywords=10+channel+drone+transmitter&qid=1735871094&s=toys-and-games&sprefix=10+channel+drone+transmitt%2Ctoys-and-games%2C155&sr=1-3"
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
              link="https://www.aliexpress.us/item/3256807353456077.html?spm=a2g0o.productlist.main.1.11285d15bEfaqI&algo_pvid=92b43ca2-1d3e-47e3-952a-0f3caaef163c&algo_exp_id=92b43ca2-1d3e-47e3-952a-0f3caaef163c-0&pdp_npi=4%40dis!USD!8.13!0.99!!!59.12!7.17!%40210318ec17357858759537027ee5e0!12000041212246450!sea!US!0!ABX&curPageLogUid=0LT5Jrulz0T7&utparam-url=scene%3Asearch%7Cquery_from%3A"
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
              link="https://www.amazon.com/SpeedyFPV-ZMR250-250mm-Carbon-Racing/dp/B0CCQBFHTN/ref=sr_1_3?crid=1HWIYWQ1XRQ44&dib=eyJ2IjoiMSJ9.sC2MoEW-0sOtunhqhbIYvDfuplwEg6JRkBgsZ2eT3JH2PHmZWqtXWOnMPdXre01tvDUgbj4Gc6sATaItsBKcSb3NDzowHUplMCDkgDrextPcgKxiu6JGDkk8cGu-NgwFkizaGjY_QYgd6hfMplCUiKbigAORQf9DU6PjVdf5BxQUKNq_G2ikGrbL7lFoh3ofDymEREwiNeKh4Qzu9l5SUNGeS2bCtc6eOOB_rWYGxYMQ73OvDSITby2bDMNpVOhnMEM5FxRnwzpHkBHlTuETz-wW5aPuI-_wPXFsT4HnPi4KP8aIxJPq7baX4MITZx0yPCbrtde3IzYXVMhdb5x2_1Q_mMyDHHUr87OHdHs_52E.nE9TnACQ4TQGk2hSFpeUGQbmeaQ6vu4MFdeO3VA3Zps&dib_tag=se&keywords=250mm+drone+frame&qid=1735502210&s=toys-and-games&sprefix=250mm+drone+franme%2Ctoys-and-games%2C123&sr=1-3"
            />
          </Grid2>
          <Grid2 size={{ xs: 16, md: 4 }}>
            <ProcessCard
              title={"Drone Legs"}
              description={`
                     The drone legs are responsible for for protecting the bottom of the drone. In terrain with rough surfaces and obstacles, the legs can help the drone land safely.
                `}
              image="/images/DroneLeg.png"
              link="https://drive.google.com/file/d/1ViLO1JhJ00epcEyFDETBy0DItAlhSIUi/view?usp=sharing"
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
              style={{
                display: "block",
                margin: "0 auto 20px auto",
              }}
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
              style={{
                display: "block",
                margin: "0 auto 20px auto",
              }}
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
            style={{
              display: "block",
              margin: "0 auto 20px auto",
            }}
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
          <b>Drone Assembly:</b> To assemble the components, we had to use
          various soldering and CAD designing skills.
        </Typography>{" "}
        <Grid2 container spacing={2} alignItems={"center"} marginBottom={5}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Image
              src={soldering}
              alt="Soldering"
              height={400}
              style={{
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <Typography
              variant="body1"
              textAlign={"center"}
              fontFamily={"monospace"}
              marginLeft={5}
              marginRight={5}
            >
              <b>Soldering Components: </b>While soldering and crimping wires
              for the flight controller and other components, we encountered
              multiple issues such as a burnt pad and small solder bridges.
              Solder pads are thin layers of copper that allow the soldering tin
              to adhere to the pad surface easily. To fix the burnt pads, we
              removed the outer copper layer and directly soldered onto the
              copper surface beneathwith a finer tip at a lower temperature. We
              also encountered solder bridges, which are formed when too much
              solder is used, connecting two or more copper pads. To identify
              solder bridges, we used a multimeter to test the continuity
              between adjacent plates. We then used isopropyl alcohol to clean
              the soldering sites which successfully removed the solder bridges.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Image
              src={bullet}
              alt="Bullet Connectors"
              height={400}
              style={{
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <Typography
              variant="body1"
              textAlign={"center"}
              fontFamily={"monospace"}
              marginLeft={5}
              marginRight={5}
            >
              <b>Bullet connectors: </b>We used bullet connectors to connect the
              motors to the ESC because they allowed for an easier and faster
              soldering process. To use them, we filled one end of each bullet
              connector with soldering tin and inserted the motor/ESC wire into
              the tin filled cavity in a secure connection. Then we used a heat
              shrink to cover the metal surface of the bullet connector,
              preventing any short-circuits between motor wires.
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} alignItems={"center"} marginBottom={5}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Image
              src={LegAttach}
              alt="Securing the legs"
              height={400}
              style={{
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <Typography
              variant="body1"
              textAlign={"center"}
              fontFamily={"monospace"}
              marginLeft={5}
              marginRight={5}
            >
              <b>Attaching the legs: </b>Initially, we used thin M3 screws to
              attach the drone legs to the frame. After a few test flights, two
              of the drone legs split into two parts. Thus, we used longer
              screws and increased the infill density by 30% to resolve this
              issue.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Image
              src={attach}
              alt="Securing components"
              height={400}
              style={{
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <Typography
              variant="body1"
              textAlign={"center"}
              fontFamily={"monospace"}
              marginLeft={5}
              marginRight={5}
            >
              <b>Securing components: </b>To secure all of the components to the
              drone frame, we used screws, zip ties, double-sided tape, foam,
              and a battery strap. The tape was used to secure the receiver, GPS
              module, CO2 sensor, and RPI. Screws were used for the motors,
              propellers, drone legs, and the flight controller + ESC stack. The
              battery was secured with foam surrounding it and a battery strap
              to ensure a safe and secure hold while allowing the battery to be
              removed for charging. Zip ties were used to organize the wires and
              ensure that they would not impede the propellers.
            </Typography>
          </Grid2>
        </Grid2>
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
          5. Raspberry Pi Software
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
          <b>Software Algorithm:</b> Code developed to collect and log geospatial CO₂ data.
        </Typography>
        <Grid2 container spacing={2} alignItems={"center"} marginBottom={5}>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Establishing Software Connection"}
              description={
                <>
                  To log CO₂ and GPS data, the RPI must be able to communicate
                  with the flight controller and the CO₂ sensor. Thus, a
                  software connection is established between the RPI and the
                  peripheral components. For the flight controller, this process
                  identifies its unique id, used in the later arming check. The
                  baud rate is set to 921600 bits per second in line with
                  standard MAVLink telemetry rates. For the CO₂ sensor, the RPI
                  establishes a connection through I2C.
                  <br></br>
                  <br></br>
                  <b>(*) </b> I2C stands for inter-integrated circuit, a serial
                  communication protocol mainly used for data transfer over
                  short distances between electronic components.
                </>
              }
              image="/images/code1.png"
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Initializing Data Collection"}
              description={
                <>
                  To relate CO₂ levels to specific locations, the RPI must be
                  able to access geospatial data through the GPS. First, a
                  general function <b>(*)</b> is created using Pymavlink{" "}
                  <b>(**)</b> to access the MAVLink telemetry streamed by the
                  flight controller. When the function is called, the data
                  stream is filtered to only include the data calculated by the
                  GPS module in one second intervals. Similarly, the CO₂ sensor
                  is called to begin collecting data in five second intervals
                  using the Adafruit SCD4X library <b>(***)</b>.<br></br>
                  <br></br>
                  <b>(*) </b>
                  Credit to{" "}
                  <a href="https://discuss.bluerobotics.com/t/accessing-real-time-mavlink-messages-via-pymavlink/11355/2">
                    this online forum thread
                  </a>{" "}
                  for the general function.
                  <br></br>
                  <br></br>
                  <b>(**) </b>
                  Pymavlink is a Python library that allows users to interact
                  with vehicles that support MAVLink telemetry.
                  <br></br>
                  <br></br>
                  <b>(***) </b>
                  Adafruit_scd4x is a special library made by the SCD40 sensor
                  developer, Adafruit, to access the CO₂ sensor.
                </>
              }
              image="/images/code2.png"
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Initiating Data Logging"}
              description={
                <>
                  In order to minimize memory consumption by the RPI and enhance
                  the relevancy of the data exported, we first check the armed
                  status of the drone <b>(*)</b>. This prevents the RPI from
                  continuously logging data to the .csv file even if the drone
                  is not armed/not in flight. The RPI checks the arming state in
                  a loop until the drone is armed, at which point data logging
                  begins.
                  <br />
                  <br />
                  <b>(*)</b> If the drone is connected to a ground control
                  station, the RPI ends up receiving a heartbeat message from
                  both the flight controller and the ground control station. To
                  ensure that the armed status the RPI receives is that of the
                  flight controller, the script first checks if the id of the
                  heartbeat message matches that of the flight controller. This
                  filters out any extraneous heartbeat messages and checks the
                  arming status of the correct message.
                </>
              }
              image="/images/code3.png"
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Syncing GPS and CO₂ Data"}
              description={
                <>
                  The GPS and CO₂ data are requested through distinctly separate
                  processes (one being through MAVLink telemetry and the other
                  being through the Adafruit_scd4x library). Because of this,
                  time discrepancies between each CO₂ measurement and GPS
                  coordinate can occur, interfering with the reliability of the
                  monitoring system. By using the if statement, we can ensure
                  that CO₂ readings are correctly linked with their
                  corresponding GPS location, giving users the most accurate
                  data possible.
                </>
              }
              image="/images/code4.png"
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={
                "Logging Data"
              }
              description={
                <>
                  We log GPS and CO₂ concentration data to a .csv file,
                  structured with columns for timestamp, CO₂ concentration,
                  longitude, latitude, and altitude. Once the drone is disarmed,
                  the .csv file <b>(*)</b> is automatically generated and can be
                  transferred to a personal computer via WiFi or USB. This file
                  serves as input for further analysis using our custom
                  visualization software. 
                  <br></br>
                  <br></br>
                  <b>(*) </b>A .csv (Comma-Separated Values) file
                  is a widely used, spreadsheet-compatible format, similar in
                  structure to Excel files but more lightweight and universally
                  supported.
                </>
              }
              image="/images/code5.png"
            />
          </Grid2>
          <Grid2 size={{ md: 12 }}>
            <RPICard
              title={"Terminating the Logging Process"}
              description={
                <>
                  Similar to the initial arming check, during each iteration of
                  the logging process the RPI checks the armed status. Once the
                  drone is disarmed, the RPI exits the logging loop and the
                  final .csv file is ready to be exported.
                </>
              }
              image="/images/code6.png"
            />
          </Grid2>
        </Grid2>
        <Typography
          variant="h6"
          textAlign={"center"}
          fontFamily={"monospace"}
          fontWeight={700}
          margin={5}
        >
          Full Code:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            src="/images/fullcode1.png"
            width={1000}
            height={1000}
            alt="Code"
          />
          <Image
            src="/images/fullcode2.png"
            width={1000}
            height={1000}
            alt="Code"
          />
        </Box>
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
              link={"https://nextjs.org/"}
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
              link={"https://leafletjs.com/"}
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
              link={"https://supabase.com/"}
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
