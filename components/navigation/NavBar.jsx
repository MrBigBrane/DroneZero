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

/**
 * Opens the navigation menu by setting the anchor element.
 * 
 * @param {object} event - The event object triggered by the user action.
 *                          Used to determine the current target element.
 */

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
              <Link
                key={page}
                href={
                  page === "Map View"
                    ? "/mapview"
                    : page === "About Us"
                      ? "/aboutus"
                      : "/process"
                }
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>{" "}
              </Link>
            ))}
            {!user
              ? [
                  <Link href="/sign-in" key={"Sign In"}>
                    <MenuItem onClick={handleCloseNavMenu} key={"Sign In"}>
                      <Typography sx={{ textAlign: "center" }}>
                        Sign In
                      </Typography>
                    </MenuItem>{" "}
                  </Link>,
                  <Link href="/sign-up" key={"Sign Up"}>
                    <MenuItem onClick={handleCloseNavMenu} key={"Sign Up"}>
                      <Typography sx={{ textAlign: "center" }}>
                        Sign Up
                      </Typography>
                    </MenuItem>
                  </Link>,
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
                  sx={{
                    color: "white",
                    display: "block",
                    fontFamily: "monospace",
                    fontSize: 17,
                  }}
                >
                  {page}
                </Button>
              </Link>
            );
          })}
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {!user ? (
            <>
              <Link href="/sign-in">
                <Button
                  size="sm"
                  variant="outline"
                  sx={{ fontFamily: "monospace", fontSize: 17 }}
                >
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button
                  size="sm"
                  variant="outline"
                  sx={{ fontFamily: "monospace", fontSize: 17 }}
                >
                  Sign up
                </Button>
              </Link>
            </>
          ) : (
            <Button
              size="sm"
              variant="outline"
              onClick={signOut}
              sx={{ fontFamily: "monospace", fontSize: 17 }}
            >
              Logout
            </Button>
          )}{" "}
        </Box>
      </Toolbar>

      {/* </Container> */}
    </AppBar>
  );
}