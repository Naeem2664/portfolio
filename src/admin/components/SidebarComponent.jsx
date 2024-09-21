import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";

import "../styles/sidebar.css";
export default function DrawerFilters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-secondary">
          <Toolbar>
            <Button
              className="bg-black text-white"
              size="large"
              edge="start"
              bgcolor="black"
              onClick={() => setOpen(true)}
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, bgcolor: "white", color: "black" }}
            >
              <HiOutlineMenuAlt1
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  fontWeight: "bold",
                }}
              />
            </Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Muhammad Naeem
            </Typography>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <DialogTitle className='m-3'>Tools</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "10px" }} />
          <div className="links">
            <ul>
              {[
                {
                  name: "Dashboard",
                  to: "/admin",
                },
                {
                  name: "About Me",
                  to: "/admin/about_user",
                },
                {
                  name: "Skills",
                  to: "/admin/skills",
                },
                {
                  name: "Experiences",
                  to: "/admin/experiences",
                },
                {
                  name: "Education",
                  to: "/admin/education",
                },
                {
                  name: "Projects",
                  to: "/admin/projects",
                },
                {
                  name: "Services",
                  to: "/admin/services",
                },
                {
                  name: "Users",
                  to: "/admin/contacted_users",
                },
                
              ].map((item) => (
                <li>
                  <Link
                    to={item.to}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Divider sx={{ mt: "auto" }} />
          <div className="m-3">
            <h6>Sign Out</h6>
          </div>
        </Sheet>
      </Drawer>
    </>
  );
}
