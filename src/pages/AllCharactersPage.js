import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import LoadingComponent from '../components/LoadingComponent';


const AllCharactersPage = () => {

  const [allCharacters, setAllCharacters] = React.useState({
    data: {
      data: {
        results: [{
          thumbnail: {
            extension: "",
            path: ""
          }
        }]
      } 
    }
  });

  React.useEffect(() => {
    
    const fetchAllCharacters = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=5189968cf45946bfc4dba96d1349fe75`
      try {
        const result = await axios(url);
        setAllCharacters(result);
       } catch (error) {
        console.log("there is an error", error)
       }
    }

    fetchAllCharacters();
  },[]);

  const allCharactersMap = allCharacters.data.data.results.map(data => {
    if(data.name){
      return (
      
        <div className="all-characters-container" >
          <Link to={`/characterpage/${data.id}`} >
            <h1 className="all-characters-name" key={data.id}> {data.name} </h1>
            <img className="all-characters-image" src={`${data.thumbnail.path}.${data.thumbnail.extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} />
          </Link>
        </div>
    )
    } else {
      return (
        <LoadingComponent />
      )
    }

    
  })

  return( 
   
     <> 
      <div className="all-characters-nav-bar"  >
          <div> <img src={logo} className="all-characters-page-logo" alt="logo" /> </div> 
          <div> About </div>
          <div> Login / Sign-up </div>
      </div>

      <div>
        <h1 className="all-characters-page-header" >All Characters Page</h1>
        <div className="all-characters-page" >
          {allCharactersMap}
        </div>
      </div>

      <div className="all-characters-footer-container" >
        <div>
          <a href='http://marvel.com' target='blank' >
            <p className="all-characters-page-footer-data-text" > Data provided by Marvel. © 2020 Marvel </p>
          </a>
        </div>

        <div>
          <a href='https://mariabeckles.herokuapp.com/'  target='blank' >
            <p className="all-characters-page-footer-data-text" > Created By Maria Beckles </p>
          </a>
        </div>
      </div> 

     </> 
   )
};

export default AllCharactersPage;