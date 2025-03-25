'use client'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapIcon from '@mui/icons-material/Map';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import FlightIcon from '@mui/icons-material/Flight';
import { Button, Toolbar, Tooltip } from '@mui/material';
import { useState } from 'react';
import FileButton from '../buttons/FileButton';
import LazyLoadingMap from '../maps/LazyLoadingMap';

const drawerWidth = 300;

export default function MiniDrawer() {
//   const theme = useTheme();
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  return (
    <Box>
      <MuiDrawer
        variant="permanent"
        style={{
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
        }}
      >
        <CssBaseline />
        <Toolbar />
        <Divider />
        <Box sx={{ flex: 1, flexDirection: "row", display: "flex" }}>
          <Box>
            <List>
              {["New Map", "Flight Stats", "Previous Logs"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <Tooltip title={text} placement="right">
                      <ListItemButton
                        sx={[
                          {
                            minHeight: 48,
                            maxWidth: 50,
                            px: 2.5,
                          },
                          {
                            justifyContent: "center",
                          },
                        ]}
                        onClick={() => setTab(index)}
                      >
                        <ListItemIcon
                          sx={[
                            {
                              minWidth: 0,
                              maxWidth: 5,
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
                <FileButton setData={setData} setFile={setFile} />
                {file && <p>File uploaded: {file.name}</p>}
                {data.length > 0 && (
                  <pre
                    style={{
                      textAlign: "left",
                      marginTop: "10px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {JSON.stringify(data, null, 2)}
                  </pre>
                )}
              </div>
            ) : tab === 1 ? (
              <div>
                <p>Flight Stats</p>
                <br />
                <p><b>CO2 Stats:</b></p>
                <p>Avg: 160 ppm</p>
                <p>Max: 200 ppm</p>
                <p>Min: 100 ppm</p>
                <br />
                <p><b>Risk Assessment:</b></p>
                <p>High Risk: 2 pts</p>
                <p>Medium Risk: 1 pts</p>
                <p>Low Risk: 100 pts</p>
                <p>Total: 3 pts</p>
              </div>
            ) : (
              <Button>Previous Logs</Button>
            )}
          </Box>
        </Box>
      </MuiDrawer>
      <LazyLoadingMap data={data} />
    </Box>
  );
}