import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import CharactersPage from './pages/CharacterPage';
import CharacterInfo from './components/CharacterInfo';
import MainPage from './pages/MainPage';


const App = () => {

  return (

    <div >
      <Router>
          <Switch>

              <Route path="/characterpage">
                <CharactersPage />
              </Route>

              <Route path="/allcharacters">
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