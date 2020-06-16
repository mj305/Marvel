import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBarComponent() {
  const classes = useStyles();

  return (

    <div className="nav-bar-container" >
      <div className={classes.root}>
          <AppBar position="static">
              <Toolbar>

                <IconButton >
                  <img href="#home" src={logo} className="all-characters-page-logo" alt="logo" />
                </IconButton>

                <Button className="nav-bar-about" color="inherit">About </Button>
                <Button className="nav-bar-login" color="inherit">Login / Sign-Up</Button>

              </Toolbar>
          </AppBar>
      </div>
    </div>
   
  );
}