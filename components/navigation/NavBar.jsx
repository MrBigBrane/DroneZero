'use client'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Co2Icon from '@mui/icons-material/Co2';
import { useState } from 'react';
import Link from 'next/link';


const pages = ["Map View", "Our Process", "About Us"];
const menuPages = ["Map View", "Our Process", "About Us", "Sign In", "Sign Up", "Logout"];

export default function NavBar({ menu, signOut, user, ...props }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Opens the navigation menu by setting the anchor element.
 * 
 * @param {object} event - The event object triggered by the user action.
 *                          Used to determine the current target element.
 */

/*******  b6390984-a00a-444f-a84c-3699691c503f  *******/
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" {...props}>
      <Toolbar>
        {menu}
        <Co2Icon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          DroneZero
        </Typography>

        {/* Small Screen Navbar */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link
                  href={
                    page === "Map View"
                      ? "/mapview"
                      : page === "About Us"
                        ? "/aboutus"
                        : "/process"
                  }
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </Link>
              </MenuItem>
            ))}
            {!user
              ? [
                  <MenuItem onClick={handleCloseNavMenu} key={"Sign In"}>
                    <Link href="/sign-in">
                      <Typography sx={{ textAlign: "center" }}>
                        Sign In
                      </Typography>
                    </Link>
                  </MenuItem>,
                  <MenuItem onClick={handleCloseNavMenu} key={"Sign Up"}>
                    <Link href="/sign-up">
                      <Typography sx={{ textAlign: "center" }}>
                        Sign Up
                      </Typography>
                    </Link>
                  </MenuItem>,
                ]
              : [
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      signOut();
                    }}
                    key={"Logout"}
                  >
                    <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                  </MenuItem>,
                ]}
          </Menu>
        </Box>
        <Co2Icon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          DroneZero
        </Typography>

        {/* Large Screen Navbar */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => {
            return (
              <Link
                href={
                  page === "Map View"
                    ? "/mapview"
                    : page === "About Us"
                      ? "/aboutus"
                      : "/process"
                }
                key={page}
                style={{ marginRight: "10px" }}
              >
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            );
          })}
        </Box>
        {!user ? (
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href="/sign-in">
              <Button size="sm" variant="outline">
                Sign in
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm" variant="outline">
                Sign up
              </Button>
            </Link>
          </Box>
        ) : (
          <Button size="sm" variant="outline" onClick={signOut}>
            Logout
          </Button>
        )}
      </Toolbar>

      {/* </Container> */}
    </AppBar>
  );
}