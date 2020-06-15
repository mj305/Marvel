import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterInfo from '../components/CharacterInfo';
import ComicsInfo from '../components/ComicsInfo';
import SeriesInfo from '../components/SeriesInfo';



const CharacterPage = () => {
  const {id} = useParams(); 

  return (
    <>
        <div>
          <CharacterInfo id={id}/>
          <ComicsInfo id={id} /> 
          <SeriesInfo id={id} />
        </div>  
    </>
  )
};

export default CharacterPage;