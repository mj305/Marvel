import React from 'react';
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
    <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/characters/:id">
        <CharactersPage />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  </Router>
  )

};

export default App;