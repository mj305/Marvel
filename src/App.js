import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CharacterInfo from './components/CharacterInfo';
import ProtectedRoute from './components/ProtectedRouteComponent';

import AboutPage from './pages/AboutPage';
import AllCharactersPage from './pages/AllCharactersPage';
import CharactersPage from './pages/CharacterPage';
import ForgotPassword from './pages/ForgotPassword';
import LogIn from './pages/LogIn';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';

import './App.css'


const App = () => {
  const [user, setUser] = useState({
   data: {auth: false}
  })

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")

      const result = await axios.get("http://localhost:4000/me", {
        headers: {authorization: `Bearer ${token}`}, 
        
      })  
      console.log("authResult", result)
      setUser(result)
    }
    fetchUser()
  }, [])   

  console.log("app.js", user.data.auth)

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

              <ProtectedRoute path="/allcharacters" isAutenticated={user.data.auth} >
                <AllCharactersPage user={user} />
              </ProtectedRoute>

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