import React from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

const CharacterPage = () => {

  //SHAPE OF DATA CAN BE REPLACED BY AN IF/ELSE

  const [query, setQuery] = React.useState({
    data:{
      data:{
        results:[{
          thumbnail:{
            path:" "
          },
          comics: {
            items:[]
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
  console.log(results[0].comics.items.map(comic => {
    return comic
  }))

  const comics = results[0].comics.items.map(comic => (
    <p key={comic.name} > { comic.name } </p>
  ))

  return (

    <>
    <NavBar />
      <div className="character-page-content" >
        <p>Character Name: { results[0].name ? (results[0].name) : ("ups...")}</p>

       {/* <img src={`${results[0].thumbnail.path}?apikey=5189968cf45946bfc4dba96d1349fe75`} className="App-logo" alt="logo" /> */}

        <p> Comics: { comics }</p>

        <p>{ results[0].name }</p>

        <p>{ results[0].name }</p>

        <p>{ results[0].name }</p>
      </div>
    <Footer />      

    </>
  )
};

export default CharacterPage;