import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllCharactersPage = () => {

  const [allCharacters, setAllCharacters] = React.useState({
    data: {
      data: {
        results: [{
          thumbnail: {
            extension: " ",
            path: " "
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
    console.log(data)
    return (
     
      <Link to={`/characterpage/${data.id}`} >
          <p key={data.id}> {data.name} </p>
          <img src={`${data.thumbnail.path}.${data.thumbnail.extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} />
      </Link>
    )
  })

  return( 
    
    <>
      {allCharactersMap}
    </>
   )
};

export default AllCharactersPage;