import React from 'react';
import './App.css';
import About from './components/About';
import SearchPage from './components/SearchPage';
import CharactersPage from './components/CharacterPage';
import MainPage from './components/MainPage';
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
                <About />
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