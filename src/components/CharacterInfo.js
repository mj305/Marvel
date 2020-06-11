import React from 'react';
import axios from 'axios';


const CharacterInfo = () => {

  const [character, setCharacter] = React.useState({
    data:{
      data:{
        results:[{
          thumbnail:{
            extension: " ",
            path:" "
          }
        }]
      }
    }
  });

  const {results} = character.data.data

  React.useEffect(() => {
    const fetchCharacter = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=5189968cf45946bfc4dba96d1349fe75`  
      try {
        const result = await axios(url);
        setCharacter(result);
      } catch (error) {
          console.log("there's error", error)
      }
    } 

    fetchCharacter();

  },[]);

  return(
    
      <>
        <div>
          <h1> { results[0].name ? (results[0].name) : ("ups...")}</h1>

          <img
            src={`${results[0].thumbnail.path}.${results[0].thumbnail.extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} 
            alt="character-pic" 
          />
          
        </div>
      </>
  );
};

export default CharacterInfo;