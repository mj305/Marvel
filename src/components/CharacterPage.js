import React from 'react';
import axios from 'axios';
/* import NavBar from './NavBar';
import Footer from './Footer'; */

const CharacterPage = () => {

  //SHAPE OF DATA CAN BE REPLACED BY AN IF/ELSE

  const [query, setQuery] = React.useState({
    data:{
      data:{
        results:[{
          thumbnail:{
            extension: " ",
            path:" "
          },
          comics: {
            items:[]
          },
          series: {
            items: []
          },
            stories: {
            items: []
          }
        }]
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
  console.log(results[0])

  const comics = results[0].comics.items.map(comic => (
    <li key={comic.name} > { comic.name } </li>
  ))

  const series = results[0].series.items.map(series => (
    <li key={series.name} > { series.name }  </li>
  ))

  const stories = results[0].stories.items.map(stories => (
    <li key={stories.name} > { stories.name } </li>
  ))

  return (

    <>
      <div className="character-page-content" >

        <h1> { results[0].name ? (results[0].name) : ("ups...")}</h1>

       <img src={`${results[0].thumbnail.path}.${results[0].thumbnail.extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} className="App-logo" alt="logo" />

        <ul> Comics: { comics }</ul>

        <ul> Series: { series } </ul>

        <ul> Stories: { stories }</ul>

      </div>   
    </>
  )
};

export default CharacterPage;