import React from 'react';
import axios from 'axios';

const CharacterPage = () => {

  //SHAPE OF DATA CAN BE REPLACED BY AN IF/ELSE

  const [query, setQuery] = React.useState({
    data:{
      data:{
        results:[{}]
      }
    }
  });

  const {results} = query.data.data

  React.useEffect(() => {
    const fetchData = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=5189968cf45946bfc4dba96d1349fe75`  
      try {
        const result = await axios(url);
        setQuery(result);
      } catch (error) {
          console.log("there's error", error)
      }
    }
    fetchData();
  },[]);
  console.log(results[0].name)
  
  return (
  <p> { results[0].name ? (results[0].name) : ("ups...") } </p>
  )
};

export default CharacterPage;