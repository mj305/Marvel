import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import AllCharactersPage from './pages/AllCharactersPage';
import CharactersPage from './pages/CharacterPage';
import CharacterInfo from './components/CharacterInfo';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';


const App = () => {

  return (

    <div >
      <Router>
          <Switch>

              <Route path="/about" >
                <AboutPage />
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