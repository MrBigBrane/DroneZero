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
import { useState } from 'react';
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

export default function MapDrawer({ prevData, signOut, user }) {

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [uploadData, setUploadData] = useState([]);
  const [file, setFile] = useState(null);
  const [saved, setSaved] = useState(false);

  const tabs = user ? ["New Map", "Flight Stats", "Previous Logs"] : ["New Map", "Flight Stats"];

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
            <List>
              {tabs.map(
                (text, index) => (
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
                )
              )}
            </List>
          </Box>
          <Box sx={{ margin: 1, minWidth: 150, maxWidth: 150 }}>
            {tab === 0 ? (
              <div>
                <DropFileButton
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
              <div>
                <p style={{ textAlign: "center" }}><b>Flight Stats</b></p>
                <br />
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <Box key={index} style={{ border: "1px solid black", borderRadius: "10px", padding: 5, marginBottom: 10 }}>
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
                        {Math.max(...item.data.map((item) => item.co2_ppm))} ppm
                      </p>
                      <p>
                        Min:{" "}
                        {Math.min(...item.data.map((item) => item.co2_ppm))} ppm
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
                        {Math.max(...item.data.map((item) => item.altitude))} ft
                      </p>
                      <p>
                        Min:{" "}
                        {Math.min(...item.data.map((item) => item.altitude))} ft
                      </p>
                      <br />
                    </Box>
                  ))
                ) : (
                  <p>
                    Upload Data for Flight <br /> Stats
                  </p>
                )}
              </div>
            ) : (
              <PreviousLogs
                totalData={prevData}
                data={data}
                setData={setData}
                setSaved={setSaved}
              />
            )}
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Snackbar open={saved === true} autoHideDuration={6000}>
          <Alert
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Saved successfully!
          </Alert>
        </Snackbar>
        <Snackbar open={saved === 2} autoHideDuration={6000}>
          <Alert
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Deleted successfully!
          </Alert>
        </Snackbar>
        <LazyLoadingMap data={data} />
      </Box>
    </Box>
  );
}