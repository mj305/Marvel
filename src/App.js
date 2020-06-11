import React from 'react';
import './App.css';
import AboutPage from './pages/AboutPage'
import SearchPage from './pages/SearchPage';
import CharactersPage from './pages/CharacterPage';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (

    <div className="backImage" >
      <Router>
          <Switch>
          
              <Route path="/about">
                <AboutPage />
              </Route>

              <Route path="/search">
                <SearchPage />
              </Route>

              <Route path="/characters">
                <CharactersPage />
              </Route>

              <Route path="/characters/:id">
                <CharactersPage />
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