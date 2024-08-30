import  React ,{useState} from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from "@mui/joy/Drawer";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import FormLabel from "@mui/joy/FormLabel";
import Stack from "@mui/joy/Stack";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import AspectRatio from "@mui/joy/AspectRatio";
import Done from "@mui/icons-material/Done";
import Checkbox from "@mui/joy/Checkbox";
import { FormHelperText } from "@mui/joy";
import Switch from "@mui/joy/Switch";
import '../styles/sidebar.css';
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
            sx={{ mr: 2 ,bgcolor:"white",color:"black"}}
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
         <Link to="/login"><Button color="inherit" >Login</Button></Link> 
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
              bgcolor: 'transparent',
              p: { md: 3, sm: 0 },
              boxShadow: 'none',
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <DialogTitle>Filters</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: '10px' }} />
          
               
                  {[
                   {
                    name: "Dashboard",
                    to: "/admin",
                    icon: <HomeRoundedIcon />,
                  },
                  {
                    name: "About Me",
                    to: "/admin/about_user",
                    icon: <HomeRoundedIcon />,
                  },
                  {
                    name: "Skills",
                    to: "/admin/skills",
                    icon: <ApartmentRoundedIcon />,
                  },
                  {
                    name: "Experiences",
                    to: "/admin/experiences",
                    icon: <MeetingRoomRoundedIcon />,
                  },
                  {
                    name: "Education",
                    to: "/admin/education",
                    icon: <HotelRoundedIcon />,
                  },
                  {
                    name: "Projects",
                    to: "/admin/projects",
                    icon: <HotelRoundedIcon />,
                  },
                  {
                    name: "Services",
                    to: "/admin/services",
                    icon: <HotelRoundedIcon />,
                  },
                  {
                    name: "Users",
                    to: "/admin/contacted_users",
                    icon: <HotelRoundedIcon />,
                  },
                  {
                    name: "Blogs",
                    to: "/admin/blogs",
                    icon: <HotelRoundedIcon />,
                  },
                  ].map((item) => (
                    <Link to={item.to} style={{ textDecoration: "none", color: "black",backgroundColor:"white"}}>
                    <div className="flex items-center gap-2 cursor-pointer links">
                    <h6>
                      {item.icon} 
                      {item.name}
                    </h6>
                    </div>
                    </Link>
                       
        
                  ))}
          <Divider sx={{ mt: 'auto' }} />
         <div>
         <h6>Sign Out</h6>
         </div>
        </Sheet>
      </Drawer>
    </>
  );
}










