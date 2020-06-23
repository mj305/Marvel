import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

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

  const history = useHistory();

  const handleAbout = () => {
       history.push("/about") 
  }


  return (

    <div className="nav-bar-container" >
      <div className={classes.root}>
          <AppBar position="static">
              <Toolbar>

               <Link to="/" > 
                  <IconButton >
                    <img href="#" src={logo} className="all-characters-page-logo" alt="logo" />
                  </IconButton>
                </Link>

                <div className="nav-bar-about-auth-container" >
                    <Button className="nav-bar-about" color="inherit" onClick={handleAbout} >About </Button>

                    <Button className="nav-bar-login" color="inherit">Login</Button> 
                    <Button className="nav-bar-login" color="inherit">Sign-Up</Button> 
                </div>

              </Toolbar>
          </AppBar>
      </div>
    </div>
   
  );
}