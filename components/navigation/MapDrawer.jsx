'use client'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRef, useState } from 'react';
import FileButton from '../buttons/FileButton';
import LazyLoadingMap from '../maps/LazyLoadingMap';
import { Tooltip, Button, Typography, Snackbar, Alert } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import FlightIcon from '@mui/icons-material/Flight';
import NavBar from './NavBar';
import savecsv from '@/serveractions/save/savecsv';
import PreviousLogs from '@/components/buttons/PreviousLogs';
import DropFileButton from '../buttons/DropFileButton';
import SaveModal from '../buttons/SaveModal';
import 'intro.js/introjs.css';
import { Steps, Hints } from 'intro.js-react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'scroll',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(NavBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const defaultFile = [
  {
    time: "2025-03-16 21:35:10.458109",
    co2_ppm: 480,
    altitude: 128.97,
    latitude: 37.2658173,
    longitude: -122.0276521,
  },
  {
    time: "2025-03-16 21:35:14.041802",
    co2_ppm: 439,
    altitude: 129.39,
    latitude: 37.2658162,
    longitude: -122.0276493,
  },
  {
    time: "2025-03-16 21:35:19.047636",
    co2_ppm: 438,
    altitude: 133.11,
    latitude: 37.2658157,
    longitude: -122.0276422,
  },
  {
    time: "2025-03-16 21:35:23.052687",
    co2_ppm: 359,
    altitude: 132.98,
    latitude: 37.2658108,
    longitude: -122.0274454,
  },
  {
    time: "2025-03-16 21:35:28.058759",
    co2_ppm: 360,
    altitude: 133.69,
    latitude: 37.2658055,
    longitude: -122.027203,
  },
  {
    time: "2025-03-16 21:35:33.064895",
    co2_ppm: 372,
    altitude: 131.8,
    latitude: 37.2658079,
    longitude: -122.0272057,
  },
  {
    time: "2025-03-16 21:35:38.071720",
    co2_ppm: 376,
    altitude: 131.2,
    latitude: 37.2658069,
    longitude: -122.0273023,
  },
  {
    time: "2025-03-16 21:35:42.076615",
    co2_ppm: 387,
    altitude: 131.02,
    latitude: 37.2658057,
    longitude: -122.027399,
  },
  {
    time: "2025-03-16 21:35:47.082745",
    co2_ppm: 388,
    altitude: 130.44,
    latitude: 37.2658045,
    longitude: -122.0275238,
  },
  {
    time: "2025-03-16 21:35:52.088998",
    co2_ppm: 392,
    altitude: 130.83,
    latitude: 37.2658043,
    longitude: -122.0276488,
  },
  {
    time: "2025-03-16 21:35:57.095159",
    co2_ppm: 409,
    altitude: 131.41,
    latitude: 37.2658067,
    longitude: -122.0277471,
  },
  {
    time: "2025-03-16 21:36:01.099910",
    co2_ppm: 440,
    altitude: 131.08,
    latitude: 37.2658048,
    longitude: -122.0277472,
  },
  {
    time: "2025-03-16 21:36:06.106518",
    co2_ppm: 488,
    altitude: 131.21,
    latitude: 37.2658707,
    longitude: -122.0277463,
  },
  {
    time: "2025-03-16 21:36:11.112808",
    co2_ppm: 469,
    altitude: 130.68,
    latitude: 37.2658979,
    longitude: -122.0277465,
  },
  {
    time: "2025-03-16 21:36:16.119151",
    co2_ppm: 470,
    altitude: 130.18,
    latitude: 37.2658963,
    longitude: -122.0276993,
  },
  {
    time: "2025-03-16 21:36:20.126892",
    co2_ppm: 469,
    altitude: 130.12,
    latitude: 37.2658954,
    longitude: -122.0276003,
  },
  {
    time: "2025-03-16 21:36:25.130630",
    co2_ppm: 470,
    altitude: 130.55,
    latitude: 37.2658965,
    longitude: -122.0274733,
  },
  {
    time: "2025-03-16 21:36:30.137206",
    co2_ppm: 469,
    altitude: 130.29,
    latitude: 37.265897,
    longitude: -122.0273487,
  },
  {
    time: "2025-03-16 21:36:34.141910",
    co2_ppm: 468,
    altitude: 130.36,
    latitude: 37.2658957,
    longitude: -122.0272475,
  },
  {
    time: "2025-03-16 21:36:39.148189",
    co2_ppm: 492,
    altitude: 130.27,
    latitude: 37.2658959,
    longitude: -122.0272009,
  },
  {
    time: "2025-03-16 21:36:44.154457",
    co2_ppm: 491,
    altitude: 131.26,
    latitude: 37.2659291,
    longitude: -122.0272022,
  },
  {
    time: "2025-03-16 21:36:49.160741",
    co2_ppm: 491,
    altitude: 131.73,
    latitude: 37.265988,
    longitude: -122.0272009,
  },
  {
    time: "2025-03-16 21:36:53.166042",
    co2_ppm: 487,
    altitude: 131.1,
    latitude: 37.2659852,
    longitude: -122.0272042,
  },
  {
    time: "2025-03-16 21:36:58.172929",
    co2_ppm: 487,
    altitude: 131.72,
    latitude: 37.2659858,
    longitude: -122.0273108,
  },
  {
    time: "2025-03-16 21:37:03.178924",
    co2_ppm: 481,
    altitude: 133.21,
    latitude: 37.2659853,
    longitude: -122.0274361,
  },
  {
    time: "2025-03-16 21:37:08.185256",
    co2_ppm: 474,
    altitude: 132.97,
    latitude: 37.2659851,
    longitude: -122.0275619,
  },
  {
    time: "2025-03-16 21:37:12.190022",
    co2_ppm: 468,
    altitude: 132.33,
    latitude: 37.2659857,
    longitude: -122.0276626,
  },
  {
    time: "2025-03-16 21:37:17.196481",
    co2_ppm: 468,
    altitude: 131.8,
    latitude: 37.265986,
    longitude: -122.0277474,
  },
  {
    time: "2025-03-16 21:37:22.202621",
    co2_ppm: 471,
    altitude: 130.57,
    latitude: 37.2659928,
    longitude: -122.0277441,
  },
  {
    time: "2025-03-16 21:37:27.209208",
    co2_ppm: 469,
    altitude: 130.52,
    latitude: 37.2660739,
    longitude: -122.0277451,
  },
  {
    time: "2025-03-16 21:37:31.214342",
    co2_ppm: 471,
    altitude: 130.55,
    latitude: 37.2660773,
    longitude: -122.0277473,
  },
  {
    time: "2025-03-16 21:37:36.220607",
    co2_ppm: 467,
    altitude: 130.72,
    latitude: 37.2660752,
    longitude: -122.02769,
  },
  {
    time: "2025-03-16 21:37:41.226899",
    co2_ppm: 468,
    altitude: 131,
    latitude: 37.2660731,
    longitude: -122.0275685,
  },
  {
    time: "2025-03-16 21:37:46.233237",
    co2_ppm: 467,
    altitude: 130.2,
    latitude: 37.2660747,
    longitude: -122.0274426,
  },
  {
    time: "2025-03-16 21:37:50.238026",
    co2_ppm: 465,
    altitude: 129.98,
    latitude: 37.2660749,
    longitude: -122.0273422,
  },
  {
    time: "2025-03-16 21:37:55.244954",
    co2_ppm: 457,
    altitude: 130.09,
    latitude: 37.2660738,
    longitude: -122.0272188,
  },
  {
    time: "2025-03-16 21:38:00.250750",
    co2_ppm: 458,
    altitude: 130.85,
    latitude: 37.2660758,
    longitude: -122.0271999,
  },
  {
    time: "2025-03-16 21:38:05.257303",
    co2_ppm: 482,
    altitude: 131.88,
    latitude: 37.2661358,
    longitude: -122.0271984,
  },
  {
    time: "2025-03-16 21:38:09.262644",
    co2_ppm: 481,
    altitude: 131.72,
    latitude: 37.2661672,
    longitude: -122.0271987,
  },
  {
    time: "2025-03-16 21:38:14.268918",
    co2_ppm: 482,
    altitude: 131.6,
    latitude: 37.2661658,
    longitude: -122.0272263,
  },
  {
    time: "2025-03-16 21:38:19.277935",
    co2_ppm: 488,
    altitude: 132.66,
    latitude: 37.2661654,
    longitude: -122.0273539,
  },
  {
    time: "2025-03-16 21:38:23.280185",
    co2_ppm: 486,
    altitude: 133.14,
    latitude: 37.2661646,
    longitude: -122.0274537,
  },
  {
    time: "2025-03-16 21:38:28.286530",
    co2_ppm: 485,
    altitude: 133.52,
    latitude: 37.2661654,
    longitude: -122.0275781,
  },
  {
    time: "2025-03-16 21:38:33.292717",
    co2_ppm: 493,
    altitude: 132.17,
    latitude: 37.2661641,
    longitude: -122.0277049,
  },
  {
    time: "2025-03-16 21:38:38.299131",
    co2_ppm: 492,
    altitude: 131.62,
    latitude: 37.2661658,
    longitude: -122.0277483,
  },
  {
    time: "2025-03-16 21:38:42.304523",
    co2_ppm: 470,
    altitude: 130.7,
    latitude: 37.2661819,
    longitude: -122.027746,
  },
];

export default function MapDrawer({ prevData, signOut, user, tutorial }) {
  const stepsRef = useRef(null);

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [uploadData, setUploadData] = useState(null);
  const [file, setFile] = useState(null);
  const [saved, setSaved] = useState(false);
  const [tutorialStart, setTutorialStart] = useState(tutorial);
  const [opened, setOpened] = useState(false);
  const [forward, setForward] = useState(true);

  const tabs = ["New Map", "Flight Stats", "Previous Logs"]

  function average(arr) {
    if (arr.length === 0) {
      return 0;
    }
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  function countGreaterThan(arr, value1, value2) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < value2 && arr[i] > value1) {
        count++;
      }
    }
    return count;
  }
  

  // console.log()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (index) => {
    if (!open) {
      handleDrawerOpen();
    }
    setTab(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Steps
        ref={stepsRef}
        enabled={tutorialStart}
        initialStep={0}
        steps={[
          { element: ".map", intro: "Map step" },
          { element: ".drawer", intro: "Drawer step" },
          { element: ".csvbutton", intro: "Csv step" },
          { element: ".upload", intro: "Upload step" },
          { element: ".flightstats", intro: "Flightstats step" },
          { element: ".previouslogs", intro: "Previouslogs step" },
          { element: ".previouslogs2", intro: "Previouslogs2 step" },
          { element: ".previouslogs3", intro: "Previouslogs3 step" },
          { element: ".mappoint", intro: "Mappoint step" },
          { element: ".end", intro: "Finish step" },
        ]}
        onBeforeChange={async (nextStepIndex) => {
          if (nextStepIndex === 3) {
            setTab(0);
            setUploadData({ data: defaultFile, filename: "test.csv" });
            setFile({ name: "test.csv", size: 3782 });
            setData([{ data: defaultFile, filename: "test.csv" }]);
          }
          if (nextStepIndex === 4) {
            setTab(1);
          }
          if (nextStepIndex === 5) {
            setTab(2);
            if (!forward) {
              setOpened((prev) => !prev);
              setForward(true);
            }
          }
          if (nextStepIndex === 6) {
            if (forward) {
              setOpened((prev) => !prev);
              setForward(false);
            }
          }
          if (nextStepIndex === 7) {
            if (forward) {
              setOpened((prev) => !prev);
              setForward(false);
            }
          }
          if (nextStepIndex === 8) {
            if (!forward) {
              setOpened((prev) => !prev);
              setForward(true);
            }
          }
          await new Promise((resolve) =>
            setTimeout(() => {
              stepsRef.current.updateStepElement(nextStepIndex);
              resolve(true);
            }, 500)
          );
        }}
        onExit={() => setTutorialStart(false)}
      />

      <CssBaseline />
      <AppBar
        position="fixed"
        signOut={signOut}
        user={user}
        menu={
          <Tooltip title="Map Menu" placement="bottom">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        }
        open={open}
      />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ flex: 1, flexDirection: "row", display: "flex" }}>
          <Box>
            <List className="drawer">
              {tabs.map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Tooltip title={text} placement="right">
                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          maxWidth: 65,
                          px: 2.5,
                        },
                        {
                          justifyContent: "center",
                        },
                      ]}
                      onClick={() => handleButtonClick(index)}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            //   maxWidth: 5,
                            justifyContent: "center",
                          },
                          {
                            mr: "auto",
                          },
                        ]}
                      >
                        {index == 0 ? (
                          <MapIcon />
                        ) : index === 1 ? (
                          <InsertChartIcon />
                        ) : (
                          <FlightIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={[
                          {
                            opacity: 0,
                          },
                        ]}
                      />
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ margin: 1, minWidth: 150, maxWidth: 150 }}>
            {tab === 0 ? (
              <div>
                <DropFileButton
                  className="csvbutton"
                  setData={setData}
                  setFile={setFile}
                  uploadData={uploadData}
                  setUploadData={setUploadData}
                  file={file}
                />
                {user && uploadData?.data?.length > 0 && (
                  <SaveModal
                    data={uploadData.data}
                    file={file}
                    setSaved={setSaved}
                  />
                )}
              </div>
            ) : tab === 1 ? (
              <div className="flightstats">
                <p style={{ textAlign: "center" }}>
                  <b>Flight Stats</b>
                </p>
                <br />
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <Box
                      key={index}
                      style={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: 5,
                        marginBottom: 10,
                      }}
                    >
                      <div
                        key={index}
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          padding: 5,
                          marginBottom: 10,
                        }}
                        className="flightstats2"
                      >
                        <Typography variant="h6">
                          <b>{item.filename}</b>
                        </Typography>
                        <p>
                          <b>CO2 Stats:</b>
                        </p>
                        <p>
                          Avg:{" "}
                          {Math.round(
                            average(item.data.map((item) => item.co2_ppm))
                          )}{" "}
                          ppm
                        </p>
                        <p>
                          Max:{" "}
                          {Math.max(...item.data.map((item) => item.co2_ppm))}{" "}
                          ppm
                        </p>
                        <p>
                          Min:{" "}
                          {Math.min(...item.data.map((item) => item.co2_ppm))}{" "}
                          ppm
                        </p>
                        <br />
                        <p>
                          <b>Risk Assessment:</b>
                        </p>
                        <p style={{ color: "red" }}>
                          High Risk:{" "}
                          {countGreaterThan(
                            item.data.map((item) => item.co2_ppm),
                            1500,
                            10000
                          )}{" "}
                          pts
                        </p>
                        <p style={{ color: "orange" }}>
                          Medium Risk:{" "}
                          {countGreaterThan(
                            item.data.map((item) => item.co2_ppm),
                            1000,
                            1500
                          )}{" "}
                          pts
                        </p>
                        <p style={{ color: "green" }}>
                          Low Risk:{" "}
                          {countGreaterThan(
                            item.data.map((item) => item.co2_ppm),
                            0,
                            1000
                          )}{" "}
                          pts
                        </p>
                        <p>Total: {item.data.length} pts</p>
                        <br />
                        <p>
                          <b>Altitude Stats:</b>
                          <br />
                        </p>
                        <p>
                          Avg:{" "}
                          {Math.round(
                            average(item.data.map((item) => item.altitude))
                          )}{" "}
                          ft
                        </p>
                        <p>
                          Max:{" "}
                          {Math.max(...item.data.map((item) => item.altitude))}{" "}
                          ft
                        </p>
                        <p>
                          Min:{" "}
                          {Math.min(...item.data.map((item) => item.altitude))}{" "}
                          ft
                        </p>
                        <br />
                      </div>
                    </Box>
                  ))
                ) : (
                  <p>
                    Upload Data for Flight <br /> Stats
                  </p>
                )}
              </div>
            ) : tutorial || user ? (
              <div className={"previouslogs"}>
                <PreviousLogs
                  totalData={
                    tutorial
                      ? prevData?.length > 0
                        ? [
                            {
                              data: defaultFile,
                              filename: "test.csv",
                              id: "2dad2f07-993e-4619-9004-aa98a47da249",
                              created_at: "2025-03-27 18:21:36.615369+00",
                            },
                            ...prevData,
                          ]
                        : [
                            {
                              data: defaultFile,
                              filename: "test.csv",
                              id: "2dad2f07-993e-4619-9004-aa98a47da249",
                              created_at: "2025-03-27 18:21:36.615369+00",
                            },
                          ]
                      : prevData
                  }
                  data={data}
                  setData={setData}
                  setSaved={setSaved}
                  open={opened}
                  setOpen={setOpened}
                />
              </div>
            ) : (
              <Typography variant="h6">Log In to View Previous Logs</Typography>
            )}
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Snackbar open={saved === true} autoHideDuration={6000}>
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Saved successfully!
          </Alert>
        </Snackbar>
        <Snackbar open={saved === 2} autoHideDuration={6000}>
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            Deleted successfully!
          </Alert>
        </Snackbar>
        <LazyLoadingMap data={data} className="map" />
      </Box>
    </Box>
  );
}