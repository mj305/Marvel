import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavBarComponent from '../components/NavBarComponent';

import '../styles/MainPage.css'

function MainPage() {

  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const url = `${process.env.REACT_APP_MARVEL_URL}/characters?apikey=${process.env.REACT_APP_API_KEY}`  
      try {
        const result = await axios(url);
        setQuery(result);
      } catch (error) {
          console.log("there's error", error)
      }
    }
    fetchData();
  },[]);
  console.log(query);

  return (
    <>
      <div>
        <div className="main-page-nav-bar-container" >
          <NavBarComponent />
        </div>
          <header className="App-header">
              <h1 className="tracking-in-expand-fwd-top" >Marvel</h1>
          </header>
      </div>
    </>
  );
}

export default MainPage;
