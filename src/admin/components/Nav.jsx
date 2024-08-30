import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../styles/nav.css'

const drawerWidth = 240;
/* const navItems = ['Home', 'About','Projects','Experience','Blog','Hire Me'];
 */
const navItems=[
    {
    page:'Dashboard',
    to:'/admin'
},
{
    page:'About User',
    to:'/admin/about_user'
},
{
    page:'Experiences',
    to:'/admin/experiences'
},
{
  page:'Education',
  to:'/admin/education'
},
{
  page:'Skills',
  to:'/admin/skills'
},
{
  page:'Services',
  to:'/admin/services'
},
{
  page:'Projects',
  to:'/admin/projects'
},
{
    page:'Blog',
    to:'/admin/blogs'
},
{
    page:'Contacted Users',
    to:'/admin/contacted_users'

},
]
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',backgroundColor:'#000'}}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.page} disablePadding>
            <Divider />
            <Link to={item.to}>
            <ListItemButton sx={{ textAlign: 'center',color:'#fff',width:'100%' }} className='item-btn'>
              <ListItemText sx={{fontSize:'12px'}} primary={item.page} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
        
       
      </List>
    </Box>
  );

  const container = window !==undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}} >
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:`white`,color:'black'}}>
        <Toolbar>
          <IconButton
            color="#00a6fa"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:'#2af598'}} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },fontSize:'20px' }}
          >
            <Link to={'/'} style={{listStyle:'none',color:'#43e97b',borderRadius:'6px',backgroundColor:'rgba(12, 12, 12, 0)',padding:'6px',fontSize:'30px'}}>

            Muhammad Naeem
            </Link>
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Link key={item.page} to={item.to}>
                    <Button sx={{ color: 'black',fontSize:'12px' }} className='item-btn-desktop'>
                {item.page}
              </Button>
              </Link>
              
            ))}
            
          </Box>
          <Box sx={{display:{xs:'block',sm:'block',md:'none',lg:'none',xl:'none'},flexGrow:1}}>
          
            <Typography variant='h6'>
                <Link to={'/'} style={{listStyle:'none',color:'#00a6fa'}}>
                Muhammad Naeem

                </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
