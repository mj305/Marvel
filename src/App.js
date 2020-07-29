import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import jwtDecode from 'jwt-decode';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CharacterInfo from './components/CharacterInfo';

import AboutPage from './pages/AboutPage';
import AllCharactersPage from './pages/AllCharactersPage';
import CharactersPage from './pages/CharacterPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPasswordPage'
import LogIn from './pages/LogIn';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';


import './styles/App.css'


const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const decoded = jwtDecode(token)
       setUser(decoded)
    } 
    
  }, [])    
 //Routing
  return (

    <div>
      <Router>
          <Switch>

              <Route path="/about" >
                <AboutPage />
              </Route>

              <Route path="/signup" >
                <SignUp user={user} />
              </Route>

              <Route path="/login" >
                <LogIn/>
              </Route>

              <Route path="/forgotpassword" >
                 <ForgotPassword/>
              </Route>

              <Route path="/resetpassword/:token/:email">
                <ResetPassword/>
              </Route>

              <Route path="/allcharacters" >
                <AllCharactersPage user={user} />
              </Route>

              <Route path="/characterpage/:id">
                <CharactersPage user={user} />
              </Route>

              <Route path="/characterinfo">
                <CharacterInfo />
              </Route>

              <Route path="/">
                <MainPage />
              </Route>

          </Switch>
      </Router>
      <ToastContainer />
    </div>  
  )
};

export default App;