import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png'
import NavBarComponent from '../components/NavBarComponent';

function MainPage() {

  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=5189968cf45946bfc4dba96d1349fe75`  
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
        <NavBarComponent />
          <header className="App-header">

            <a href="http://marvel.com" target="blank" >
              <img src={logo} className="App-logo" alt="logo" />
            </a>   
            
            <p className="main-page-paragraph" > Marvel Website Coming Soon...</p>
            
          </header>
        </div>
      </>
  );
}

export default MainPage;
