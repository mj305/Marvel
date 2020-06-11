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

  const [comics, setComics] = React.useState({
    data: {
      data: {
        results: [{
          /* title: " ", */
          images: [{
            path: " ",
            extension: " ",
          }]
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
    const fetchComics = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters/1011334/comics?apikey=5189968cf45946bfc4dba96d1349fe75`
      try {
        const result = await axios(url);
        setComics(result);
      } catch (error) {
        console.log("there is an error", error)
      }
    }

    fetchData();

    fetchComics();
  },[]);

 


  const characterComics = comics.data.data.results.map(data => {
    let images;

    if(data.images === undefined || data.images.length === 0){
       images = <p>NO IMAGE FOUND</p>    
    } else {
      images = <img src={`${data.images[0].path}.${data.images[0].extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} alt="book pic" className="character-comic-image" />
    }
    
    return(
      <>
      {console.log(data.images)}
      
        <li className="title-of-comics" key={data.title} > { data.title } </li> 
        {images} 

      </>
     )
    })

  const series = results[0].series.items.map(series => (
    <li key={series.name} > { series.name }  </li>
  ))

  const stories = results[0].stories.items.map(stories => (
    <li key={stories.name} > { stories.name } </li>
  ))


  return (

    <>
      <div className="character-page-content" >

      <div className="character-page-header" >
        <h1 className="character-page-title" > { results[0].name ? (results[0].name) : ("ups...")}</h1>

        <img className="character-page-pic" 
             src={`${results[0].thumbnail.path}.${results[0].thumbnail.extension}?apikey=5189968cf45946bfc4dba96d1349fe75`} 
             alt="character-pic" 
          />
      </div>
      
      <div className="comic-books-container" >
        <h1 className="comic-books-title" >Comics</h1>
        <ul className="comic-book-detail" > { characterComics }</ul>
      </div>  

        <ul> Series: { series } </ul>

        <ul> Stories: { stories }</ul>

      </div>   
    </>
  )
};

export default CharacterPage;