import React from 'react';
import axios from 'axios';


const CharacterInfo = (props) => {

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
    const url = `${process.env.REACT_APP_MARVEL_URL}/characters/${props.id}?apikey=${process.env.REACT_APP_API_KEY}`  
      try {
        const result = await axios(url);
        setCharacter(result);
      } catch (error) {
          console.log("there's error", error)
      }
    } 

    fetchCharacter();

  },[props.id]);

  return(
    
      <> 
        <div className="character-container" >

          <h1 className="character-name" > { results[0].name ? (results[0].name) : ("ups...")}</h1>

          <img className="character-image"
            src={`${results[0].thumbnail.path}.${results[0].thumbnail.extension}?apikey=${process.env.REACT_APP_API_KEY}`} 
            alt="character-pic" 
          />

        </div>
      </>
  );
};

export default CharacterInfo;

/* Removed ClassName for image */