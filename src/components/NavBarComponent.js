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

  const handleNavigation = (route) => {
     /*   history.push(`/${route}`)  */
       console.log(route)
  }


  return (

    <div className="nav-bar-container" >
      <div className={classes.root}>
          <AppBar position="static">
              <Toolbar>

               <Link to="/"> 
                  <IconButton >
                    <img src={logo} className="all-characters-page-logo" alt="logo" />
                  </IconButton>
                </Link>

                <div className="nav-bar-about-auth-container" >
                    <Link className="nav-bar-group-item" className="nav-bar-about" color="inherit" to="/about" >About </Link>
                    <Link className="nav-bar-group-item" className="nav-bar-login" color="inherit" to="/login"> Login</Link> 
                    <Link className="nav-bar-group-item" className="nav-bar-signup" color="inherit" to="/signup"> Sign-Up</Link> 
                </div>

              </Toolbar>
          </AppBar>
      </div>
    </div>
   
  );
}