import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CharacterInfo from './components/CharacterInfo';

import AboutPage from './pages/AboutPage';
import AllCharactersPage from './pages/AllCharactersPage';
import CharactersPage from './pages/CharacterPage';
import ForgotPassword from './pages/ForgotPassword';
import LogIn from './pages/LogIn';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';

import './App.css'


const App = () => {

  return (

    <div >
      <Router>
          <Switch>

              <Route path="/about" >
                <AboutPage />
              </Route>

              <Router path="/signup" >
                <SignUp />
              </Router>

              <Route path="/login" >
                <LogIn/>
              </Route>

              <Route path="forgotpassword" >
                 <ForgotPassword/>
              </Route>

              <Route path="/allcharacters">
                <AllCharactersPage />
              </Route>

              <Route path="/characterpage/:id">
                <CharactersPage />
              </Route>

              <Route path="/characterinfo">
                <CharacterInfo />
              </Route>

              <Route path="/">
                <MainPage />
              </Route>

          </Switch>
      </Router>
    </div>  
  )
};

export default App;