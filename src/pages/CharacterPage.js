import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterInfo from '../components/CharacterInfo';
import ComicsInfo from '../components/ComicsInfo';
import SeriesInfo from '../components/SeriesInfo';
import StoriesInfo from '../components/StoriesInfo';



const CharacterPage = () => {
  const {id} = useParams(); 

  return (
    <>
        <div>
          <CharacterInfo id={id}/>
          <StoriesInfo id={id} />
          <SeriesInfo id={id} />
          <ComicsInfo id={id} /> 
        </div>  
    </>
  )
};

export default CharacterPage;