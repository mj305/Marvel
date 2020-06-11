import React from 'react';
import CharacterInfo from '../components/CharacterInfo';
import ComicsInfo from '../components/ComicsInfo';


const CharacterPage = () => {

  return (
    <>
      <div className="character-page-content" >
        <CharacterInfo />
        <ComicsInfo /> 
      </div>   
    </>
  )
};

export default CharacterPage;